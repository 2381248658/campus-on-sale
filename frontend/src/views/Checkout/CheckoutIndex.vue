<!--
  @file 结算页面
  @description 订单结算页面，包含收货地址选择、商品信息确认、配送时间、支付方式选择和订单提交
-->
<script setup lang="ts">
import { getCheckoutInfoAPI, createOrderAPI } from '@/apis/order'
import { onMounted, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useCartStore } from '@/stores/cartStore'
import { useAddress } from '@/composables/useAddress'
import CheckoutAddress from './components/CheckoutAddress.vue'
import CheckoutGoods from './components/CheckoutGoods.vue'
import CheckoutOptions from './components/CheckoutOptions.vue'
import CheckoutSummary from './components/CheckoutSummary.vue'
import type { CheckoutInfo, OrderGoods, Address } from '@/types/api'

const router = useRouter()
const cartStore = useCartStore()

/** 结算信息 */
const checkInfo = ref<CheckoutInfo>({} as CheckoutInfo)
/** 结算信息加载状态 */
const checkoutLoading = ref<boolean>(false)
/** 订单提交加载状态 */
const submitLoading = ref<boolean>(false)
/** 是否无商品 */
const noGoods = ref<boolean>(false)

const {
  addressList,
  loading: addressLoading,
  saveLoading: saveAddressLoading,
  dialogVisible: addDialogVisible,
  fullLocationTouched,
  addressForm,
  fetchAddressList,
  selectQuickLocation,
  openCreateDialog: openAddDialog,
  saveAddress,
  handleSetDefault,
  handleDelete: handleDeleteAddress,
} = useAddress()

/** 当前选中的地址ID */
const selectedAddressId = ref<string>('')

/** 当前选中的配送时间 */
const curDeliveryTime = ref<number>(1)
/** 当前选中的支付方式（1: 在线支付, 2: 货到付款） */
const curPayType = ref<number>(1)

/** 当前选中的收货地址 */
const currentAddress = computed<Address | undefined>(() => {
  const selected = addressList.value.find((item) => item.id === selectedAddressId.value)
  if (selected) return selected
  return addressList.value.find((item) => item.isDefault === 1) || addressList.value[0]
})

/** 表单验证：检查地址信息是否有效 */
const isFormValid = computed<boolean>(() => {
  const receiver = currentAddress.value?.receiver || ''
  const contact = currentAddress.value?.contact || ''
  const address = currentAddress.value?.address || ''
  return receiver.trim().length > 0 && /^1[3-9]\d{9}$/.test(contact) && address.trim().length > 0
})

/**
 * 同步选中地址（优先选择默认地址）
 */
const syncSelectedAddress = (): void => {
  if (!addressList.value.length) {
    selectedAddressId.value = ''
    return
  }
  const defaultAddress = addressList.value.find((item) => item.isDefault === 1)
  selectedAddressId.value = defaultAddress?.id || addressList.value[0].id
}

watch(addressList, () => {
  syncSelectedAddress()
})

/**
 * 获取结算信息
 */
const getCheckoutInfo = async (): Promise<void> => {
  checkoutLoading.value = true
  try {
    const res = await getCheckoutInfoAPI()
    checkInfo.value = res
    if (!res.goods || res.goods.length === 0) {
      noGoods.value = true
    }
  } catch (err) {
    console.error('获取结算信息失败', err)
    ElMessage.error('结算信息加载失败，请稍后刷新')
  } finally {
    checkoutLoading.value = false
  }
}

/**
 * 打开地址选择弹窗时加载地址列表
 */
const handleOpenAddressDialog = async (): Promise<void> => {
  if (!addressList.value.length) {
    await fetchAddressList()
  }
}

/**
 * 保存地址后回调
 */
const handleSaveAddress = async (): Promise<void> => {
  await saveAddress((createdId) => {
    selectedAddressId.value = createdId
  })
}

/**
 * 创建订单
 */
