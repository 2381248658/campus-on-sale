<script setup>
/**
 * CategoryIndex.vue - 校园惠一级分类详情页
 * 核心逻辑：
 * 1. 采用逻辑抽离模式 (Composables) 获取 banner 与分类数据
 * 2. 自动监听路由 ID 变化并驱动视图刷新
 */
import GoodsItem from '../Home/components/GoodsItem.vue'
import { useBanner } from './composables/useBanner'
import { useCategory } from './composables/useCategory'

// 轮播图业务逻辑
const { bannerList } = useBanner()
// 分类详情业务逻辑 (含二级分类列表与推荐商品)
const { categoryData } = useCategory()
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-if="categoryData.name">{{ categoryData.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="活动 Banner">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="sub-list" v-if="categoryData.children">
        <h3>- 本校精选分类 -</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <img v-img-lazy="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
          <p class="tag">优质好物 校园专供</p>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #333;
    font-weight: 600;
    text-align: center;
    line-height: 100px;
  }

  .bread-container {
    padding: 25px 0;

    :deep(.el-breadcrumb__item) {
      font-size: 14px;
    }
  }

  .home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;
    border-radius: $borderRadius;
    overflow: hidden;

    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    border-radius: $borderRadius;

    ul {
      display: flex;
      padding: 20px 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;
          transition: all .3s;

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
          }

          p {
            line-height: 40px;
            color: $textColor;
          }

          &:hover {
            color: $campusColor;
            transform: translateY(-3px);
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    border-radius: $borderRadius;
    overflow: hidden;

    .head {
      padding: 30px 0;

      h3 {
        line-height: 1;
        margin-bottom: 15px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 16px;
      }
    }

    .body {
      display: flex;
      flex-wrap: wrap;
      padding: 0 20px 30px;
      gap: 15px;
    }
  }
}
</style>
