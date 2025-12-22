<script setup>
import { fetchHotGoodsAPI } from '@/apis/detail';
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';

// 定义组件接收的 props
const props = defineProps({
  hotType: {
    type: Number,
    default: 1
  }
})

const goodList = ref([])
const route = useRoute()

// 1. 校园语义化标题映射
const TYPEMAP = {
  1: '校园 24h 热搜',
  2: '本校周榜好物',
}
const title = computed(() => TYPEMAP[props.hotType])

// 2. 获取热榜数据
const getHotList = async () => {
  try {
    const res = await fetchHotGoodsAPI({
      id: route.params.id,
      type: props.hotType
    })

    if (res && res.result) {
      goodList.value = res.result
    } else if (res && res.data && res.data.result) {
      goodList.value = res.data.result
    } else {
      goodList.value = res || []
    }
  } catch (err) {
    console.error('获取校园热榜商品失败:', err)
  }
}

onMounted(() => getHotList())
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in goodList" :key="item.id">
      <img v-img-lazy="item.picture" alt="校园好物" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    }

    img {
      width: 160px;
      height: 160px;
      object-fit: cover;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
      color: #333;
    }

    .desc {
      color: #999;
      height: 29px;
      font-size: 13px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
