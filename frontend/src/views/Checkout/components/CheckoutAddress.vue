<!--
  @file 结算页-收货地址组件
  @description 展示当前收货地址，支持选择地址、新增地址、地址弹窗管理
-->
<script setup lang="ts">
import { ref, computed } from 'vue'
import AddressForm from '@/components/AddressForm/AddressFormIndex.vue'
import type { Address, AddressFormData } from '@/types/api'

interface Props {
  /** 地址列表 */
  addressList: Address[]
  /** 当前选中的地址ID */
  selectedAddressId: string
  /** 地址加载状态 */
  addressLoading?: boolean
  /** 保存地址加载状态 */
  saveAddressLoading?: boolean
  /** 新增地址弹窗可见性 */
  addDialogVisible: boolean
  /** 地址表单数据 */
  addressForm: AddressFormData
  /** 完整地址是否已修改 */
  fullLocationTouched: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:selectedAddressId': [value: string]
  'update:addDialogVisible': [value: boolean]
  'update:addressForm': [value: AddressFormData]
  'update:fullLocationTouched': [value: boolean]
  openAddressDialog: []
  openAddDialog: []
  saveAddress: []
  setDefault: [id: string]
  deleteAddress: [id: string]
  selectQuickLocation: [location: string]
}>()

/** 地址选择弹窗可见性 */
const dialogVisible = ref<boolean>(false)

/** 当前选中的收货地址 */
const currentAddress = computed<Address | undefined>(() => {
  const selected = props.addressList.find((item) => item.id === props.selectedAddressId)
  if (selected) return selected
  return props.addressList.find((item) => item.isDefault === 1) || props.addressList[0]
})

/** 获取收货点文本 */
const getPickupPointText = (item: Address): string => {
  return item.address || '未设置收货点'
}

/** 获取完整地址文本 */
const getFullAddressText = (item: Address): string => {
  return item.fullLocation || item.address || '未设置完整地址'
}

/** 打开地址选择弹窗 */
const handleOpenDialog = (): void => {
  dialogVisible.value = true
  emit('openAddressDialog')
}

/** 关闭地址选择弹窗 */
const handleCloseDialog = (): void => {
  dialogVisible.value = false
}

/** 打开新增地址弹窗 */
const handleOpenAddDialog = (): void => {
  emit('openAddDialog')
}

/** 保存地址 */
const handleSaveAddress = async (): Promise<void> => {
  emit('saveAddress')
}

/** 设为默认地址 */
const handleSetDefault = (id: string): void => {
  emit('setDefault', id)
}

/** 删除地址 */
const handleDeleteAddress = (id: string): void => {
  emit('deleteAddress', id)
}

/** 选择快捷地址 */
const handleSelectQuickLocation = (location: string): void => {
  emit('selectQuickLocation', location)
}

/** 本地选中的地址ID（用于弹窗中的 radio 选择） */
const localSelectedAddressId = computed({
  get: () => props.selectedAddressId,
  set: (value: string) => emit('update:selectedAddressId', value),
})

/** 本地地址表单（双向绑定） */
const localAddressForm = computed({
  get: () => props.addressForm,
  set: (value: AddressFormData) => emit('update:addressForm', value),
})

/** 本地完整地址修改状态（双向绑定） */
const localFullLocationTouched = computed({
  get: () => props.fullLocationTouched,
  set: (value: boolean) => emit('update:fullLocationTouched', value),
})

/** 关闭新增地址弹窗 */
const closeAddDialog = (): void => {
  emit('update:addDialogVisible', false)
}
</script>

<template>
  <div class="checkout-address">
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
          <el-button plain @click="handleOpenDialog">选择地址</el-button>
          <el-button type="primary" @click="handleOpenAddDialog">新增地址</el-button>
        </div>
      </div>

      <div v-else class="address-empty-card">
        <el-empty description="当前暂无收货地址，请先新增地址" :image-size="110" />
        <el-button type="primary" @click="handleOpenAddDialog">新增地址</el-button>
      </div>
    </div>

    <el-dialog v-model="dialogVisible" title="选择收货地址" width="700px">
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
              <input type="radio" :value="item.id" v-model="localSelectedAddressId" />
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
        <el-button @click="handleOpenAddDialog">新增地址</el-button>
        <el-button type="primary" @click="handleCloseDialog">确定</el-button>
      </template>
    </el-dialog>

    <el-dialog
      :model-value="addDialogVisible"
      title="新增地址"
      width="520px"
      @update:model-value="closeAddDialog"
    >
      <AddressForm
        v-model="localAddressForm"
        v-model:full-location-touched="localFullLocationTouched"
        :save-loading="saveAddressLoading"
        :is-edit-mode="false"
        @select-quick-location="handleSelectQuickLocation"
        @save="handleSaveAddress"
        @cancel="closeAddDialog"
      />
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.checkout-address {
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
