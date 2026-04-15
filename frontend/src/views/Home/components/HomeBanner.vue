<script setup lang="ts">
import { getBannerAPI } from '@/apis/homeAPI'
import { onMounted, ref } from 'vue'
import type { Banner } from '@/types/api'

const bannerList = ref<Banner[]>([])

const getBanner = async (): Promise<void> => {
  try {
    const res = await getBannerAPI()
    bannerList.value = res || []
  } catch (err) {
    console.error('获取轮播图失败', err)
  }
}

// ============================================
// Lifecycle
// ============================================

onMounted(() => getBanner())
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" :alt="item.id ? '校园活动轮播图' : ''" />
      </el-carousel-item>
    </el-carousel>
    <div v-if="!bannerList.length" class="banner-placeholder">加载中...</div>
  </div>
</template>

<style lang="scss" scoped>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  background-color: #f1f3f7;
  overflow: hidden;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .banner-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 18px;
  }
}
</style>