const createOrder = async (): Promise<void> => {
  if (submitLoading.value) return

  if (!isFormValid.value || !currentAddress.value) {
    ElMessage.warning('请先选择有效收货地址')
    return
  }

  if (!checkInfo.value.goods?.length) {
    ElMessage.warning('暂无可结算商品，请返回购物车重试')
    return
  }

  submitLoading.value = true
  try {
    const deliveryAddress = {
      id: currentAddress.value.id,
      receiver: currentAddress.value.receiver,
      contact: currentAddress.value.contact,
      provinceCode: currentAddress.value.provinceCode || '',
      cityCode: currentAddress.value.cityCode || '',
      countyCode: currentAddress.value.countyCode || '',
      address: currentAddress.value.address,
      fullLocation: currentAddress.value.fullLocation || currentAddress.value.address,
      isDefault: currentAddress.value.isDefault || 0,
    }

    const res = await createOrderAPI({
      deliveryTimeType: curDeliveryTime.value,
      payType: curPayType.value,
      payChannel: 1,
      buyerMessage: `收货地址：${deliveryAddress.fullLocation}`,
      goods: checkInfo.value.goods.map((item: OrderGoods) => ({
        skuId: item.skuId,
        count: item.count,
      })),
      deliveryAddress,
      address: deliveryAddress.address,
      receiver: deliveryAddress.receiver,
      contact: deliveryAddress.contact,
      addressId: deliveryAddress.id,
    })

    const orderId = res?.id
    if (!orderId) {
      throw new Error('订单 ID 获取失败')
    }

    await cartStore.clearSelectedCart()

    ElMessage.success('订单已生成，正在前往支付页...')
    router.push({
      path: '/pay',
      query: { id: orderId, payType: curPayType.value.toString() },
    })
  } catch (err) {
    console.error('创建订单失败', err)
    ElMessage.error('订单提交失败，请重试')
  } finally {
    submitLoading.value = false
  }
}

onMounted(async () => {
  await Promise.all([getCheckoutInfo(), fetchAddressList()])
})
</script>

<template>
  <div class="campus-pay-checkout-page">
    <div class="container">
      <div v-if="noGoods && !checkoutLoading" class="no-goods-card">
        <el-empty description="暂无待结算商品，请先在购物车中选择商品">
          <el-button type="primary" @click="router.replace('/cartlist')">前往购物车</el-button>
        </el-empty>
      </div>

      <div v-else class="wrapper" v-loading="checkoutLoading">
        <h3 class="box-title">收货信息</h3>
        <div class="box-body">
          <CheckoutAddress
            :address-list="addressList"
            v-model:selected-address-id="selectedAddressId"
            :address-loading="addressLoading"
            :save-address-loading="saveAddressLoading"
            v-model:add-dialog-visible="addDialogVisible"
            v-model:address-form="addressForm"
            v-model:full-location-touched="fullLocationTouched"
            @open-address-dialog="handleOpenAddressDialog"
            @open-add-dialog="openAddDialog"
            @save-address="handleSaveAddress"
            @set-default="handleSetDefault"
            @delete-address="handleDeleteAddress"
            @select-quick-location="selectQuickLocation"
          />
        </div>

        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
          <CheckoutGoods :goods="checkInfo.goods || []" />
        </div>

        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <CheckoutOptions v-model:delivery-time="curDeliveryTime" v-model:pay-type="curPayType" />
        </div>

        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <CheckoutSummary :summary="checkInfo.summary" :pay-type="curPayType" />
        </div>

        <div class="submit">
          <p v-if="!isFormValid" class="validate-tip">请先选择有效收货地址并确保手机号格式正确</p>
          <el-button
            type="primary"
            size="large"
            class="submit-btn"
            :disabled="!isFormValid || submitLoading"
            :loading="submitLoading"
            @click="createOrder"
          >
            {{ curPayType === 1 ? '提交订单并支付' : '确认订单并货到付款' }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.campus-pay-checkout-page {
  margin-top: 20px;

  .no-goods-card {
    background: #fff;
    padding: 60px 20px;
    border-radius: $borderRadius;
    box-shadow: $cardShadow;
    text-align: center;
  }

  .wrapper {
    background: #fff;
    padding: 0 20px;
    border-radius: $borderRadius;
    box-shadow: $cardShadow;

    .box-title {
      font-size: 16px;
      font-weight: 500;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }

    .box-body {
      padding: 20px 0;
    }
  }
}

.submit {
  text-align: right;
  padding: 30px 0 40px;

  .validate-tip {
    color: $priceColor;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .submit-btn {
    width: 240px;
    height: 52px;
    font-size: 18px;
    background-color: $campusColor;
    border-color: $campusColor;
  }
}
</style>
