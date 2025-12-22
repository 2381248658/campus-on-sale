<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue';

const filterData = ref({})
const route = useRoute()

// 1. 获取校园分类数据
const getCategoryData = async () => {
  try {
    const res = await getCategoryFilterAPI(route.params.id)
    filterData.value = res
  } catch (err) {
    console.error('获取校园二级分类数据失败', err)
  }
}

onMounted(() => getCategoryData())

// 2. 获取校内商品列表
const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})

const getGoodList = async () => {
  try {
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = res.items || []
  } catch (err) {
    console.error("校内商品数据请求失败", err)
  }
}

onMounted(() => getGoodList())

// 3. 排序切换（最新/热度/评价）
const tabChange = () => {
  reqData.value.page = 1
  disabled.value = false
  getGoodList()
}

// 4. 无限加载逻辑
const disabled = ref(false)
const loading = ref(false)

const load = async () => {
  if (loading.value) return
  loading.value = true

  try {
    reqData.value.page++
    const res = await getSubCategoryAPI(reqData.value)

    if (res.items && res.items.length > 0) {
      goodList.value = [...goodList.value, ...res.items]
    } else {
      disabled.value = true
    }
  } catch (err) {
    console.error("加载更多好物失败", err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ name: 'home' }">校园首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'category', params: { id: filterData.parentId } }">
          {{ filterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新发布" name="publishTime"></el-tab-pane>
        <el-tab-pane label="校园热度" name="orderNum"></el-tab-pane>
        <el-tab-pane label="学生好评" name="evaluateNum"></el-tab-pane>
      </el-tabs>

      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <GoodsItem v-for="good in goodList" :good="good" :key="good.id" />
      </div>

      <div v-if="disabled" class="no-more">—— 已经到底啦，去看看其他校内好物吧 ——</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 40px;
  background-color: #fff;
  border-radius: 8px;

  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 33px;
    padding: 20px 0;
  }

  .no-more {
    text-align: center;
    color: #bbb;
    padding: 40px 0;
    font-size: 14px;
    letter-spacing: 1px;
  }
}

:deep(.el-tabs__item) {
  font-size: 16px;

  &:hover {
    color: $campusColor;
  }
}

:deep(.el-tabs__item.is-active) {
  color: $campusColor;
  font-weight: bold;
}

:deep(.el-tabs__active-bar) {
  background-color: $campusColor;
}
</style>
