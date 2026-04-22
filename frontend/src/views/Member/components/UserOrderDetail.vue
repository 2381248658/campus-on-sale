<script setup lang="ts">
import { getOrderDetailAPI } from '@/apis/order'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { OrderDetail, OrderGoods } from '@/types/api'

const route = useRoute()
const router = useRouter()
const loading = ref<boolean>(false)
const orderDetail = ref<OrderDetail | null>(null)

const orderId = String(route.params.id || '')

const getOrderStateLabel = (state: number): string => {
  if (state === 1) return '待支付'
  if (state === 2) return '待发货'
  if (state === 3) return '待收货'
  return '未知状态'
}

const formatTime = (time: string | Date): string => {
  const date = new Date(time)
  if (Number.isNaN(date.getTime())) return '--'
  return date.toLocaleString('zh-CN', { hour12: false })
}

const getOrderDetail = async (): Promise<void> => {
  if (!orderId) return
  loading.value = true
  try {
    orderDetail.value = await getOrderDetailAPI(orderId)
  } catch (error) {
    console.error('获取订单详情失败:', error)
    ElMessage.error('订单详情加载失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

const goToPay = (): void => {
  if (!orderDetail.value) return
  router.push({
    path: '/pay',
    query: { id: orderDetail.value.id, payType: '1' },
  })
}

onMounted(() => {
  getOrderDetail()
})
</script>

<template>
  <div class="order-detail-container" v-loading="loading">
    <template v-if="orderDetail">
      <div class="head">
        <div class="left">
          <h3>订单详情</h3>
          <p>订单编号：{{ orderDetail.id }}</p>
          <p>下单时间：{{ formatTime(orderDetail.createTime) }}</p>
        </div>
        <div class="right">
          <span class="state">{{ getOrderStateLabel(orderDetail.orderState) }}</span>
          <el-button v-if="orderDetail.orderState === 1" type="primary" @click="goToPay">去支付</el-button>
          <el-button @click="router.back()">返回订单列表</el-button>
        </div>
      </div>

      <div class="card">
        <h4>收货信息</h4>
        <p>收货人：{{ orderDetail.userAddresses.receiver }}</p>
        <p>联系电话：{{ orderDetail.userAddresses.contact }}</p>
        <p>收货地址：{{ orderDetail.userAddresses.fullLocation || orderDetail.userAddresses.address }}</p>
      </div>

      <div class="card">
        <h4>商品信息</h4>
        <div class="goods-item" v-for="item in orderDetail.goods" :key="`${orderDetail.id}-${item.skuId}`">
          <img :src="item.picture" alt="订单商品" />
          <div class="info">
            <p class="name">{{ item.name }}</p>
            <p class="attr">{{ item.attrsText || '默认规格' }}</p>
          </div>
          <div class="price">¥{{ Number(item.price || 0).toFixed(2) }}</div>
          <div class="count">x{{ item.count }}</div>
          <div class="total">¥{{ Number((item as OrderGoods).totalPayPrice || item.price * item.count).toFixed(2) }}</div>
        </div>
      </div>

      <div class="card summary">
        <h4>金额汇总</h4>
        <p>商品总价：¥{{ Number(orderDetail.summary.totalPrice || 0).toFixed(2) }}</p>
        <p>运费：¥{{ Number(orderDetail.summary.postFee || 0).toFixed(2) }}</p>
        <p>优惠：-¥{{ Number(orderDetail.summary.discountMoney || 0).toFixed(2) }}</p>
        <p class="pay-money">实付金额：¥{{ Number(orderDetail.payMoney || 0).toFixed(2) }}</p>
      </div>
    </template>

    <el-empty v-else description="未找到订单详情" />
  </div>
</template>

<style scoped lang="scss">
.order-detail-container {
  padding: 20px;
  min-height: 600px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  .left {
    h3 {
      margin-bottom: 8px;
      font-size: 22px;
    }

    p {
      color: $subTextColor;
      line-height: 1.8;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 10px;

    .state {
      color: $campusColor;
      font-weight: 600;
      margin-right: 10px;
    }
  }
}

.card {
  border: 1px solid $borderColor;
  border-radius: $borderRadiusSmall;
  padding: 16px;
  margin-bottom: 14px;

  h4 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.8;
  }
}

.goods-item {
  display: grid;
  grid-template-columns: 64px 1fr 120px 60px 120px;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px dashed #eef2f7;

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    object-fit: cover;
  }

  .name {
    color: $textColor;
    margin-bottom: 4px;
  }

  .attr {
    color: $insTextColor;
    font-size: 12px;
  }

  .price,
  .count,
  .total {
    text-align: right;
    color: $subTextColor;
  }
}

.summary {
  .pay-money {
    margin-top: 8px;
    color: $priceColor;
    font-weight: 600;
    font-size: 18px;
  }
}
</style>
