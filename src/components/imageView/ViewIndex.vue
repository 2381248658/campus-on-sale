<script setup>
import { ref, watch } from 'vue';
import { useMouseInElement } from '@vueuse/core';

// props适配主图列表
defineProps({
  imageList: {
    type: Array,
    default: () => []
  }
})

// 图片列表
// const imageList = [
//   "https://picsum.photos/1240/500?random=1",
//   "https://picsum.photos/1240/500?random=2",
//   "https://picsum.photos/1240/500?random=3",
//   "https://picsum.photos/1240/500?random=4",
//   "https://picsum.photos/1240/500?random=5",
// ]

// 1.实现大小图切换
// 2.实现放大镜功能
// 3.渲染数据
// 1.
const activeIndex = ref(0)
const SwitchImageSize = (i) => {
  activeIndex.value = i
}
// 2.
// 安装库 vueuse 使用里面的函数useMouseInElement
//大图容器
const target = ref(null)
// 获取鼠标相对位置
const { elementX, elementY, isOutside } = useMouseInElement(target)
// 浮块位置
const left = ref(0)
const top = ref(0)
// 放大镜大图背景位置
const positionX = ref(0)
const positionY = ref(0)

// 容器和浮块尺寸（可调整）
const containerWidth = 400
const containerHeight = 400
const layerWidth = 200
const layerHeight = 200
const zoom = 2 // 放大倍数

// 监听鼠标变化,计算浮块位置和大图偏移
watch([elementX, elementY, isOutside], () => {
  // 鼠标离开图片位置,浮块隐藏
  if (isOutside.value) {
    left.value = 0 // 离开时重置浮块位置
    top.value = 0
    return
  }
  // 计算浮块左上角位置, 鼠标坐标-浮块一半位置
  left.value = Math.min(Math.max(elementX.value - layerWidth / 2, 0), containerWidth - layerWidth)
  top.value = Math.min(Math.max(elementY.value - layerHeight / 2, 0), containerHeight - layerHeight)

  // 大图背景偏移 = -浮块位置 * 放大倍数
  positionX.value = -left.value * zoom
  positionY.value = -top.value * zoom
})

</script>


<template>
  <div class="goods-image">
    <!-- 左侧大图-->
    <div class="middle" ref="target">
      <img :src="imageList[activeIndex]" alt="" />
      <!-- 蒙层小滑块 -->
      <div class="layer" v-show="!isOutside" :style="{ left: left + `px`, top: top + `px` }"></div>
    </div>
    <!-- 小图列表 -->
    <ul class="small">
      <li v-for="(img, i) in imageList" :key="i" @mouseenter="SwitchImageSize(i)"
        :class="{ active: i === activeIndex }">
        <img :src="img" alt="" />
      </li>
    </ul>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${imageList[activeIndex]})`,
        backgroundPositionX: positionX + `px`,
        backgroundPositionY: positionY + `px`,
        backgroundSize: containerWidth * zoom + 'px ' + containerHeight * zoom + 'px'
      },
    ]" v-show="!isOutside"></div>
  </div>
</template>

<style scoped lang="scss">
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

  /* 放大镜大图 */
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

  /* 浮块 */
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

      &.active,
      &:hover {
        border-color: #f56c6c;
        /* 可自定义高亮颜色 */
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
