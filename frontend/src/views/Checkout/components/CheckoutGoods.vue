<!--
  @file 结算页-商品信息组件
  @description 展示待结算商品列表，包含商品图片、名称、规格、价格、数量等信息
-->
<script setup lang="ts">
import type { OrderGoods } from '@/types/api'

interface Props {
  /** 商品列表 */
  goods: OrderGoods[]
}

defineProps<Props>()
</script>

<template>
  <div class="checkout-goods">
    <table class="goods">
      <thead>
        <tr>
          <th width="520">商品信息</th>
          <th width="170">单价</th>
          <th width="170">数量</th>
          <th width="170">小计</th>
          <th width="170">实付</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in goods" :key="i.skuId">
          <td>
            <a href="javascript:;" class="info">
              <img v-img-lazy="i.picture" alt="" />
              <div class="right">
                <p class="name ellipsis">{{ i.name }}</p>
                <p class="attr ellipsis">{{ i.attrsText }}</p>
              </div>
            </a>
          </td>
          <td>&yen;{{ i.price }}</td>
          <td>{{ i.count }}</td>
          <td>&yen;{{ (i.totalPrice || i.price * i.count).toFixed(2) }}</td>
          <td>&yen;{{ (i.totalPayPrice || i.price * i.count).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.checkout-goods {
  .goods {
    width: 100%;
    border-collapse: collapse;

    .info {
      display: flex;

      img {
        width: 70px;
        height: 70px;
        margin-right: 20px;
        border-radius: 4px;
      }

      .right {
        line-height: 24px;

        p:last-child {
          color: #999;
          font-size: 13px;
        }
      }
    }

    tr {
      th {
        background: #f5f5f5;
        font-weight: normal;
      }

      td,
      th {
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid #f5f5f5;
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
