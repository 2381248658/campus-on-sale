<script setup>
import { useCategoryStore } from '@/stores/categoryStore';
import HeaderCart from './HeaderCart.vue';

const categoryStore = useCategoryStore()


</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>

      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>

      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜学长推荐 / 二手教材">
      </div>

      <HeaderCart />
    </div>
  </header>
</template>

<style scoped lang='scss'>
.app-header {
  background: #fff;
  border-bottom: 1px solid #f2f2f2;

  .container {
    display: flex;
    align-items: center;
    // 确保容器在各种屏幕下都能正确居中
    margin: 0 auto;
    width: 1240px;
  }

  .logo {
    width: 180px;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100px;
      text-decoration: none;
      background: url('@/assets/images/logo.png') no-repeat center 10px / contain;
      transform: scale(1.2);
    }
  }

  .app-header-nav {
    flex: 1;
    display: flex;
    padding-left: 30px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 10px;
      min-width: 80px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;
        color: #333;
        transition: all 0.2s;
        border-bottom: 2px solid transparent;

        &:hover {
          color: $campusColor;
          border-bottom: 2px solid $campusColor;
        }
      }

      .active {
        color: $campusColor;
        border-bottom: 2px solid $campusColor;
        font-weight: bold;
      }
    }
  }

  .search {
    width: 220px;
    height: 34px;
    position: relative;
    border: 1px solid #e7e7e7;
    border-radius: 17px;
    line-height: 32px;
    padding: 0 15px;
    margin-right: 20px;
    background: #f8f8f8;
    transition: all 0.3s;
    display: flex;
    align-items: center;

    &:hover,
    &:focus-within {
      border-color: $campusColor;
      background: #fff;
      box-shadow: 0 0 5px rgba($campusColor, 0.1);
    }

    .icon-sousuo {
      font-size: 16px;
      color: #999;
    }

    input {
      flex: 1;
      padding-left: 8px;
      color: #666;
      background: transparent;
      outline: none;
      border: none;
      font-size: 13px;

      &::placeholder {
        color: #ccc;
      }
    }
  }
}
</style>
