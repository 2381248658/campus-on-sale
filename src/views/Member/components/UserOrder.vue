<script setup>
import { ref } from 'vue';

const tabTypes = [
  { name: "all", label: "全部订单", state: 0 },
  { name: "unpay", label: "待付款", state: 1 },
  { name: "deliver", label: "待发货", state: 2 },
  { name: "receive", label: "待收货", state: 3 },
  { name: "comment", label: "待评价", state: 4 },
  { name: "complete", label: "已完成", state: 5 },
  { name: "cancel", label: "已取消", state: 6 }
]

// 2. 状态管理（清空逻辑，仅保留占位状态）
const activeName = ref(0)

/* 接口已暂时禁用（开发中）
  import { getUserOrderAPI } from '@/apis/order';
  onMounted(() => getOrderList())
*/

// 3. 模拟切换逻辑（不触发请求）
const tabChange = (name) => {
  activeName.value = name
  // console.log('当前切换至状态：', name, '（数据接口开发中）')
}
</script>

<template>
  <div class="order-container">
    <el-tabs v-model="activeName" @tab-change="tabChange">
      <el-tab-pane v-for="item in tabTypes" :key="item.name" :label="item.label" :name="item.state" />

      <div class="main-container">
        <div class="dev-holder">
          <el-empty :image-size="200" description="订单管理系统正在开发中，敬请期待...">
            <template #extra>
              <div class="status-tag">STATUS: UNDER DEVELOPMENT</div>
            </template>
          </el-empty>
        </div>
      </div>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.order-container {
  padding: 10px 20px;
  background-color: #fff;
  min-height: 600px;
  border-radius: 4px;

  .main-container {
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .dev-holder {
      text-align: center;

      :deep(.el-empty__description) {
        margin-top: 20px;

        p {
          font-size: 16px;
          color: #999;
        }
      }

      .status-tag {
        font-family: 'Courier New', Courier, monospace;
        font-size: 12px;
        color: $campusColor;
        border: 1px solid $campusColor;
        padding: 4px 12px;
        border-radius: 20px;
        opacity: 0.6;
        display: inline-block;
      }
    }
  }
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
