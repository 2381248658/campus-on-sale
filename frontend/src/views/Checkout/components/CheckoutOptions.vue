<!--
  @file 结算页-配送和支付选项组件
  @description 配送时间选择和支付方式选择
-->
<script setup lang="ts">
interface DeliveryItem {
  id: number
  text: string
}

interface Props {
  /** 当前选中的配送时间 */
  deliveryTime: number
  /** 当前选中的支付方式（1: 在线支付, 2: 货到付款） */
  payType: number
}

defineProps<Props>()

const emit = defineEmits<{
  'update:deliveryTime': [value: number]
  'update:payType': [value: number]
}>()

/** 配送时间选项列表 */
const deliveryList: DeliveryItem[] = [
  { id: 1, text: '不限送货时间：周一至周日' },
  { id: 2, text: '工作日送货：周一至周五' },
  { id: 3, text: '双休日、假日送货：周六至周日' },
]

/** 选择配送时间 */
const selectDeliveryTime = (id: number): void => {
  emit('update:deliveryTime', id)
}

/** 选择支付方式 */
const selectPayType = (type: number): void => {
  emit('update:payType', type)
}
</script>

<template>
  <div class="checkout-options">
    <div class="delivery-section">
      <a
        class="my-btn"
        v-for="item in deliveryList"
        :key="item.id"
        :class="{ active: deliveryTime === item.id }"
        @click="selectDeliveryTime(item.id)"
      >
        {{ item.text }}
      </a>
    </div>

    <div class="pay-type-box">
      <button
        class="pay-card"
        :class="{ active: payType === 1 }"
        @click="selectPayType(1)"
        type="button"
      >
        <p>在线支付</p>
        <span>推荐，到账更快</span>
      </button>
      <button
        class="pay-card"
        :class="{ active: payType === 2 }"
        @click="selectPayType(2)"
        type="button"
      >
        <p>货到付款</p>
        <span>需支付手续费 ¥5.00</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.checkout-options {
  .delivery-section {
    margin-bottom: 20px;
  }
}

.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666;
  display: inline-block;
  cursor: pointer;
  transition: all $transitionDuration;

  &.active {
    border-color: $campusColor;
    color: $campusColor;
    background: rgba($campusColor, 0.06);
  }
}

.pay-type-box {
  display: flex;
  gap: 16px;

  .pay-card {
    width: 260px;
    border: 1px solid $borderColor;
    border-radius: $borderRadiusSmall;
    padding: 14px 16px;
    text-align: left;
    background: #fff;
    cursor: pointer;
    transition: all $transitionDuration;

    p {
      color: $textColor;
      font-size: 15px;
      margin-bottom: 6px;
      font-weight: 500;
    }

    span {
      color: $insTextColor;
      font-size: 13px;
    }

    &:hover {
      border-color: $campusColor;
      box-shadow: $cardShadow;
    }

    &.active {
      border-color: $campusColor;
      background: $campusColorLight;
    }
  }
}
</style>
