<script setup>
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const cartStore = useCartStore()
const router = useRouter()

/**
 * 购物车交互处理逻辑
 */

// 切换全选/全不选
const allCheck = (selected) => {
  cartStore.allCheck(selected)
}

// 结算跳转逻辑
const goCheckout = () => {
  if (cartStore.selectedCount === 0) {
    return ElMessage.warning('请至少选择一件校内好物再结算哦')
  }
  router.push('/checkout')
}

// 同步商品购买数量至 Store
const countChange = (skuId, count) => {
  cartStore.updateCartItem(skuId, { count })
}

// 同步单选状态至 Store
const singleCheck = (skuId, selected) => {
  cartStore.updateCartItem(skuId, { selected })
}
</script>

<template>
  <div class="campus-cart-page">
    <div class="container m-top-20">
      <div class="cart">
        <table>
          <thead>
            <tr>
              <th width="120">
                <el-checkbox :model-value="cartStore.isAll" @change="allCheck" />
              </th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in cartStore.cartList" :key="i.skuId">
              <td>
                <el-checkbox :model-value="i.selected" @change="(selected) => singleCheck(i.skuId, selected)" />
              </td>
              <td>
                <div class="goods">
                  <RouterLink :to="`/detail/${i.id}`">
                    <img v-img-lazy="i.picture" alt="校园好物" />
                  </RouterLink>
                  <div>
                    <p class="name ellipsis">{{ i.name }}</p>
                    <p class="attr ellipsis" v-if="i.attrsText">{{ i.attrsText }}</p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ Number(i.nowPrice || i.price || 0).toFixed(2) }}</p>
              </td>
              <td class="tc">
                <el-input-number :min="1" v-model="i.count" @change="(val) => countChange(i.skuId, val)" />
              </td>
              <td class="tc">
                <p class="f16 red">
                  &yen;{{ (Number(i.nowPrice || i.price || 0) * Number(i.count || 0)).toFixed(2) }}
                </p>
              </td>
              <td class="tc">
                <el-popconfirm title="确认从购物车删除吗?" @confirm="cartStore.delCart(i.skuId)">
                  <template #reference>
                    <a href="javascript:;" class="del-btn">删除</a>
                  </template>
                </el-popconfirm>
              </td>
            </tr>
            <tr v-if="cartStore.cartList.length === 0">
              <td colspan="6">
                <div class="cart-none">
                  <el-empty description="你的购物车还是空的哦">
                    <el-button type="primary" @click="$router.push('/')">去校内馆逛逛</el-button>
                  </el-empty>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="action">
        <div class="batch">
          共 <span class="green">{{ cartStore.allCount }}</span> 件，
          已选 <span class="green">{{ cartStore.selectedCount }}</span> 件，
          合计：<span class="red">¥ {{ Number(cartStore.selectedPrice || 0).toFixed(2) }}</span>
        </div>
        <div class="total">
          <el-button size="large" type="primary" class="checkout-btn" @click="goCheckout"
            :disabled="cartStore.selectedCount === 0">
            去结算
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";

.campus-cart-page {
  margin-top: 20px;
  min-height: 600px;

  .cart {
    background: #fff;
    color: #666;
    border-radius: $borderRadius;
    box-shadow: $cardShadow;
    overflow: hidden;

    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      width: 100%;

      th,
      td {
        padding: 15px;
        border-bottom: 1px solid #f5f5f5;

        &:first-child {
          text-align: left;
          padding-left: 30px;
        }
      }

      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
        background: #fafafa;
      }
    }
  }

  .cart-none {
    text-align: center;
    padding: 80px 0;
    background: #fff;
  }

  .tc {
    text-align: center;

    .del-btn {
      color: #999;
      transition: color 0.3s;

      &:hover {
        color: $priceColor;
      }
    }
  }

  .red {
    color: $priceColor;
    font-weight: bold;
  }

  .green {
    color: $campusColor;
    font-weight: bold;
    margin: 0 5px;
  }

  .f16 {
    font-size: 16px;
  }

  .goods {
    display: flex;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
      border-radius: $borderRadiusSmall;
      border: 1px solid #eee;
      object-fit: cover;
    }

    >div {
      width: 280px;
      font-size: 14px;
      padding-left: 15px;

      .name {
        font-size: 16px;
        margin-bottom: 5px;
        color: #333;
      }

      .attr {
        color: #999;
        font-size: 13px;
      }
    }
  }

  .action {
    display: flex;
    background: #fff;
    margin-top: 20px;
    height: 80px;
    align-items: center;
    font-size: 16px;
    justify-content: space-between;
    padding: 0 30px;
    border-radius: $borderRadius;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
    position: sticky; // 开启吸底效果
    bottom: 0;

    .batch {
      color: #666;

      .red {
        font-size: 26px;
        margin-left: 10px;
      }
    }

    .checkout-btn {
      width: 180px;
      height: 50px;
      font-size: 18px;
      background-color: $campusColor;
      border-color: $campusColor;

      &:hover {
        background-color: color.adjust($campusColor, $lightness: -5%);
        border-color: color.adjust($campusColor, $lightness: -5%);
      }

      &:disabled {
        background-color: #ccc;
        border-color: #ccc;
        cursor: not-allowed;
      }
    }
  }
}
</style>
