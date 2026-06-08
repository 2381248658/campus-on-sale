<script setup lang="ts">
import { useCategoryStore } from '@/stores/categoryStore'
import HeaderCart from './HeaderCart.vue'
// 🌟 引入 useRoute，用来获取当前页面的真实路径
import { useRoute } from 'vue-router'

const categoryStore = useCategoryStore()
const route = useRoute()
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/"></RouterLink>
      </h1>

      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/" :class="{ active: route.path === '/' }">首页</RouterLink>
        </li>
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>

      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜学长推荐 / 二手教材" />
      </div>

      <HeaderCart />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/var.scss' as v;
@use '@/styles/mixins.scss' as *;

.app-header {
  background: v.$white;
  border-bottom: v.$borderWidthThin solid v.$lineColor;
  box-shadow: v.$shadowSm;

  .container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: v.$containerWidth;
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
      transform: scale(1);
      transition: transform v.$transitionDurationFast v.$transitionEasing;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .app-header-nav {
    flex: 1;
    display: flex;
    padding-left: v.$spacing3xl;
    position: relative;
    z-index: v.$zIndexNav;

    li {
      margin-right: v.$spacingSm;
      min-width: 80px;
      text-align: center;

      a {
        font-size: v.$fontSizeMd;
        line-height: 32px;
        height: 32px;
        display: inline-block;
        color: v.$textColor;
        transition: all v.$transitionDurationFast v.$transitionEasing;
        border-bottom: 2px solid transparent;
        @include focus-ring();

        &:hover {
          color: v.$campusColor;
          border-bottom: 2px solid v.$campusColor;
        }
      }

      .active {
        color: v.$campusColor;
        border-bottom: 2px solid v.$campusColor;
        font-weight: v.$fontWeightBold;
      }
    }
  }

  .search {
    width: 220px;
    height: 34px;
    position: relative;
    border: v.$borderWidthThin solid v.$borderColorLight;
    border-radius: 17px;
    line-height: 32px;
    padding: 0 v.$spacingLg;
    margin-right: v.$spacing2xl;
    background: v.$bgColor;
    transition: all v.$transitionDuration v.$transitionEasing;
    display: flex;
    align-items: center;
    @include input-focus-state();

    &:hover,
    &:focus-within {
      border-color: v.$campusColor;
      background: v.$white;
      box-shadow: 0 0 0 3px v.$campusColorAlpha10;
    }

    .icon-sousuo {
      font-size: v.$fontSizeMd;
      color: v.$insTextColor;
      transition: color v.$transitionDurationFast v.$transitionEasing;
    }

    input {
      flex: 1;
      padding-left: v.$spacingSm;
      color: v.$subTextColor;
      background: transparent;
      outline: none;
      border: none;
      font-size: v.$fontSizeSm;

      &::placeholder {
        color: v.$insTextColor;
      }

      &:focus + .icon-sousuo,
      &:hover + .icon-sousuo {
        color: v.$campusColor;
      }
    }
  }
}
</style>
