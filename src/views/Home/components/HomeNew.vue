<script setup>
import { onMounted, ref } from 'vue';
import HomePanel from './HomePanel.vue';
import { findNewAPI } from '@/apis/homeAPI';

const newList = ref([])

const getFindNew = async () => {
  // 逻辑防抖：如果已经有数据了，不要重复请求，防止闪烁
  if (newList.value.length > 0) return

  try {
    const res = await findNewAPI()
    newList.value = res || []
  } catch (err) {
    console.error('获取新鲜好物失败', err)
  }
}

onMounted(() => getFindNew())
</script>

<template>
  <HomePanel title="学长推荐" sub-title="学长亲测 避坑指南">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img v-img-lazy="item.picture" alt="校园惠商品" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  //锁定高度。
  height: 406px;
  min-height: 406px;
  background-color: transparent;

  li {
    width: 306px;
    height: 406px;
    background: #f4f8fb;
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
      background: #eef2f5;
    }

    p {
      font-size: 20px;
      padding: 12px 10px 0 10px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: $textColor;
    }

    .price {
      color: $priceColor;
      font-weight: bold;
      margin-top: 5px;
    }
  }
}
</style>
