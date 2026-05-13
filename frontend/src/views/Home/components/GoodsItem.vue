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

.goods-item {
  display: block;
  width: 220px;
  padding: 20px;
  text-align: center;
  background: #fff;
  border-radius: $borderRadius;
  @include goods-hover-effect();

  &:hover .name {
    color: $campusColor;
  }

  .image-box {
    width: 160px;
    height: 160px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-box {
    padding-top: 15px;

    p {
      line-height: 1.5;
    }

    .name {
      font-size: 15px;
      color: $textColor;
      transition: color 0.3s;
    }

    .desc {
      color: $insTextColor;
      font-size: 13px;
      height: 24px;
      margin-top: 4px;
    }

    .price {
      color: $priceColor;
      font-size: 18px;
      font-weight: 600;
      margin-top: 8px;

      .unit {
        font-size: 12px;
        margin-right: 2px;
      }
    }
  }
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
