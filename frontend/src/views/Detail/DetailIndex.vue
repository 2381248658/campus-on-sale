<!--
  @file 商品详情页
  @description 展示商品详情信息，支持规格选择、加入购物车
-->
<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useCartStore } from '@/stores/cartStore'
import { useGoodsDetail } from '@/composables/useGoodsDetail'
import { useSkuSelect } from '@/composables/useSkuSelect'
import type { GoodsContext } from '@/composables/useStreamChat'
import DetailHot from './components/DetailHot.vue'
import ViewIndex from '@/components/ImageView/ViewIndex.vue'
import AiChatPanel from '@/components/AiChat/AiChatPanel.vue'

const cartStore = useCartStore()
const { goods, loading: detailLoading, error: detailError, getGoods } = useGoodsDetail()
const { skuObj, displayPrice, displayOldPrice, skuChange, isSkuSelected } = useSkuSelect(goods)

/** AI 导购助手商品上下文 */
const aiContext = computed<GoodsContext | null>(() => {
  if (!goods.value.id) return null
  return {
    name: goods.value.name,
    price: goods.value.price,
    oldPrice: goods.value.oldPrice,
    desc: goods.value.desc,
    category: goods.value.categories?.map((c) => c.name).join('/'),
    specs: goods.value.specs?.map((s) => ({
      name: s.name,
      values: s.values.map((v) => ({ name: v.name })),
    })),
    skus: goods.value.skus?.map((s) => ({
      price: s.price,
      oldPrice: s.oldPrice,
      inventory: s.inventory,
      specsText: s.specs.map((sp) => `${sp.name}：${sp.valueName}`).join('，'),
    })),
  }
})

/** 购买数量 */
const count = ref<number>(1)

/**
 * 加入购物车
 */
