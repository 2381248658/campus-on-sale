<script setup>
import { getOrderAPI } from '@/apis/pay';
import { onMounted, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus';
import { useCartStore } from '@/stores/cartStore';

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const payInfo = ref({})
// 获取支付方式，1为在线支付，2为货到付款
const payType = ref(parseInt(route.query.payType) || 1)
// 根据支付方式计算按钮文本
const payButtonText = computed(() => {
  return payType.value === 1 ? '立即确认支付' : '确认订单'})

const getOrder = async () => {
  try {
    const res = await getOrderAPI(route.query.id)

    payInfo.value = res.data?.result || res.result || res
  } catch (err) {
    console.log('支付页基础数据获取失败', err);
  }
}

onMounted(() => getOrder())


const handleConfirmPay = () => {
  if (!payInfo.value.payMoney) return

  // 根据支付方式显示不同的确认信息
  const confirmMessage = payType.value === 1
    ? `确认支付金额 ¥${payInfo.value.payMoney?.toFixed(2)} 吗？`
    : `确认提交订单，订单金额 ¥${payInfo.value.payMoney?.toFixed(2)} 吗？`
  const confirmTitle = payType.value === 1 ? '校园结算确认' : '订单提交确认'
  const confirmButtonText = payType.value === 1 ? '确认支付' : '确认提交'

  ElMessageBox.confirm(
    confirmMessage,
    confirmTitle,
    {
      confirmButtonText: confirmButtonText,
      cancelButtonText: '取消',
      type: 'success',
    }
  ).then(() => {
    // 增加一个简单的加载反馈，提升真实感
    const loading = ElLoading.service({
      lock: true,
      text: payType.value === 1 ? '正在处理结算并同步购物车...' : '正在提交订单...',
      background: 'rgba(255, 255, 255, 0.7)',
    })

    // 模拟支付处理延迟
      setTimeout(async () => {
        // 无论支付方式如何，都清理购物车中选中的商品
        try {
          if (cartStore.clearSelectedCart) {
            await cartStore.clearSelectedCart()
          }
        } catch (error) {
          console.error('购物车清理失败', error)
        }

        loading.close()

        if (payType.value === 1) {
          // 在线支付：跳转到首页
          ElMessage({
            type: 'success',
            message: '支付成功！祝您生活愉快',
            duration: 1500
          })

          // 延迟跳转回首页
          setTimeout(() => {
            router.push('/')
          }, 1000)
        } else {
          // 货到付款：直接跳转到订单列表页
          ElMessage({
            type: 'success',
            message: '订单已提交，请准备收货付款',
            duration: 1500
          })

          // 延迟跳转到订单列表页
          setTimeout(() => {
            router.push('/member/order')
          }, 1000)
        }
      }, 1200)
  }).catch(() => {
    // 用户取消支付不执行任何操作
  })
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
          <el-button type="primary" class="main-pay-btn" size="large" @click="handleConfirmPay">
            {{ payButtonText }}
          </el-button>
          <p class="safe-tip">支付保障：校园惠安全支付系统</p>
        </div>
      </div>

      <div v-else style="padding: 100px; text-align: center; background: #fff; margin-top: 20px;">
        <p style="color: #999;">正在加载订单结算信息...</p>
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

    .main-pay-btn {
      width: 300px;
      height: 55px;
      font-size: 20px;
      background-color: $campusColor;
      border-color: $campusColor;
      border-radius: 4px;
      transition: all 0.3s;

      &:hover {
        opacity: 0.9;
        transform: scale(1.02);
      }
    }

    .safe-tip {
      margin-top: 20px;
      color: #ccc;
      font-size: 13px;
    }
  }
}
</style>
