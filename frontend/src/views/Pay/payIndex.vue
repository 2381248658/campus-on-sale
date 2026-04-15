<script setup lang="ts">
import { confirmOrderPayAPI, getOrderAPI } from '@/apis/pay'
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus'
import type { OrderDetail } from '@/types/api'

const route = useRoute()
const router = useRouter()
const payInfo = ref<OrderDetail>({} as OrderDetail)
const confirming = ref<boolean>(false)
// 获取支付方式，1为在线支付，2为货到付款
const payType = ref<number>(parseInt(route.query.payType as string) || 1)
// 根据支付方式计算按钮文本
const payButtonText = computed<string>(() => {
  return payType.value === 1 ? '立即确认支付' : '确认订单'
})
const canConfirmPay = computed<boolean>(() => {
  return !confirming.value && payInfo.value.orderState === 1
})
const orderId = computed<string>(() => String(route.query.id || ''))

const getOrder = async (): Promise<void> => {
  try {
    const res = await getOrderAPI(orderId.value)

    payInfo.value = res
  } catch (err) {
    console.log('支付页基础数据获取失败', err)
  }
}

onMounted(() => getOrder())

const handleConfirmPay = (): void => {
  if (!payInfo.value.payMoney || !orderId.value) return
  if (!canConfirmPay.value) {
    ElMessage({
      type: 'warning',
      message: '当前订单状态不可重复支付',
    })
    return
  }

  // 根据支付方式显示不同的确认信息
  const confirmMessage =
    payType.value === 1
      ? `确认支付金额 ¥${payInfo.value.payMoney?.toFixed(2)} 吗？`
      : `确认提交订单，订单金额 ¥${payInfo.value.payMoney?.toFixed(2)} 吗？`
  const confirmTitle = payType.value === 1 ? '校园结算确认' : '订单提交确认'
  const confirmButtonText = payType.value === 1 ? '确认支付' : '确认提交'

  ElMessageBox.confirm(confirmMessage, confirmTitle, {
    confirmButtonText: confirmButtonText,
    cancelButtonText: '取消',
    type: 'success',
  })
    .then(async () => {
      confirming.value = true
      // 增加一个简单的加载反馈，提升真实感
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
        ElMessage({
          type: 'success',
          message: successMessage,
          duration: 1500,
        })
        setTimeout(() => {
          router.push({
            path: '/member/order',
            query: {
              fromPay: '1',
              orderId: orderId.value,
            },
          })
        }, 500)
      } catch (error) {
        loading.close()
        ElMessage({
          type: 'error',
          message: '支付确认失败，请稍后重试',
        })
      } finally {
        confirming.value = false
      }
    })
    .catch(() => {
      // 用户取消支付不执行任何操作
    })
}

const handlePayLater = (): void => {
  ElMessage({
    type: 'info',
    message: '订单已保留，可在我的订单继续支付',
    duration: 1500,
  })
  setTimeout(() => {
    router.push('/member/order')
  }, 600)
}
</script>

<template>
  <div class="campus-pay-page">
    <div class="container">
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

      <div class="pay-action-card" v-if="payInfo.payMoney">
        <div class="header">
          <p>结算确认</p>
        </div>
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
            <el-button plain class="later-pay-btn" size="large" @click="handlePayLater">稍后支付</el-button>
          </div>
          <p v-if="payInfo.orderState !== 1" class="safe-tip">当前订单状态不可支付，请前往我的订单查看</p>
          <p class="safe-tip">支付保障：校园惠安全支付系统</p>
        </div>
      </div>

      <div v-else style="padding: 100px; text-align: center; background: #fff; margin-top: 20px">
        <p style="color: #999">正在加载订单结算信息...</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.campus-pay-page {
  margin-top: 20px;
}

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