const addCart = async () => {
  if (!isSkuSelected()) {
    return ElMessage.warning('请选择商品规格（如成色/版本）')
  }

  try {
    await cartStore.addCart({
      id: goods.value.id,
      name: goods.value.name,
      picture: goods.value.mainPictures ? goods.value.mainPictures[0] : '',
      price: displayPrice.value,
      nowPrice: displayPrice.value,
      count: count.value,
      skuId: skuObj.value.skuId!,
      attrsText: skuObj.value.specsText || '',
      selected: true,
    })
    ElMessage.success('已加入购物车')
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
              <span>{{ displayPrice }}</span>
              <span v-if="displayOldPrice">{{ displayOldPrice }}</span>
            </p>

            <div class="g-service">
              <dl>
                <dt>配送</dt>
                <dd>校园交易专享：下单立享本校【送货上寝】或【指定地点自提】</dd>
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

    <!-- AI 商品导购助手 -->
    <AiChatPanel v-if="goods.id" :goods-context="aiContext" />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/var.scss' as v;
@use '@/styles/mixins.scss' as *;
@use 'sass:color';

/* ========== 商品详情页 ========== */
.campus-goods-page {
  animation: v.$animationFadeIn;

  .loading-container {
    background: v.$white;
    padding: v.$spacing4xl v.$spacing3xl;
    border-radius: v.$borderRadius;
    @include card-base(false);
  }

  .error-container {
    background: v.$white;
    padding: 80px v.$spacing2xl;
    border-radius: v.$borderRadius;
    text-align: center;
    @include card-base(false);
  }

  .goods-info {
    min-height: 600px;
    background: v.$white;
    display: flex;
    border-radius: v.$borderRadius;
    box-shadow: v.$cardShadow;
    animation: v.$animationSlideInUp;

    .media {
      width: 580px;
      padding: v.$spacing3xl v.$spacing4xl;
    }
    .spec {
      flex: 1;
      padding: v.$spacing3xl v.$spacing3xl v.$spacing3xl 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: v.$spacing2xl;

    .goods-article {
      width: 940px;
      margin-right: v.$spacing2xl;
    }
    .goods-aside {
      width: 280px;
    }
  }

  /* ========== 商品标签页 ========== */
  .goods-tabs {
    background: v.$white;
    border-radius: v.$borderRadius;
    box-shadow: v.$cardShadow;
    overflow: hidden;

    nav {
      height: 70px;
      line-height: 70px;
      display: flex;
      border-bottom: v.$borderWidthThin solid v.$lineColor;
      background: v.$gradientGlass;

      a {
        padding: 0 v.$spacing4xl;
        font-size: v.$fontSizeXl;
        position: relative;
        color: v.$textColor;
        font-weight: v.$fontWeightSemibold;
        transition: color v.$transitionDurationFast v.$transitionEasing;

        &:hover {
          color: v.$campusColor;
        }

        &::after {
          content: '';
          position: absolute;
          left: v.$spacing4xl;
          bottom: -1px;
          width: 72px;
          height: 3px;
          background: v.$gradientPrimary;
          border-radius: 2px 2px 0 0;
        }
      }
    }
  }

  /* ========== 数量选择 ========== */
  .number-box {
    display: flex;
    align-items: center;
    margin: v.$spacing2xl 0;

    .label {
      width: 60px;
      color: v.$insTextColor;
      padding-left: v.$spacingSm;
      font-size: v.$fontSizeBase;
    }

    :deep(.el-input-number) {
      .el-input__wrapper {
        border-radius: v.$borderRadiusSmall;
        transition: all v.$transitionDuration v.$transitionEasing;

        &:hover,
        &:focus-within {
          border-color: v.$campusColor;
          box-shadow: 0 0 0 3px v.$campusColorAlpha10;
        }
      }
    }
  }

  .g-name {
    font-size: v.$fontSize2xl;
    color: v.$textColor;
    font-weight: v.$fontWeightBold;
    line-height: v.$lineHeightTight;
  }

  .g-desc {
    color: v.$insTextColor;
    margin-top: v.$spacingSm;
    font-size: v.$fontSizeBase;
    line-height: v.$lineHeightNormal;
  }

  /* ========== 价格样式 ========== */
  .g-price {
    margin-top: v.$spacingSm;
    display: flex;
    align-items: baseline;
    gap: v.$spacingSm;

    span {
      &::before {
        content: '¥';
        font-size: v.$fontSizeBase;
      }

      &:first-child {
        color: v.$priceColor;
        font-size: v.$fontSize2xl;
        font-weight: v.$fontWeightBold;
      }

      &:last-child {
        color: v.$insTextColor;
        text-decoration: line-through;
        font-size: v.$fontSizeMd;
      }
    }
  }

  /* ========== 服务保障 ========== */
  .g-service {
    background: v.$campusColorAlpha10;
    width: 500px;
    padding: v.$spacing2xl v.$spacingSm 0 v.$spacingSm;
    margin-top: v.$spacingSm;
    border-radius: v.$borderRadiusSmall;

    dl {
      padding-bottom: v.$spacing2xl;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: v.$insTextColor;
        font-size: v.$fontSizeBase;
      }

      dd {
        color: v.$subTextColor;
        font-size: v.$fontSizeSm;

        span {
          margin-right: v.$spacingSm;
          display: inline-block;

          &::before {
            content: '•';
            color: v.$campusColor;
            margin-right: v.$spacingXs;
            font-weight: v.$fontWeightBold;
          }
        }

        a {
          color: v.$campusColor;
          transition: color v.$transitionDurationFast v.$transitionEasing;

          &:hover {
            color: v.$campusColorHover;
            text-decoration: underline;
          }
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
    margin-top: v.$spacingLg;

    li {
      flex: 1;
      position: relative;
      transition: all v.$transitionDuration v.$transitionEasing;

      &:hover {
        transform: translateY(-2px);
      }

      ~ li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: v.$borderWidthThin solid v.$borderColor;
        content: '';
      }

      p {
        &:first-child {
          color: v.$insTextColor;
          font-size: v.$fontSizeSm;
        }

        &:nth-child(2) {
          color: v.$priceColor;
          margin-top: v.$spacingSm;
          font-size: v.$fontSizeMd;
          font-weight: v.$fontWeightBold;
        }

        &:last-child {
          color: v.$subTextColor;
          margin-top: v.$spacingSm;
          font-size: v.$fontSizeSm;
          cursor: pointer;
          transition: color v.$transitionDurationFast v.$transitionEasing;

          i {
            color: v.$campusColor;
            font-size: v.$fontSizeBase;
            margin-right: v.$spacingXs;
          }

          &:hover {
            color: v.$campusColor;
          }
        }
      }
    }
  }
}

/* ========== 商品详情内容 ========== */
.goods-detail {
  padding: v.$spacing4xl;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: v.$spacing3xl;
    gap: v.$spacingSm;

    li {
      display: flex;
      width: calc(50% - v.$spacingXs);
      padding: v.$spacingSm;
      background: v.$bgColor;
      border-radius: v.$borderRadiusSmall;
      transition: all v.$transitionDuration v.$transitionEasing;

      &:hover {
        background: v.$campusColorAlpha10;
        transform: translateX(2px);
      }

      .dt {
        width: 100px;
        color: v.$insTextColor;
        font-size: v.$fontSizeSm;
      }

      .dd {
        flex: 1;
        color: v.$subTextColor;
        font-size: v.$fontSizeSm;
      }
    }
  }

  > img {
    width: 100%;
    border-radius: v.$borderRadius;
    transition: transform v.$transitionDurationSlow v.$transitionEasing;

    &:hover {
      transform: scale(1.02);
    }
  }
}

/* ========== 加入购物车按钮 ========== */
.btn {
  margin-top: v.$spacing2xl;
  background: v.$gradientPrimary;
  color: v.$white;
  border: none;
  border-radius: v.$borderRadius;
  font-weight: v.$fontWeightSemibold;
  transition: all v.$transitionDuration v.$transitionEasing;
  box-shadow: v.$shadowPrimary;
  @include ripple-effect();

  &:hover {
    background: v.$gradientPrimary;
    box-shadow: v.$shadowPrimaryHover;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}

.bread-container {
  padding: v.$spacing2xl 0;
  animation: v.$animationSlideInDown;
}
</style>
