<script setup lang="ts">
import { getUserOrderAPI } from '@/apis/order'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { TabPaneName } from 'element-plus'
import type { OrderItem } from '@/types/api'

interface TabType {
  name: string
  label: string
  state: number
}

interface OrderSku {
  id: string
  name: string
  picture: string
  price: number
  count: number
  attrsText: string
}

const tabTypes: TabType[] = [
  { name: 'all', label: '全部订单', state: 0 },
  { name: 'unpay', label: '待支付', state: 1 },
  { name: 'deliver', label: '待发货', state: 2 },
  { name: 'receive', label: '待收货', state: 3 },
]
const router = useRouter()
const route = useRoute()

const activeName = ref<number>(0)
const loading = ref<boolean>(false)
const errorText = ref<string>('')
const orderList = ref<OrderItem[]>([])

const page = ref<number>(1)
const pageSize = ref<number>(6)
const total = ref<number>(0)

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

const getSafeSkus = (item: OrderItem): OrderSku[] => {
  if (!Array.isArray(item.skus)) return []
  return item.skus.map((sku) => ({
    id: sku.id || '',
    name: sku.name || '商品信息待补全',
    picture: sku.picture || '',
    price: Number(sku.price || 0),
    count: Number(sku.count || 0),
    attrsText: sku.attrsText || '',
  }))
}

const getOrderList = async (): Promise<void> => {
  loading.value = true
  errorText.value = ''
  try {
    const res = await getUserOrderAPI({
      orderState: activeName.value,
      page: page.value,
      pageSize: pageSize.value,
    })
    orderList.value = res.items || []
    total.value = Number(res.counts || 0)
  } catch (error) {
    console.error('获取订单列表失败:', error)
    orderList.value = []
    total.value = 0
    errorText.value = '订单数据加载失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

const tabChange = (name: TabPaneName): void => {
  activeName.value = Number(name)
  page.value = 1
  getOrderList()
}

const handleCurrentChange = (nextPage: number): void => {
  page.value = nextPage
  getOrderList()
}

const goToPay = (order: OrderItem): void => {
  router.push({
    path: '/pay',
    query: {
      id: order.id,
      payType: '1',
    },
  })
}

const syncFromPayQuery = (): void => {
  if (String(route.query.fromPay || '') !== '1') return
  activeName.value = 2
  page.value = 1
  router.replace({
    path: route.path,
    query: {},
  })
}

watch(
  () => route.query.fromPay,
  () => {
    if (String(route.query.fromPay || '') === '1') {
      syncFromPayQuery()
      getOrderList()
    }
  },
)

onMounted(() => {
  syncFromPayQuery()
  getOrderList()
})
</script>

<template>
  <div class="order-container">
    <el-tabs v-model="activeName" @tab-change="tabChange">
      <el-tab-pane
        v-for="item in tabTypes"
        :key="item.name"
        :label="item.label"
        :name="item.state"
      />
    </el-tabs>

    <div class="main-container" v-loading="loading">
      <div v-if="errorText" class="status-wrapper">
        <el-result icon="error" title="加载失败" :sub-title="errorText">
          <template #extra>
            <el-button type="primary" @click="getOrderList">重新加载</el-button>
          </template>
        </el-result>
      </div>

      <template v-else-if="orderList.length > 0">
        <article
          class="order-card"
          v-for="order in orderList"
          :key="order.id"
          :class="{ clickable: order.orderState === 1 }"
          @click="order.orderState === 1 && goToPay(order)"
        >
          <header class="order-head">
            <div class="meta">
              <span>下单时间：{{ formatTime(order.createTime) }}</span>
              <span>订单编号：{{ order.id }}</span>
            </div>
            <div class="state">{{ getOrderStateLabel(order.orderState) }}</div>
          </header>

          <section class="sku-list">
            <div class="sku-item" v-for="sku in getSafeSkus(order)" :key="`${order.id}-${sku.id}`">
              <img v-if="sku.picture" :src="sku.picture" alt="订单商品" />
              <div v-else class="sku-empty-img">暂无图片</div>
              <div class="sku-info">
                <p class="name">{{ sku.name }}</p>
                <p class="attr">{{ sku.attrsText || '默认规格' }}</p>
              </div>
              <div class="sku-price">¥{{ sku.price.toFixed(2) }}</div>
              <div class="sku-count">x{{ sku.count }}</div>
            </div>
          </section>

          <footer class="order-foot" @click.stop>
            <span>共 {{ order.totalNum }} 件商品</span>
            <span class="pay">实付：¥{{ Number(order.payMoney || 0).toFixed(2) }}</span>
            <el-button
              v-if="order.orderState === 1"
              type="primary"
              size="small"
              class="order-action-btn"
              @click="goToPay(order)"
            >
              去支付
            </el-button>
            <el-button v-else size="small" disabled class="order-action-btn">已完成</el-button>
          </footer>
        </article>

        <div class="pager" v-if="total > pageSize">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="page"
            :page-size="pageSize"
            :total="total"
            @current-change="handleCurrentChange"
          />
        </div>
      </template>

      <div v-else class="status-wrapper">
        <el-empty description="当前筛选下暂无订单，去首页看看校园好物吧" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-container {
  padding: 10px 20px;
  background-color: #fff;
  min-height: 600px;
  border-radius: $borderRadiusSmall;
}

.main-container {
  min-height: 500px;
  padding: 8px 0 20px;
}

.status-wrapper {
  min-height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order-card {
  border: 1px solid $borderColor;
  border-radius: $borderRadiusSmall;
  margin-bottom: 16px;
  overflow: hidden;
  transition: box-shadow $transitionDuration;
  background: #fff;

  &:hover {
    box-shadow: $cardShadow;
  }

  &.clickable {
    cursor: pointer;
  }
}

.order-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;
  border-bottom: 1px solid #edf2f7;
  padding: 12px 16px;

  .meta {
    display: flex;
    gap: 18px;
    color: $subTextColor;
    font-size: 13px;
  }

  .state {
    color: $campusColor;
    font-weight: 600;
  }
}

.sku-list {
  padding: 10px 16px;
}

.sku-item {
  display: grid;
  grid-template-columns: 64px 1fr 120px 60px;
  gap: 12px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed #eef2f7;

  &:last-child {
    border-bottom: none;
  }

  img,
  .sku-empty-img {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    object-fit: cover;
    background: #f5f7fa;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $insTextColor;
    font-size: 12px;
  }

  .sku-info {
    .name {
      color: $textColor;
      font-size: 14px;
      margin-bottom: 4px;
    }

    .attr {
      color: $insTextColor;
      font-size: 12px;
    }
  }

  .sku-price,
  .sku-count {
    text-align: right;
    color: $subTextColor;
  }
}

.order-foot {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid #f4f6f8;
  background: #fff;
  color: $subTextColor;

  .pay {
    color: $priceColor;
    font-size: 16px;
    font-weight: 600;
  }

  .order-action-btn {
    min-width: 86px;
    border-radius: $borderRadiusSmall;
  }
}

.pager {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
}

:deep(.el-tabs__item) {
  font-size: 16px;
  height: 50px;
  line-height: 50px;

  &.is-active {
    color: $campusColor;
  }
}

:deep(.el-tabs__active-bar) {
  background-color: $campusColor;
}
</style>
