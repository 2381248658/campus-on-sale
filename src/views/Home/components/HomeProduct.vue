<script setup>
import HomePanel from './HomePanel.vue'
import { getGoodsAPI } from '@/apis/homeAPI';
import { onMounted, ref } from 'vue';
import GoodsItem from './GoodsItem.vue';

const goodsList = ref([])

const getGoods = async () => {
  try {
    const res = await getGoodsAPI()
    goodsList.value = res || []

  } catch (err) {
    console.error('获取校园业务板块失败', err)
  }
}

onMounted(() => {
  getGoods()
})
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsList" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" :to="`/category/${cate.id}`">
          <img v-img-lazy="cate.picture" />
          <strong class="label">
            <span>{{ cate.name }}</span>
            <span>校内专供</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="good in cate.goods" :key="good.id">
            <GoodsItem :good="good"></GoodsItem>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang='scss'>
.home-product {
  background: #f7f9fc;
  margin-top: 0;

  .box {
    display: flex;

    .cover {
      width: 240px;
      height: 610px;
      margin-right: 10px;
      position: relative;
      border-radius: $borderRadius;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s;

        &:hover {
          transform: scale(1.05);
        }
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #fff;
        line-height: 66px;
        font-weight: 600;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 90px;
            background: rgba($campusColor, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            letter-spacing: 1px;
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;
        background: #fff;
        border-radius: $borderRadius;
        transition: all 0.3s;

        &:hover {
          transform: translateY(-5px);
          box-shadow: $cardShadowHover;
        }

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
