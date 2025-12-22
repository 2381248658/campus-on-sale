<script setup>
defineProps({
  good: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="`/detail/${good.id}`" class="goods-item">
    <div class="image-box">
      <img v-img-lazy="good.picture" :alt="good.name" />
    </div>
    <div class="info-box">
      <p class="name ellipsis">{{ good.name }}</p>
      <p class="desc ellipsis">{{ good.desc }}</p>
      <p class="price">
        <span class="unit">&yen;</span>{{ good.price }}
      </p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 220px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  background: #fff;
  border-radius: $borderRadius;

  &:hover {
    transform: translateY(-5px);
    box-shadow: $cardShadowHover;

    .name {
      color: $campusColor;
    }
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
      font-weight: 600; // 加粗价格
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
