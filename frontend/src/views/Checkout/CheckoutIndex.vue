<script setup lang="ts">
import { getCheckoutInfoAPI, createOrderAPI } from '@/apis/order'
import { onMounted, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useCartStore } from '@/stores/cartStore'
import { useAddress } from '@/composables/useAddress'
import AddressForm from '@/components/AddressForm/AddressFormIndex.vue'
import type { CheckoutInfo, OrderGoods, Address } from '@/types/api'

const router = useRouter()
const cartStore = useCartStore()
const checkInfo = ref<CheckoutInfo>({} as CheckoutInfo)
const checkoutLoading = ref<boolean>(false)
const submitLoading = ref<boolean>(false)
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
  getPickupPointText,
  getFullAddressText,
} = useAddress()

const addressDialogVisible = ref<boolean>(false)
const selectedAddressId = ref<string>('')

const currentAddress = computed<Address | undefined>(() => {
  const selected = addressList.value.find((item) => item.id === selectedAddressId.value)
  if (selected) return selected
  return addressList.value.find((item) => item.isDefault === 1) || addressList.value[0]
})

const isFormValid = computed<boolean>(() => {
  const receiver = currentAddress.value?.receiver || ''
  const contact = currentAddress.value?.contact || ''
  const address = currentAddress.value?.address || ''
  return receiver.trim().length > 0 && /^1[3-9]\d{9}$/.test(contact) && address.trim().length > 0
})

interface DeliveryItem {
  id: number
  text: string
}
const deliveryList: DeliveryItem[] = [
  { id: 1, text: '不限送货时间：周一至周日' },
  { id: 2, text: '工作日送货：周一至周五' },
  { id: 3, text: '双休日、假日送货：周六至周日' },
]
const curDeliveryTime = ref<number>(1)
const curPayType = ref<number>(1)

const totalPostFee = computed<number>(() => {
  const basePostFee = checkInfo.value.summary?.postFee || 0
  return curPayType.value === 2 ? basePostFee + 5 : basePostFee
})

const totalPayPrice = computed<number>(() => {
  const totalPay = checkInfo.value.summary?.totalPay || 0
  return totalPay + totalPostFee.value
})

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

const openAddressDialog = async (): Promise<void> => {
  addressDialogVisible.value = true
  if (!addressList.value.length) {
    await fetchAddressList()
  }
}

