<script setup>
/**
 * CheckoutIndex.vue - 校园惠订单结算页
 * 功能：校内代收点选择、动态运费计算、订单创建与多平台数据兼容
 */
import { getCheckoutInfoAPI, createOrderAPI } from '@/apis/checkout'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { User, Iphone } from '@element-plus/icons-vue'

const router = useRouter()
const checkInfo = ref({})

// --- 1. 校园配送设置与表单校验 ---
const campusLocations = [
  '一号宿舍楼代收点', '二号宿舍楼代收点', '三号宿舍楼代收点',
  '四号宿舍楼代收点', '五号宿舍楼代收点', '六号宿舍楼代收点'
]
const curLocation = ref('一号宿舍楼代收点')
const receiverName = ref('')
const receiverContact = ref('')

// 响应式表单验证：姓名非空且手机号符合 11 位正则
const isFormValid = computed(() => {
  const nameValid = receiverName.value.trim().length > 0
  const phoneValid = /^1[3-9]\d{9}$/.test(receiverContact.value)
  return nameValid && phoneValid
})

// --- 2. 配送时间配置 ---
const deliveryList = [
  { id: 1, text: '不限送货时间：周一至周日' },
  { id: 2, text: '工作日送货：周一至周五' },
  { id: 3, text: '双休日、假日送货：周六至周日' }
]
const curDeliveryTime = ref(1)

// --- 3. 支付方式与费用计算逻辑 ---
const curPayType = ref(1) // 1: 在线支付, 2: 货到付款

/**
 * 动态运费逻辑：若选择货到付款，则在基础运费上增加 5 元手续费
 */
const totalPostFee = computed(() => {
  const basePostFee = checkInfo.value.summary?.postFee || 0
  return curPayType.value === 2 ? basePostFee + 5 : basePostFee
})

// 最终应付总额计算
const totalPayPrice = computed(() => {
  const totalPrice = checkInfo.value.summary?.totalPrice || 0
  return totalPrice + totalPostFee.value
})

/**
 * 获取结算页面初始数据
 */
const getCheckoutInfo = async () => {
  try {
    const res = await getCheckoutInfoAPI()
    // 兼容拦截器剥离 data 层后的不同响应结构
    checkInfo.value = res.result || res
  } catch (err) {
    console.error('获取结算信息失败', err)
  }
}

onMounted(() => getCheckoutInfo())

/**
 * 订单创建逻辑
 */
const createOrder = async () => {
  if (!isFormValid.value) {
    return ElMessage.warning('请检查联系人信息及手机号格式')
  }

  try {
    const res = await createOrderAPI({
      deliveryTimeType: curDeliveryTime.value,
      payType: curPayType.value,
      payChannel: 1,
      buyerMessage: `代收点：${curLocation.value}；备注：校园配送`,
      goods: checkInfo.value.goods.map((item) => ({
        skuId: item.skuId,
        count: item.count
      })),
      addressId: "campus_default",
      address: curLocation.value,
      receiver: receiverName.value,
      contact: receiverContact.value
    })

    /**
     * 数据脱壳兼容：安全获取订单 ID
     * 适配 res.data.result.id, res.result.id, 或 res.id 结构
     */
    const orderId = res.data?.result?.id || res.result?.id || res.id

    if (!orderId) {
      throw new Error('订单 ID 获取失败')
    }

    ElMessage.success('订单已生成，正在前往支付页...')

    // 跳转支付中心，携带订单 ID 与支付方式标识
    router.push({
      path: '/pay',
      query: { id: orderId, payType: curPayType.value }
    })
  } catch (err) {
    console.error('创建订单失败', err)
    ElMessage.error('订单提交失败，请重试')
  }
}
</script>

