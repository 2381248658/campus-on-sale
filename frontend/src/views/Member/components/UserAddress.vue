<script setup lang="ts">
import {
  createAddressAPI,
  deleteAddressAPI,
  getAddressListAPI,
  setDefaultAddressAPI,
  updateAddressAPI,
} from '@/apis/address'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Iphone, Location, User } from '@element-plus/icons-vue'
import { computed, onMounted, ref, watch } from 'vue'
import { CAMPUS_LOCATIONS } from '@/constants'
import type { Address, AddressApiItem, AddressFormData } from '@/types/api'

const loading = ref<boolean>(false)
const saveLoading = ref<boolean>(false)
const dialogVisible = ref<boolean>(false)
const isEditMode = ref<boolean>(false)
const editingId = ref<string>('')
const fullLocationTouched = ref<boolean>(false)

const addressList = ref<Address[]>([])

const addressForm = ref<AddressFormData>({
  receiver: '',
  contact: '',
  provinceCode: '',
  cityCode: '',
  countyCode: '',
  address: CAMPUS_LOCATIONS[0],
  fullLocation: `校园代收点 ${CAMPUS_LOCATIONS[0]}`,
  isDefault: 0,
})

const hasAddress = computed<boolean>(() => addressList.value.length > 0)

const normalizeAddress = (item: AddressApiItem): Address => {
  return {
    id: item.id || item._id || '',
    receiver: item.receiver,
    contact: item.contact,
    provinceCode: item.provinceCode,
    cityCode: item.cityCode,
    countyCode: item.countyCode,
    address: item.address,
    isDefault: item.isDefault,
    fullLocation: item.fullLocation,
  }
}

const fetchAddressList = async (): Promise<void> => {
  loading.value = true
  try {
    const res = await getAddressListAPI()
    addressList.value = (res || []).map(normalizeAddress).filter((item) => item.id)
  } catch (error) {
    console.error('获取地址列表失败:', error)
    ElMessage.error('地址列表加载失败，请稍后重试')
  } finally {
    loading.value = false
  }
}

const updateFullLocationByAddress = (address: string): void => {
  if (!address.trim()) return
  if (!fullLocationTouched.value) {
    addressForm.value.fullLocation = `校园代收点 ${address}`
  }
}

watch(
  () => addressForm.value.address,
  (value) => {
    updateFullLocationByAddress(value || '')
  },
)

const resetForm = (): void => {
  fullLocationTouched.value = false
  isEditMode.value = false
  editingId.value = ''
  addressForm.value = {
    receiver: '',
    contact: '',
    provinceCode: '',
    cityCode: '',
    countyCode: '',
    address: CAMPUS_LOCATIONS[0],
    fullLocation: `校园代收点 ${CAMPUS_LOCATIONS[0]}`,
    isDefault: addressList.value.length === 0 ? 1 : 0,
  }
}

const openCreateDialog = (): void => {
  resetForm()
  dialogVisible.value = true
}

const openEditDialog = (item: Address): void => {
  fullLocationTouched.value = true
  isEditMode.value = true
  editingId.value = item.id
  addressForm.value = {
    receiver: item.receiver,
    contact: item.contact,
    provinceCode: item.provinceCode || '',
    cityCode: item.cityCode || '',
    countyCode: item.countyCode || '',
    address: item.address,
    fullLocation: item.fullLocation || item.address,
    isDefault: item.isDefault || 0,
  }
  dialogVisible.value = true
}

const saveAddress = async (): Promise<void> => {
  const receiver = addressForm.value.receiver.trim()
  const contact = addressForm.value.contact.trim()
  const address = addressForm.value.address.trim()
  const fullLocation = addressForm.value.fullLocation?.trim() || ''

  if (!receiver || !contact || !address) {
    ElMessage.warning('收货人、手机号和收货点不能为空')
    return
  }
  if (!/^1[3-9]\d{9}$/.test(contact)) {
    ElMessage.warning('请填写正确的11位手机号')
    return
  }
  if (!fullLocation) {
    ElMessage.warning('请补充完整地址')
    return
  }

  saveLoading.value = true
  const payload: AddressFormData = {
    receiver,
    contact,
    provinceCode: addressForm.value.provinceCode || '',
    cityCode: addressForm.value.cityCode || '',
    countyCode: addressForm.value.countyCode || '',
    address,
    fullLocation,
    isDefault: addressForm.value.isDefault || 0,
  }

  try {
    if (isEditMode.value && editingId.value) {
      await updateAddressAPI(editingId.value, payload)
      ElMessage.success('地址更新成功')
    } else {
      await createAddressAPI(payload)
      ElMessage.success('地址新增成功')
    }
    dialogVisible.value = false
    await fetchAddressList()
  } catch (error) {
    console.error('保存地址失败:', error)
    ElMessage.error('地址保存失败，请稍后重试')
  } finally {
    saveLoading.value = false
  }
}

const handleDelete = async (id: string): Promise<void> => {
  try {
    await ElMessageBox.confirm('确认删除该地址吗？', '删除地址确认', {
      type: 'warning',
      confirmButtonText: '确认删除',
      cancelButtonText: '取消',
    })
    await deleteAddressAPI(id)
    ElMessage.success('地址已删除')
    await fetchAddressList()
  } catch (error: unknown) {
    if (error !== 'cancel') {
      console.error('删除地址失败:', error)
      ElMessage.error('删除地址失败，请稍后重试')
    }
  }
}

const handleSetDefault = async (id: string): Promise<void> => {
  try {
    await setDefaultAddressAPI(id)
    ElMessage.success('默认地址已更新')
    await fetchAddressList()
  } catch (error) {
    console.error('设置默认地址失败:', error)
    ElMessage.error('默认地址设置失败')
  }
}

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
      <el-form label-width="88px">
        <el-form-item label="收货人">
          <el-input
            v-model="addressForm.receiver"
            placeholder="请输入收货人姓名"
            :prefix-icon="User"
          />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input
            v-model="addressForm.contact"
            placeholder="请输入11位手机号"
            maxlength="11"
            :prefix-icon="Iphone"
          />
        </el-form-item>
        <el-form-item label="收货点">
          <div class="quick-locations">
            <button
              type="button"
              class="quick-btn"
              v-for="location in CAMPUS_LOCATIONS"
              :key="location"
              :class="{ active: addressForm.address === location }"
              @click="addressForm.address = location"
            >
              {{ location.replace('宿舍楼代收点', '') }}
            </button>
          </div>
        </el-form-item>
        <el-form-item label="完整地址">
          <el-input
            v-model="addressForm.fullLocation"
            placeholder="将根据收货点自动填充，可手动修改"
            :prefix-icon="Location"
            @input="fullLocationTouched = true"
          />
        </el-form-item>
        <el-form-item label="设为默认">
          <el-switch v-model="addressForm.isDefault" :active-value="1" :inactive-value="0" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" :loading="saveLoading" @click="saveAddress">保存地址</el-button>
      </template>
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

.quick-locations {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.quick-btn {
  border: 1px solid $borderColor;
  background: #fff;
  color: $subTextColor;
  border-radius: 14px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  transition: all $transitionDuration;

  &:hover {
    border-color: $campusColor;
    color: $campusColor;
  }

  &.active {
    border-color: $campusColor;
    color: $campusColor;
    background: $campusColorLight;
  }
}
</style>
