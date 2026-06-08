<script setup lang="ts">
import type { CategoryGoods } from '@/types/api'

// ============================================
// Props 类型定义
// ============================================

interface Props {
  /** 商品数据 */
  good: CategoryGoods
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="`/detail/${good.id}`" class="goods-item">
    <div class="image-box">
      <img v-img-lazy="good.picture" :alt="good.name" />
    </div>
    <div class="info-box">
      <p class="name ellipsis">{{ good.name }}</p>
      <p class="desc ellipsis">{{ good.desc }}</p>
      <p class="price"><span class="unit">&yen;</span>{{ good.price }}</p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
@use '@/styles/mixins.scss' as *;
@use '@/styles/var.scss' as v;

.goods-item {
  display: block;
  width: 220px;
  padding: v.$spacing2xl;
  text-align: center;
  background: v.$white;
  border-radius: v.$borderRadius;
  @include goods-hover-effect();
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: v.$gradientPrimary;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform v.$transitionDuration v.$transitionEasing;
  }

  &:hover {
    .name {
      color: v.$campusColor;
    }

    &::before {
      transform: scaleX(1);
    }

    .image-box img {
      transform: scale(1.08);
    }
  }

  .image-box {
    width: 160px;
    height: 160px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: v.$borderRadiusSmall;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform v.$transitionDurationSlow v.$transitionEasing;
    }
  }

  .info-box {
    padding-top: v.$spacingLg;

    p {
      line-height: v.$lineHeightNormal;
    }

    .name {
      font-size: v.$fontSizeMd;
      color: v.$textColor;
      font-weight: v.$fontWeightMedium;
      transition: color v.$transitionDuration v.$transitionEasing;
      @include text-ellipsis();
    }

    .desc {
      color: v.$insTextColor;
      font-size: v.$fontSizeSm;
      height: 24px;
      margin-top: v.$spacingXs;
      @include text-ellipsis();
    }

    .price {
      color: v.$priceColor;
      font-size: v.$fontSizeXl;
      font-weight: v.$fontWeightBold;
      margin-top: v.$spacingSm;
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 2px;

      .unit {
        font-size: v.$fontSizeXs;
        font-weight: v.$fontWeightNormal;
      }
    }
  }
}
</style>
