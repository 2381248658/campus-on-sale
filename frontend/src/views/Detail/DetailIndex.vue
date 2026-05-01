<!--
  @file 商品详情页
  @description 展示商品详情信息，支持规格选择、加入购物车
-->
<script setup lang="ts">
import { getGoodsDetailAPI } from '@/apis/detail'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import DetailHot from './components/DetailHot.vue'
import ViewIndex from '@/components/imageView/ViewIndex.vue'
import { ElMessage } from 'element-plus'
import { useCartStore } from '@/stores/cartStore'
import type { GoodsDetail } from '@/types/api'

const cartStore = useCartStore()
/** 商品详情数据 */
const goods = ref<GoodsDetail>({} as GoodsDetail)
const route = useRoute()
const detailLoading = ref(true)
const detailError = ref(false)

/**
 * 获取商品详情
 * @param id - 商品ID
 */
const getGoods = async (id: string | string[] = route.params.id) => {
  detailLoading.value = true
  detailError.value = false
  try {
    const res = await getGoodsDetailAPI(id as string)
    goods.value = res
  } catch (err) {
    console.error('获取商品详情失败:', err)
    detailError.value = true
  } finally {
    detailLoading.value = false
  }
}

onMounted(() => getGoods())

onBeforeRouteUpdate((to) => {
  getGoods(to.params.id)
})

/** 购买数量 */
const count = ref<number>(1)

/** SKU选择结果 */
interface SkuObj {
  skuId?: string
  price?: number
  oldPrice?: number
  specsText?: string
}

const skuObj = ref<SkuObj>({})

/**
 * SKU变更回调
 * @param sku - 选中的SKU信息
 */
const skuChange = (sku: SkuObj) => {
  skuObj.value = sku
  if (sku.skuId) {
    goods.value.price = sku.price || goods.value.price
    goods.value.oldPrice = sku.oldPrice || goods.value.oldPrice
  }
}

/**
 * 加入购物车
 */
const addCart = async () => {
  if (!skuObj.value.skuId) {
    return ElMessage.warning('请选择商品规格（如成色/版本）')
  }

  try {
    await cartStore.addCart({
      id: goods.value.id,
      name: goods.value.name,
      picture: goods.value.mainPictures ? goods.value.mainPictures[0] : '',
      price: skuObj.value.price || goods.value.price,
      nowPrice: skuObj.value.price || goods.value.price,
      count: count.value,
      skuId: skuObj.value.skuId,
      attrsText: skuObj.value.specsText || '',
      selected: true,
    })
    ElMessage.success('已加入校园购物车')
  } catch (err) {
    console.error('加入购物车失败:', err)
    ElMessage.error('加入购物车失败，请重试')
  }
}
</script>

<template>
  <div class="campus-goods-page">
    <!-- 加载状态 -->
    <div class="container loading-container" v-if="detailLoading">
      <el-skeleton :rows="12" animated />
    </div>
    <!-- 错误状态 -->
    <div class="container error-container" v-else-if="detailError">
      <el-empty description="商品详情加载失败，请稍后重试">
        <el-button type="primary" @click="getGoods()">重新加载</el-button>
      </el-empty>
    </div>
    <!-- 正常内容 -->
    <div class="container" v-else-if="goods.id">
      <!-- ========== 面包屑导航 ========== -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">校园首页</el-breadcrumb-item>
          <el-breadcrumb-item
            v-for="cat in goods.categories"
            :key="cat.id"
            :to="{ path: `/category/${cat.id}` }"
          >
            {{ cat.name }}
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ goods.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- ========== 商品信息区域 ========== -->
      <div class="info-container">
        <div class="goods-info">
          <!-- ========== 左侧媒体区域 ========== -->
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

          <!-- ========== 右侧规格区域 ========== -->
          <div class="spec">
            <p class="g-name">{{ goods.name }}</p>
            <p class="g-desc">{{ goods.desc }}</p>
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

            <el-button size="large" class="btn" @click="addCart">加入购物车</el-button>
          </div>
        </div>

        <!-- ========== 底部详情区域 ========== -->
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
                <img v-for="img in goods.details?.pictures" :src="img" :key="img" alt="详情图" />
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
    <div class="container" v-else>
      <el-empty description="未找到该商品信息" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

/* ========== 商品详情页 ========== */
.campus-goods-page {
  .loading-container {
    background: #fff;
    padding: 40px 30px;
    border-radius: $borderRadius;
  }

  .error-container {
    background: #fff;
    padding: 80px 20px;
    border-radius: $borderRadius;
    text-align: center;
  }

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

  /* ========== 商品标签页 ========== */
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
          content: '';
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

  /* ========== 数量选择 ========== */
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

  /* ========== 价格样式 ========== */
  .g-price {
    margin-top: 10px;
    span {
      &::before {
        content: '¥';
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

  /* ========== 服务保障 ========== */
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
            content: '•';
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

  /* ========== 销售数据 ========== */
  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;
    li {
      flex: 1;
      position: relative;
      ~ li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: '';
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

/* ========== 商品详情内容 ========== */
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
  > img {
    width: 100%;
  }
}

/* ========== 加入购物车按钮 ========== */
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
