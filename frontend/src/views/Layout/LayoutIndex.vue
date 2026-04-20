<!--
  @file 布局框架
  @description 主布局框架，包含顶部固定导航、头部、底部和路由出口
-->
<script setup lang="ts">
import { onMounted } from 'vue'
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/categoryStore'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <div>
    <!-- ========== 顶部固定导航 ========== -->
    <LayoutFixed />
    <!-- ========== 分类导航 ========== -->
    <LayoutNav />
    <!-- ========== 头部区域 ========== -->
    <LayoutHeader />
    <!-- ========== 路由出口 ========== -->
    <router-view />
    <!-- ========== 底部区域 ========== -->
    <LayoutFooter />
  </div>
</template>
