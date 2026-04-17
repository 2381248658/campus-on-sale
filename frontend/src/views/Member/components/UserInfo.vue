<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { getLikeListAPI } from '@/apis/user'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
import { onMounted, ref } from 'vue'
import type { CategoryGoods } from '@/types/api'

const userStore = useUserStore()

const likeList = ref<CategoryGoods[]>([])

const getLikeList = async (): Promise<void> => {
  try {
    const res = await getLikeListAPI({ limit: 4 })
    likeList.value = res || []
  } catch (error) {
    console.error('获取猜你喜欢列表失败:', error)
  }
}

onMounted(() => getLikeList())
</script>

<template>
  <div class="home-overview">
    <div class="user-meta">
      <div class="avatar">
        <img src="@/assets/images/head.jpg" alt="用户头像" />
      </div>
      <h4>{{ userStore.userInfo?.nickname || '尊贵的校园用户' }}</h4>
    </div>
    <div class="item">
      <a href="javascript:;">
        <span class="iconfont icon-huiyuan"></span>
        <p>会员中心</p>
      </a>
      <a href="javascript:;">
        <span class="iconfont icon-shezhi"></span>
        <p>安全设置</p>
      </a>
      <RouterLink to="/member/address">
        <span class="iconfont icon-dizhi"></span>
        <p>地址管理</p>
      </RouterLink>
    </div>
  </div>

  <div class="like-container">
    <div class="home-panel">
      <div class="header">
        <h4>猜你喜欢</h4>
      </div>
      <div class="goods-list">
        <GoodsItem v-for="good in likeList" :key="good.id" :good="good" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-overview {
  height: 132px;
  background: linear-gradient(135deg, $campusColor 0%, #004080 50%, #003366 100%);
  display: flex;
  border-radius: $borderRadiusSmall $borderRadiusSmall 0 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
    border-radius: 50%;
  }

  .user-meta {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;

    .avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 60px;
      border: 2px solid rgba(255, 255, 255, 0.3);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    h4 {
      padding-left: 26px;
      font-size: 18px;
      font-weight: normal;
      color: white;
    }
  }

  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    z-index: 1;

    a {
      color: white;
      font-size: 16px;
      text-align: center;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      .iconfont {
        font-size: 32px;
        display: block;
        margin-bottom: 5px;
      }

      p {
        font-size: 14px;
        line-height: 1;
      }
    }
  }
}

.like-container {
  margin-top: 20px;
  border-radius: $borderRadiusSmall;
  background-color: #fff;
  padding-bottom: 20px;
}

.home-panel {
  background-color: #fff;
  padding: 0 20px;

  .header {
    height: 66px;
    border-bottom: 1px solid #f5f5f5;
    padding: 18px 0;
    display: flex;
    align-items: baseline;

    h4 {
      font-size: 20px;
      font-weight: 400;
      color: #333;
    }
  }

  .goods-list {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    flex-wrap: nowrap;

    :deep(.goods-item) {
      width: 220px;
      margin: 0;

      img {
        width: 160px;
        height: 160px;
      }

      p.name {
        font-size: 15px;
      }
    }
  }
}
</style>