const onSaveAddress = async () => {
  await saveAddress((createdId) => {
    selectedAddressId.value = createdId
  })
}

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
      <!-- 没有商品时显示 -->
      <div v-if="noGoods && !checkoutLoading" class="no-goods-card">
        <el-empty description="暂无待结算商品，请先在购物车中选择商品">
          <el-button type="primary" @click="router.replace('/cartlist')">前往购物车</el-button>
        </el-empty>
      </div>

      <!-- 正常结算流程 -->
      <div v-else class="wrapper" v-loading="checkoutLoading">
        <h3 class="box-title">收货信息</h3>
        <div class="box-body">
          <div class="address-box">
            <div v-if="currentAddress" class="current-address-card">
              <div class="left">
                <p class="title-line">
                  <span class="label">收货点：</span>
                  <span class="value">{{ getPickupPointText(currentAddress) }}</span>
                  <el-tag size="small" type="primary" v-if="currentAddress.isDefault === 1"
                    >默认地址</el-tag
                  >
                </p>
                <p class="address-line">
                  <span class="label">完整地址：</span>
                  <span class="value">{{ getFullAddressText(currentAddress) }}</span>
                </p>
                <p class="meta">
                  <i>{{ currentAddress.receiver }}</i>
                  <i>{{ currentAddress.contact }}</i>
                </p>
              </div>
              <div class="right">
                <el-button plain @click="openAddressDialog">选择地址</el-button>
                <el-button type="primary" @click="openAddDialog">新增地址</el-button>
              </div>
            </div>

            <div v-else class="address-empty-card">
              <el-empty description="当前暂无收货地址，请先新增地址" :image-size="110" />
              <el-button type="primary" @click="openAddDialog">新增地址</el-button>
            </div>
          </div>
        </div>

        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
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
              <tr v-for="i in checkInfo.goods" :key="i.skuId">
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

        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <a
            class="my-btn"
            v-for="item in deliveryList"
            :key="item.id"
            :class="{ active: curDeliveryTime === item.id }"
            @click="curDeliveryTime = item.id"
          >
            {{ item.text }}
          </a>
        </div>

        <h3 class="box-title">支付方式</h3>
        <div class="box-body pay-type-box">
          <button
            class="pay-card"
            :class="{ active: curPayType === 1 }"
            @click="curPayType = 1"
            type="button"
          >
            <p>在线支付</p>
            <span>推荐，到账更快</span>
          </button>
          <button
            class="pay-card"
            :class="{ active: curPayType === 2 }"
            @click="curPayType = 2"
            type="button"
          >
            <p>货到付款</p>
            <span>需支付手续费 ¥5.00</span>
          </button>
        </div>

        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total-bill" v-if="checkInfo.summary">
            <div class="bill-item">
              <span>商品件数：</span>
              <span class="val">{{ checkInfo.summary.goodsCount }} 件</span>
            </div>
            <div class="bill-item">
              <span>商品总价：</span>
              <span class="val">¥{{ (checkInfo.summary.totalPrice || 0).toFixed(2) }}</span>
            </div>
            <div class="bill-item" v-if="(checkInfo.summary.discountMoney || 0) > 0">
              <span>优惠金额：</span>
              <span class="val discount-text"
                >- ¥{{ (checkInfo.summary.discountMoney || 0).toFixed(2) }}</span
              >
            </div>
            <div class="bill-item">
              <span>运费：</span>
              <span class="val">¥{{ (checkInfo.summary.postFee || 0).toFixed(2) }}</span>
            </div>
            <div class="bill-item" v-if="curPayType === 2">
              <span>货到付款手续费：</span>
              <span class="val warning-text">＋ ¥5.00</span>
            </div>
            <div class="bill-item total-line">
              <span class="total-label">应付总额：</span>
              <span class="total-val">¥{{ totalPayPrice.toFixed(2) }}</span>
            </div>
          </div>
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

    <el-dialog v-model="addressDialogVisible" title="选择收货地址" width="700px">
      <div class="dialog-content" v-loading="addressLoading">
        <div v-if="addressList.length === 0" class="dialog-empty">
          <el-empty description="暂无地址，请先新增地址" :image-size="100" />
        </div>
        <div v-else class="address-dialog-list">
          <div
            class="dialog-address-item"
            v-for="item in addressList"
            :key="item.id"
            :class="{ active: item.id === selectedAddressId }"
          >
            <label class="pick">
              <input type="radio" :value="item.id" v-model="selectedAddressId" />
              <div class="content">
                <p class="line1">
                  <span>收货点：{{ getPickupPointText(item) }}</span>
                  <el-tag size="small" type="primary" v-if="item.isDefault === 1">默认</el-tag>
                </p>
                <p class="line2">完整地址：{{ getFullAddressText(item) }}</p>
                <p class="line2">{{ item.receiver }} ｜ {{ item.contact }}</p>
              </div>
            </label>
            <div class="ops">
              <el-button
                link
                type="primary"
                @click="handleSetDefault(item.id)"
                :disabled="item.isDefault === 1"
              >
                设为默认
              </el-button>
              <el-button link type="danger" @click="handleDeleteAddress(item.id)">删除</el-button>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <el-button @click="openAddDialog">新增地址</el-button>
        <el-button type="primary" @click="addressDialogVisible = false">确定</el-button>
      </template>
    </el-dialog>

    <el-dialog v-model="addDialogVisible" title="新增地址" width="520px">
      <AddressForm
        v-model="addressForm"
        v-model:full-location-touched="fullLocationTouched"
        :save-loading="saveAddressLoading"
        :is-edit-mode="false"
        @select-quick-location="selectQuickLocation"
        @save="onSaveAddress"
        @cancel="addDialogVisible = false"
      />
    </el-dialog>
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
.address-box {
  border: 1px solid #f5f5f5;
  border-radius: $borderRadiusSmall;
  padding: 16px;
  background: #fbfdff;
}
.current-address-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    .title-line,
    .address-line {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 15px;
      margin-bottom: 8px;
      .label {
        color: $subTextColor;
        min-width: 62px;
      }
      .value {
        color: $textColor;
      }
    }
    .meta {
      color: $subTextColor;
      font-size: 14px;
      i {
        font-style: normal;
        margin-right: 16px;
      }
    }
  }
  .right {
    display: flex;
    gap: 12px;
  }
}
.address-empty-card {
  text-align: center;
}
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
.warning-text {
  color: $priceColor;
  font-weight: bold;
}
.discount-text {
  color: #67c23a;
  font-weight: bold;
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
.dialog-content {
  min-height: 220px;
}
.dialog-empty {
  padding: 10px 0;
}
.address-dialog-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.dialog-address-item {
  border: 1px solid $borderColor;
  border-radius: $borderRadiusSmall;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all $transitionDuration;
  .pick {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex: 1;
    cursor: pointer;
    input {
      margin-top: 5px;
    }
    .content {
      .line1 {
        display: flex;
        align-items: center;
        gap: 8px;
        color: $textColor;
        margin-bottom: 6px;
      }
      .line2 {
        color: $subTextColor;
        font-size: 13px;
      }
    }
  }
  .ops {
    display: flex;
    gap: 4px;
  }
  &.active {
    border-color: $campusColor;
    background: $campusColorLight;
  }
}
</style>
