<script setup>
import { onMounted, ref } from 'vue';
import HomePanel from './HomePanel.vue';
import { findHotAPI } from '@/apis/homeAPI';

const hotList = ref([])
const getFindHot = async () => {
  // 逻辑防抖
  if (hotList.value.length > 0) return

  try {
    const res = await findHotAPI()
    // 拦截器已处理解构
    hotList.value = res || []
  } catch (err) {
    console.error('获取校园热门失败', err)
  }
}

onMounted(() => getFindHot())
</script>

<template>
  <HomePanel title="校园热门" sub-title="全校疯抢 别处难找">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img v-img-lazy="item.picture" :alt="item.alt" />
          <p class="name">{{ item.title || item.name }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;

  height: 426px;
  min-height: 426px;

  li {
    width: 306px;
    height: 406px;
    background: #fff;
    border: 1px solid #f2f5f8;
    transition: all .5s;
    border-radius: $borderRadius;
    overflow: hidden;

    &:hover {
      transform: translate3d(0, -6px, 0);
      box-shadow: $cardShadowHover;
    }

    img {
      width: 306px;
      height: 306px;
      object-fit: cover;
      background: #f8f8f8;
    }

    p {
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .name {
      font-size: 20px;
      color: $textColor;
      font-weight: 500;
    }

    .desc {
      color: $insTextColor;
      font-size: 15px;
      padding: 5px 10px;
    }
  }
}
</style>
