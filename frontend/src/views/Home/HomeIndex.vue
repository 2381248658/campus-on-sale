<!--
  @file 首页
  @description Campus on Sale 商城首页，包含分类导航、轮播图、新鲜好物、人气推荐、商品板块
-->
<script setup lang="ts">
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>

<template>
  <!-- ========== 首页主容器 ========== -->
  <main class="home-container">
    <!-- ========== 顶部入口区域 ========== -->
    <div class="container">
      <div class="home-entry">
        <HomeCategory />
        <HomeBanner />
      </div>
    </div>
    <!-- ========== 楼层区域 ========== -->
    <div class="home-floor">
      <HomeNew />
      <HomeHot />
      <HomeProduct />
    </div>
  </main>
</template>

<style scoped lang="scss">
/* ========== 首页容器 ========== */
.home-container {
  animation: fadeIn 0.5s ease-in;
}

/* ========== 顶部入口区域 ========== */
.home-entry {
  display: flex;
  position: relative;
  background-color: #fff;
  margin-bottom: 20px;
}

/* ========== 楼层区域 ========== */
.home-floor {
  background-color: #f5f5f5;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ========== 淡入动画 ========== */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
