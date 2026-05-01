<script setup lang="ts">
import { onMounted } from 'vue'
import { useAddress } from '@/composables/useAddress'
import AddressForm from '@/components/AddressForm/AddressFormIndex.vue'

const {
  addressList,
  loading,
  saveLoading,
  dialogVisible,
  isEditMode,
  fullLocationTouched,
  addressForm,
  hasAddress,
  fetchAddressList,
  selectQuickLocation,
  openCreateDialog,
  openEditDialog,
  saveAddress,
  handleSetDefault,
  handleDelete,
} = useAddress()

onMounted(() => {
  fetchAddressList()
})
</script>

<template>
  <div class="address-page" v-loading="loading">
    <div class="head">
      <h3>地址管理</h3>
      <el-button type="primary" @click="openCreateDialog">新增地址</el-button>
    </div>

    <div v-if="hasAddress" class="address-list">
      <div class="address-card" v-for="item in addressList" :key="item.id">
        <div class="main">
          <p class="line1">
            <span class="pickup">收货点：{{ item.address }}</span>
            <el-tag size="small" type="primary" v-if="item.isDefault === 1">默认地址</el-tag>
          </p>
          <p class="line2">完整地址：{{ item.fullLocation || item.address }}</p>
          <p class="line3">{{ item.receiver }} ｜ {{ item.contact }}</p>
        </div>

        <div class="ops">
          <el-button link type="primary" @click="openEditDialog(item)">编辑</el-button>
          <el-button
            link
            type="primary"
            @click="handleSetDefault(item.id)"
            :disabled="item.isDefault === 1"
          >
            设为默认
          </el-button>
          <el-button link type="danger" @click="handleDelete(item.id)">删除</el-button>
        </div>
      </div>
    </div>

    <div v-else class="empty">
      <el-empty description="暂无地址，点击右上角新增地址" />
    </div>

    <el-dialog v-model="dialogVisible" :title="isEditMode ? '编辑地址' : '新增地址'" width="520px">
      <AddressForm
        v-model="addressForm"
        v-model:full-location-touched="fullLocationTouched"
        :save-loading="saveLoading"
        :is-edit-mode="isEditMode"
        @select-quick-location="selectQuickLocation"
        @save="saveAddress()"
        @cancel="dialogVisible = false"
      />
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.address-page {
  min-height: 600px;
  padding: 20px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  h3 {
    font-size: 22px;
  }
}

.address-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.address-card {
  border: 1px solid $borderColor;
  border-radius: $borderRadiusSmall;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .line1 {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  .pickup {
    color: $textColor;
    font-weight: 600;
  }

  .line2,
  .line3 {
    color: $subTextColor;
    line-height: 1.7;
  }

  .ops {
    display: flex;
    gap: 6px;
  }
}

.empty {
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
