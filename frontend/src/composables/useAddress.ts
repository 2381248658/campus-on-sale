import { ref, computed, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  createAddressAPI,
  deleteAddressAPI,
  getAddressListAPI,
  setDefaultAddressAPI,
  updateAddressAPI,
} from '@/apis/address'
import { CAMPUS_LOCATIONS } from '@/constants'
import type { Address, AddressApiItem, AddressFormData } from '@/types/api'

const createEmptyForm = (isFirst: boolean = false): AddressFormData => ({
  receiver: '',
  contact: '',
  provinceCode: '',
  cityCode: '',
  countyCode: '',
  address: CAMPUS_LOCATIONS[0],
  fullLocation: `校园代收点 ${CAMPUS_LOCATIONS[0]}`,
  isDefault: isFirst ? 1 : 0,
})

const normalizeAddress = (item: AddressApiItem): Address => ({
  id: item.id || item._id || '',
  receiver: item.receiver,
  contact: item.contact,
  provinceCode: item.provinceCode,
  cityCode: item.cityCode,
  countyCode: item.countyCode,
  address: item.address,
  isDefault: item.isDefault,
  fullLocation: item.fullLocation,
})

export function useAddress() {
  const addressList = ref<Address[]>([])
  const loading = ref(false)
  const saveLoading = ref(false)

  const dialogVisible = ref(false)
  const isEditMode = ref(false)
  const editingId = ref('')
  const fullLocationTouched = ref(false)
  const addressForm = ref<AddressFormData>(createEmptyForm())

  const hasAddress = computed(() => addressList.value.length > 0)

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

  const selectQuickLocation = (location: string): void => {
    addressForm.value.address = location
    updateFullLocationByAddress(location)
  }

  const resetForm = (): void => {
    fullLocationTouched.value = false
    isEditMode.value = false
    editingId.value = ''
    addressForm.value = createEmptyForm(addressList.value.length === 0)
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

  const validateForm = (): { valid: boolean; payload?: AddressFormData } => {
    const receiver = addressForm.value.receiver.trim()
    const contact = addressForm.value.contact.trim()
    const address = addressForm.value.address.trim()
    const fullLocation = addressForm.value.fullLocation?.trim() || ''

    if (!receiver || !contact || !address) {
      ElMessage.warning('收货人、手机号和收货点不能为空')
      return { valid: false }
    }
    if (!/^1[3-9]\d{9}$/.test(contact)) {
      ElMessage.warning('请填写正确的11位手机号')
      return { valid: false }
    }
    if (!fullLocation) {
      ElMessage.warning('请补充完整地址')
      return { valid: false }
    }

    return {
      valid: true,
      payload: {
        receiver,
        contact,
        provinceCode: addressForm.value.provinceCode || '',
        cityCode: addressForm.value.cityCode || '',
        countyCode: addressForm.value.countyCode || '',
        address,
        fullLocation,
        isDefault: addressForm.value.isDefault || 0,
      },
    }
  }

  const saveAddress = async (onCreated?: (id: string) => void): Promise<boolean> => {
    const { valid, payload } = validateForm()
    if (!valid || !payload) return false

    saveLoading.value = true
    try {
      if (isEditMode.value && editingId.value) {
        await updateAddressAPI(editingId.value, payload)
        ElMessage.success('地址更新成功')
      } else {
        const created = await createAddressAPI(payload)
        ElMessage.success('地址新增成功')
        const createdId = created.id || created._id
        if (createdId) {
          onCreated?.(createdId)
        }
      }
      dialogVisible.value = false
      await fetchAddressList()
      return true
    } catch (error) {
      console.error('保存地址失败:', error)
      ElMessage.error('地址保存失败，请稍后重试')
      return false
    } finally {
      saveLoading.value = false
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

  const getPickupPointText = (address?: Address): string => {
    if (!address) return '--'
    return (address.address || '').trim() || '未填写收货点'
  }

  const getFullAddressText = (address?: Address): string => {
    if (!address) return '--'
    const fullLocation = (address.fullLocation || '').trim()
    const pickupPoint = (address.address || '').trim()
    if (fullLocation) return fullLocation
    if (pickupPoint) return `校园代收点 ${pickupPoint}`
    return '未填写完整地址'
  }

  return {
    addressList,
    loading,
    saveLoading,
    dialogVisible,
    isEditMode,
    editingId,
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
    getPickupPointText,
    getFullAddressText,
  }
}