<template>
  <div class="campus-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <h3 class="box-title">收货信息（校园代收点）</h3>
        <div class="box-body">
          <div class="address-box">
            <div class="location-select">
              <p class="label">选择校内代收点：</p>
              <el-radio-group v-model="curLocation">
                <el-radio-button v-for="item in campusLocations" :key="item" :label="item" />
              </el-radio-group>
            </div>

            <div class="user-form-card">
              <div class="input-item">
                <span class="input-label">收货人姓名</span>
                <el-input v-model="receiverName" placeholder="请输入姓名" :prefix-icon="User" clearable />
              </div>
              <div class="input-item">
                <span class="input-label">联系手机号</span>
                <el-input v-model="receiverContact" placeholder="请输入11位手机号" :prefix-icon="Iphone" maxlength="11"
                  clearable />
              </div>
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
                    <img v-img-lazy="i.picture" alt="">
                    <div class="right">
                      <p class="name ellipsis">{{ i.name }}</p>
                      <p class="attr ellipsis">{{ i.attrsText }}</p>
                    </div>
                  </a>
                </td>
                <td>&yen;{{ i.price }}</td>
                <td>{{ i.count }}</td>
                <td>&yen;{{ (i.price * i.count).toFixed(2) }}</td>
                <td>&yen;{{ (i.price * i.count).toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <a class="my-btn" v-for="item in deliveryList" :key="item.id" :class="{ active: curDeliveryTime === item.id }"
            @click="curDeliveryTime = item.id">
            {{ item.text }}
          </a>
        </div>

        <h3 class="box-title">支付方式</h3>
        <div class="box-body">
          <a class="my-btn" :class="{ active: curPayType === 1 }" @click="curPayType = 1">在线支付</a>
          <a class="my-btn" :class="{ active: curPayType === 2 }" @click="curPayType = 2">货到付款</a>
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
            <div class="bill-item">
              <span>校园基础运费：</span>
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
          <p v-if="!isFormValid" class="validate-tip">请完善上方联系人及手机号信息</p>
          <el-button type="primary" size="large" class="submit-btn" :disabled="!isFormValid" @click="createOrder">
            {{ curPayType === 1 ? '提交订单并支付' : '确认订单并货到付款' }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";

.campus-pay-checkout-page {
  margin-top: 20px;

  .wrapper {
    background: #fff;
    padding: 0 20px;
    border-radius: $borderRadius;

    .box-title {
      font-size: 16px;
      font-weight: normal;
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
  padding: 20px;
  border: 1px solid #f5f5f5;

  .label {
    margin-bottom: 15px;
    color: #333;
    font-weight: bold;
  }

  .location-select {
    margin-bottom: 30px;
  }
}

.user-form-card {
  display: flex;
  gap: 50px;
  padding: 25px;
  background: #fbfbfb;
  border-radius: 8px;

  .input-item {
    flex: 1;
    display: flex;
    align-items: center;

    .input-label {
      width: 90px;
      color: #666;
      font-size: 14px;
    }

    :deep(.el-input__wrapper) {
      background: transparent;
      box-shadow: none;
      border-bottom: 1px solid #e4e4e4;
      border-radius: 0;
      padding: 0;

      &.is-focus {
        border-bottom-color: $campusColor;
      }
    }
  }
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
  transition: all 0.3s;

  &.active {
    border-color: $campusColor;
    color: $campusColor;
    background: rgba($campusColor, 0.05);
  }
}

.total-bill {
  width: 380px;
  margin-left: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 4px;

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
      border-top: 1px dashed #e4e4e4;

      .total-label {
        font-size: 16px;
        color: #333;
        font-weight: bold;
      }

      .total-val {
        font-size: 24px;
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

.submit {
  text-align: right;
  padding: 40px 0;

  .validate-tip {
    color: $priceColor;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .submit-btn {
    width: 220px;
    height: 50px;
    font-size: 18px;
    background-color: $campusColor;
    border-color: $campusColor;

    &:disabled {
      background: #ccc;
      border-color: #ccc;
      cursor: not-allowed;
    }
  }
}
</style>
