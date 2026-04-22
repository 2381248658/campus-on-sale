<!--
  @file 支付页面
  @description 订单支付确认页面，支持在线支付和货到付款
-->
<script setup lang="ts">
import { confirmOrderPayAPI, getOrderAPI } from '@/apis/pay'
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus'
import type { OrderDetail } from '@/types/api'

const route = useRoute()
const router = useRouter()
/** 订单详情 */
const payInfo = ref<OrderDetail>({} as OrderDetail)
/** 确认支付中 */
const confirming = ref<boolean>(false)
/** 支付方式：1在线支付 2货到付款 */
const payType = ref<number>(parseInt(route.query.payType as string) || 1)
/** 加载失败 */
const loadError = ref<boolean>(false)

/** 支付按钮文案 */
const payButtonText = computed<string>(() => (payType.value === 1 ? '立即确认支付' : '确认订单'))

/** 是否可确认支付 */
const canConfirmPay = computed<boolean>(() => !confirming.value && payInfo.value.orderState === 1)

/** 订单ID */
const orderId = computed<string>(() => String(route.query.id || ''))

/**
 * 获取订单详情
 */
const getOrder = async (): Promise<void> => {
  if (!orderId.value) {
    loadError.value = true
    return
  }
  try {
    const res = await getOrderAPI(orderId.value)
    payInfo.value = res
  } catch (err) {
    console.log('支付页基础数据获取失败', err)
    loadError.value = true
  }
}

onMounted(() => getOrder())

/**
 * 确认支付
 */
const handleConfirmPay = (): void => {
  if (!payInfo.value.payMoney || !orderId.value) return
  if (!canConfirmPay.value) {
    ElMessage({ type: 'warning', message: '当前订单状态不可重复支付' })
    return
  }

  const confirmMessage =
    payType.value === 1
      ? `确认支付金额 ¥${payInfo.value.payMoney?.toFixed(2)} 吗？`
      : `确认提交订单，订单金额 ¥${payInfo.value.payMoney?.toFixed(2)} 吗？`
  const confirmTitle = payType.value === 1 ? '校园结算确认' : '订单提交确认'
  const confirmButtonText = payType.value === 1 ? '确认支付' : '确认提交'

  ElMessageBox.confirm(confirmMessage, confirmTitle, {
    confirmButtonText,
    cancelButtonText: '取消',
    type: 'success',
  })
    .then(async () => {
      confirming.value = true
      const loading = ElLoading.service({
        lock: true,
        text: payType.value === 1 ? '正在确认支付...' : '正在确认订单...',
        background: 'rgba(255, 255, 255, 0.7)',
      })

      try {
        await confirmOrderPayAPI(orderId.value)
        loading.close()
        const successMessage =
          payType.value === 1 ? '支付成功，订单已进入待发货' : '订单已确认，商家将尽快发货'
        ElMessage({ type: 'success', message: successMessage, duration: 1500 })
        setTimeout(() => {
          router.replace({ path: '/member/order', query: { fromPay: '1', orderId: orderId.value } })
        }, 500)
      } catch {
        loading.close()
        ElMessage({ type: 'error', message: '支付确认失败，请稍后重试' })
      } finally {
        confirming.value = false
      }
    })
    .catch(() => {})
}

/**
 * 稍后支付
 */
const handlePayLater = (): void => {
  ElMessage({ type: 'info', message: '订单已保留，可在我的订单继续支付', duration: 1500 })
  setTimeout(() => router.replace('/member/order'), 600)
}
</script>

<template>
  <div class="campus-pay-page">
    <div class="container">
      <!-- ========== 支付信息 ========== -->
      <div class="pay-info" v-if="payInfo.payMoney">
        <span class="icon iconfont icon-lijiqueren"></span>
        <div class="tip">
          <p>订单提交成功！请核对结算信息。</p>
          <p>订单编号：{{ route.query.id }}</p>
        </div>
        <div class="amount">
          <span>实付金额：</span>
          <span class="money">¥{{ payInfo.payMoney?.toFixed(2) }}</span>
        </div>
      </div>

      <!-- ========== 支付操作卡片 ========== -->
      <div class="pay-action-card" v-if="payInfo.payMoney">
        <div class="header"><p>结算确认</p></div>
        <div class="content">
          <p class="notice">您正在进行校园惠快速结算，点击下方按钮即可完成支付。</p>
          <div class="pay-actions">
            <el-button
              type="primary"
              class="main-pay-btn"
              size="large"
              :disabled="!canConfirmPay"
              @click="handleConfirmPay"
            >
              {{ payButtonText }}
            </el-button>
            <el-button plain class="later-pay-btn" size="large" @click="handlePayLater"
              >稍后支付</el-button
            >
          </div>
          <p v-if="payInfo.orderState !== 1" class="safe-tip">
            当前订单状态不可支付，请前往我的订单查看
          </p>
          <p class="safe-tip">支付保障：校园惠安全支付系统</p>
        </div>
      </div>

      <!-- ========== 加载中 ========== -->
      <div v-else-if="!loadError" style="padding: 100px; text-align: center; background: #fff; margin-top: 20px">
        <p style="color: #999">正在加载订单结算信息...</p>
      </div>

      <!-- ========== 加载失败 ========== -->
      <div v-else style="padding: 100px; text-align: center; background: #fff; margin-top: 20px">
        <p style="color: #999; margin-bottom: 20px">订单信息加载失败，请返回重新操作</p>
        <el-button type="primary" @click="router.replace('/member/order')">返回我的订单</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* ========== 支付页面 ========== */
.campus-pay-page {
  margin-top: 20px;
}

/* ========== 支付信息 ========== */
.pay-info {
  background: #fff;
  display: flex;
  align-items: center;
  height: 200px;
  padding: 0 80px;
  border-bottom: 1px solid #f5f5f5;
  .icon {
    font-size: 80px;
    color: #1dc779;
  }
  .tip {
    padding-left: 20px;
    flex: 1;
    p {
      &:first-child {
        font-size: 20px;
        margin-bottom: 5px;
      }
      &:last-child {
        color: #999;
        font-size: 16px;
      }
    }
  }
  .amount {
    span {
      &:first-child {
        font-size: 16px;
        color: #999;
      }
      &.money {
        color: $priceColor;
        font-size: 28px;
        font-weight: bold;
      }
    }
  }
}

/* ========== 支付操作卡片 ========== */
.pay-action-card {
  margin-top: 20px;
  background-color: #fff;
  padding-bottom: 70px;
  text-align: center;
  .header {
    height: 70px;
    line-height: 70px;
    padding-left: 30px;
    text-align: left;
    font-size: 16px;
    border-bottom: 1px solid #f5f5f5;
  }
  .content {
    padding: 60px 0;
    .notice {
      color: #666;
      margin-bottom: 30px;
      font-size: 16px;
    }
    .pay-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
    }
    .main-pay-btn,
    .later-pay-btn {
      width: 220px;
      height: 52px;
      font-size: 18px;
      border-radius: $borderRadiusSmall;
    }
    .main-pay-btn {
      background-color: $campusColor;
      border-color: $campusColor;
      transition: all 0.3s;
      &:hover {
        opacity: 0.92;
      }
    }
    .later-pay-btn {
      color: $campusColor;
      border-color: rgba($campusColor, 0.35);
    }
    .safe-tip {
      margin-top: 20px;
      color: #ccc;
      font-size: 13px;
    }
  }
}
</style>
