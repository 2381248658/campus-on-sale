<!--
  @file 结算页-金额明细组件
  @description 展示订单金额明细，包含商品件数、总价、优惠、运费、应付总额等
-->
<script setup lang="ts">
import { computed } from 'vue'

interface CheckoutSummary {
  goodsCount?: number
  totalPrice?: number
  discountMoney?: number
  postFee?: number
  totalPay?: number
}

interface Props {
  /** 结算汇总信息 */
  summary?: CheckoutSummary
  /** 支付方式（1: 在线支付, 2: 货到付款） */
  payType: number
}

const props = defineProps<Props>()

/** 总运费 */
const totalPostFee = computed<number>(() => {
  return props.summary?.postFee || 0
})

/** 应付总金额 */
const totalPayPrice = computed<number>(() => {
  return props.summary?.totalPay || 0
})
</script>

<template>
  <div class="checkout-summary">
    <div class="total-bill" v-if="summary">
      <div class="bill-item">
        <span>商品件数：</span>
        <span class="val">{{ summary.goodsCount }} 件</span>
      </div>
      <div class="bill-item">
        <span>商品总价：</span>
        <span class="val">¥{{ (summary.totalPrice || 0).toFixed(2) }}</span>
      </div>
      <div class="bill-item" v-if="(summary.discountMoney || 0) > 0">
        <span>优惠金额：</span>
        <span class="val discount-text">- ¥{{ (summary.discountMoney || 0).toFixed(2) }}</span>
      </div>
      <div class="bill-item">
        <span>运费：</span>
        <span class="val">¥{{ totalPostFee.toFixed(2) }}</span>
      </div>
      <div class="bill-item total-line">
        <span class="total-label">应付总额：</span>
        <span class="total-val">¥{{ totalPayPrice.toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.checkout-summary {
  .total-bill {
    width: 420px;
    margin-left: auto;
    padding: 20px;
    background: #f9fbff;
    border: 1px solid #eef3f8;
    border-radius: $borderRadiusSmall;

    .bill-item {
      display: flex;
      justify-content: space-between;
      line-height: 36px;
      font-size: 14px;
      color: #666;

      .val {
        color: #333;
      }

      &.total-line {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px dashed #dbe6f2;

        .total-label {
          font-size: 16px;
          color: #333;
          font-weight: bold;
        }

        .total-val {
          font-size: 28px;
          color: $priceColor;
          font-weight: bold;
        }
      }
    }
  }
}

.warning-text {
  color: $priceColor;
  font-weight: bold;
}

.discount-text {
  color: #67c23a;
  font-weight: bold;
}
</style>
