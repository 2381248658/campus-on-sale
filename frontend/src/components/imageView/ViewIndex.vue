<!--
 * 图片预览组件
 * 职责：
 * 1. 展示商品图片列表，支持小图切换大图
 * 2. 实现放大镜功能，鼠标悬停显示局部放大效果
 * 3. 用于商品详情页的商品图片展示
 -->
<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import { useMouseInElement } from '@vueuse/core'

defineProps<{
  imageList: string[]
}>()

/** 当前选中的图片索引 */
const activeIndex = ref<number>(0)

/**
 * 切换当前显示的图片
 * @param i - 图片索引
 */
const SwitchImageSize = (i: number): void => {
  activeIndex.value = i
}

/** 大图容器 DOM 引用 */
const target = ref<HTMLElement | null>(null)

/** 鼠标在大图容器内的相对 X 坐标（像素） */
/** 鼠标在大图容器内的相对 Y 坐标（像素） */
/** 鼠标是否在大图容器外 */
const { elementX, elementY, isOutside } = useMouseInElement(target)

/** 浮块左边距（像素） */
const left = ref<number>(0)
/** 浮块上边距（像素） */
const top = ref<number>(0)
/** 放大镜大图背景 X 偏移（像素） */
const positionX = ref<number>(0)
/** 放大镜大图背景 Y 偏移（像素） */
const positionY = ref<number>(0)

/** 大图容器宽度（像素） */
const containerWidth: number = 400
/** 大图容器高度（像素） */
const containerHeight: number = 400
/** 浮块宽度（像素） */
const layerWidth: number = 200
/** 浮块高度（像素） */
const layerHeight: number = 200
/** 放大倍数（倍） */
const zoom: number = 2

/** 待执行的 requestAnimationFrame ID */
let pendingRaf: number | null = null

const updatePosition = (): void => {
  if (isOutside.value) {
    left.value = 0
    top.value = 0
    return
  }
  left.value = Math.min(Math.max(elementX.value - layerWidth / 2, 0), containerWidth - layerWidth)
  top.value = Math.min(Math.max(elementY.value - layerHeight / 2, 0), containerHeight - layerHeight)

  positionX.value = -left.value * zoom
  positionY.value = -top.value * zoom
}

watch([elementX, elementY, isOutside], () => {
  if (pendingRaf !== null) cancelAnimationFrame(pendingRaf)
  pendingRaf = requestAnimationFrame(updatePosition)
})

onBeforeUnmount(() => {
  if (pendingRaf !== null) cancelAnimationFrame(pendingRaf)
})
</script>

<template>
  <div class="goods-image">
    <!-- 左侧大图区域 -->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 放大镜浮块 -->
      <div class="layer" v-show="!isOutside" :style="{ left: left + `px`, top: top + `px` }"></div>
    </div>

    <!-- 右侧小图列表 -->
    <ul class="small">
      <li
        v-for="(img, i) in imageList"
        :key="i"
        @mouseenter="SwitchImageSize(i)"
        :class="{ active: i === activeIndex }"
      >
        <img :src="img" alt="" />
      </li>
    </ul>

    <!-- 放大镜大图预览区域 -->
    <div
      class="large"
      :style="[
        {
          backgroundImage: `url(${imageList[activeIndex]})`,
          backgroundPositionX: positionX + `px`,
          backgroundPositionY: positionY + `px`,
          backgroundSize: containerWidth * zoom + 'px ' + containerHeight * zoom + 'px',
        },
      ]"
      v-show="!isOutside"
    ></div>
  </div>
</template>

<style scoped lang="scss">
/* 图片预览容器 */
.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  /* 大图区域 */
  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  /* 放大镜大图预览 */
  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-color: #f8f8f8;
  }

  /* 放大镜浮块 */
  .layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
  }

  /* 小图列表 */
  .small {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    li {
      width: 68px;
      height: 68px;
      margin-bottom: 10px;
      cursor: pointer;
      border: 2px solid transparent;

      /* 选中/悬停状态 */
      &.active,
      &:hover {
        border-color: #f56c6c;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
