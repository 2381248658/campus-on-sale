<!--
  @file 二级分类页面
  @description 展示二级分类下的商品列表，支持排序和无限加载
-->
<script setup lang="ts">
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import GoodsItem from '../Home/components/GoodsItem.vue'
import type { SubCategoryFilter, CategoryGoods } from '@/types/api'
import type { RouteLocationNormalized } from 'vue-router'

/** 筛选数据 */
const filterData = ref<SubCategoryFilter>({} as SubCategoryFilter)
const route = useRoute()

/**
 * 获取分类筛选数据
 */
const getCategoryData = async (id: string = route.params.id as string): Promise<void> => {
  try {
    const res = await getCategoryFilterAPI(id)
    filterData.value = res
  } catch (err) {
    console.error('获取校园二级分类数据失败', err)
  }
}

onMounted(() => getCategoryData())

/** 商品列表 */
const goodList = ref<CategoryGoods[]>([])

/** 请求参数 */
interface ReqData {
  categoryId: string
  page: number
  pageSize: number
  sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
}

const reqData = ref<ReqData>({
  categoryId: route.params.id as string,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime',
})

/**
 * 获取商品列表
 */
const getGoodList = async (): Promise<void> => {
  try {
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = res.items || []
  } catch (err) {
    console.error('校内商品数据请求失败', err)
  }
}

onMounted(() => getGoodList())

onBeforeRouteUpdate((to: RouteLocationNormalized) => {
  const newId = to.params.id as string
  reqData.value.categoryId = newId
  reqData.value.page = 1
  disabled.value = false
  getCategoryData(newId)
  getGoodList()
})

/**
 * 排序切换
 */
const tabChange = (): void => {
  reqData.value.page = 1
  disabled.value = false
  getGoodList()
}

/** 无限加载禁用状态 */
const disabled = ref<boolean>(false)
/** 加载中状态 */
const loading = ref<boolean>(false)

/**
 * 无限加载
 */
const load = async (): Promise<void> => {
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
    console.error('加载更多好物失败', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <!-- ========== 面包屑导航 ========== -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ name: 'home' }">校园首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'category', params: { id: filterData.parentId } }">
          {{ filterData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- ========== 商品列表区域 ========== -->
    <div class="sub-container">
      <!-- ========== 排序标签 ========== -->
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新发布" name="publishTime"></el-tab-pane>
        <el-tab-pane label="校园热度" name="orderNum"></el-tab-pane>
        <el-tab-pane label="学生好评" name="evaluateNum"></el-tab-pane>
      </el-tabs>

      <!-- ========== 商品列表 ========== -->
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <GoodsItem v-for="good in goodList" :good="good" :key="good.id" />
      </div>

      <!-- ========== 加载完毕提示 ========== -->
      <div v-if="disabled" class="no-more">—— 已经到底啦，去看看其他校内好物吧 ——</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* ========== 面包屑 ========== */
.bread-container {
  padding: 25px 0;
  color: #666;
}

/* ========== 商品容器 ========== */
.sub-container {
  padding: 20px 40px;
  background-color: #fff;
  border-radius: 8px;

  /* ========== 商品列表 ========== */
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 33px;
    padding: 20px 0;
  }

  /* ========== 加载完毕 ========== */
  .no-more {
    text-align: center;
    color: #bbb;
    padding: 40px 0;
    font-size: 14px;
    letter-spacing: 1px;
  }
}

/* ========== 标签页样式 ========== */
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
