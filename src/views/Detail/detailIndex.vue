<script setup>
import { getDetail } from '@/apis/detail'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import DetailHot from './components/DetailHot.vue'
import ViewIndex from '@/components/imageView/ViewIndex.vue'
import { ElMessage } from 'element-plus'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const goods = ref({})
const route = useRoute()

// 1. 获取校园商品详细信息
const getGoods = async (id = route.params.id) => {
  try {
    const res = await getDetail(id)

    goods.value = res
    // console.log('当前商品详情:', goods.value)
  } catch (err) {
    console.error('获取商品详情失败:', err)
  }
}

onMounted(() => getGoods())

// 处理详情页内跳转不刷新问题（如点击下方的热榜商品）
onBeforeRouteUpdate((to) => {
  getGoods(to.params.id)
})

// 2. 数量与规格处理
const count = ref(1)
let skuObj = {} // 存储当前选中的 SKU 信息

const skuChange = (sku) => {
  skuObj = sku
  // 价格联动逻辑：当选中完整规格时，更新界面显示的价格
  if (sku.skuId) {
    goods.value.price = sku.price
    goods.value.oldPrice = sku.oldPrice
  }
}

// 3. 添加购物车逻辑
const addCart = () => {
  // 规格校验
  if (!skuObj.skuId) {
    return ElMessage.warning('请选择商品规格（如成色/版本）')
  }


  cartStore.addCart({
    id: goods.value.id,
    name: goods.value.name,

    picture: goods.value.mainPictures ? goods.value.mainPictures[0] : '',

    price: skuObj.price || goods.value.price,
    nowPrice: skuObj.price || goods.value.price,
    count: count.value,
    skuId: skuObj.skuId,
    attrsText: skuObj.specsText,
    selected: true
  })

  ElMessage.success('已加入校园购物车')
}
</script>

<template>
  <div class="campus-goods-page">
    <div class="container" v-if="goods.id">
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">校园首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="cat in goods.categories" :key="cat.id" :to="{ path: `/category/${cat.id}` }">
            {{ cat.name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ goods.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="info-container">
        <div class="goods-info">
          <div class="media">
            <ViewIndex :image-list="goods.mainPictures" />

            <ul class="goods-sales">
              <li>
                <p>近期热度</p>
                <p>{{ goods.salesCount || '100+' }}</p>
                <p><i class="iconfont icon-task-filling"></i>本校人气</p>
              </li>
              <li>
                <p>反馈评价</p>
                <p>{{ goods.commentCount || '0' }}</p>
                <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
              </li>
              <li>
                <p>收藏人气</p>
                <p>{{ goods.collectCount || '20+' }}</p>
                <p><i class="iconfont icon-favorite-filling"></i>收藏好物</p>
              </li>
              <li>
                <p>供应来源</p>
                <p>{{ goods.brand?.name || '学生直供' }}</p>
                <p><i class="iconfont icon-dynamic-filling"></i>来源信息</p>
              </li>
            </ul>
          </div>

          <div class="spec">
            <p class="g-name"> {{ goods.name }} </p>
            <p class="g-desc">{{ goods.desc }} </p>
            <p class="g-price">
              <span>{{ goods.price }}</span>
              <span v-if="goods.oldPrice">{{ goods.oldPrice }}</span>
            </p>

            <div class="g-service">
              <dl>
                <dt>配送</dt>
                <dd>校园惠专享：下单立享本校【送货上寝】或【指定地点自提】</dd>
              </dl>
              <dl>
                <dt>保障</dt>
                <dd>
                  <span>极速响应</span>
                  <span>实物拍摄</span>
                  <span>担保交易</span>
                  <a href="javascript:;">规则详情</a>
                </dd>
              </dl>
            </div>

            <SkuIndex :goods="goods" @change="skuChange" />

            <div class="number-box">
              <span class="label">选择数量</span>
              <el-input-number v-model="count" :min="1" :max="goods.inventory || 99" />
            </div>

            <el-button size="large" class="btn" @click="addCart">
              加入购物车
            </el-button>
          </div>
        </div>

        <div class="goods-footer">
          <div class="goods-article">
            <div class="goods-tabs">
              <nav><a>物品详情介绍</a></nav>
              <div class="goods-detail">
                <ul class="attrs" v-if="goods.details?.properties">
                  <li v-for="item in goods.details.properties" :key="item.value">
                    <span class="dt">{{ item.name }}</span>
                    <span class="dd">{{ item.value }}</span>
                  </li>
                </ul>
                <img v-for="img in goods.details?.pictures" :src="img" :key="img" alt="详情图">
              </div>
            </div>
          </div>

          <div class="goods-aside">
            <DetailHot :hot-type="1" title="24小时热搜" />
            <DetailHot :hot-type="2" title="周榜好物" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
@use "sass:color";

.campus-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
    }
  }

  .goods-tabs {
    background: #fff;

    nav {
      height: 70px;
      line-height: 70px;
      display: flex;
      border-bottom: 1px solid #f5f5f5;

      a {
        padding: 0 40px;
        font-size: 18px;
        position: relative;

        &::after {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: $campusColor;
        }
      }
    }
  }

  .number-box {
    display: flex;
    align-items: center;
    margin: 20px 0;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-price {
    margin-top: 10px;

    span {
      &::before {
        content: "¥";
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        span {
          margin-right: 10px;

          &::before {
            content: "•";
            color: $campusColor;
            margin-right: 2px;
          }
        }

        a {
          color: $campusColor;
        }
      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      ~li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: "";
      }

      p {
        &:first-child {
          color: #999;
        }

        &:nth-child(2) {
          color: $priceColor;
          margin-top: 10px;
        }

        &:last-child {
          color: #666;
          margin-top: 10px;

          i {
            color: $campusColor;
            font-size: 14px;
          }

          &:hover {
            color: $campusColor;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  >img {
    width: 100%;
  }
}

.btn {
  margin-top: 20px;
  background-color: $campusColor;
  color: #fff;
  border: none;

  &:hover {
    background-color: color.adjust($campusColor, $lightness: -5%);
  }
}

.bread-container {
  padding: 25px 0;
}
</style>
