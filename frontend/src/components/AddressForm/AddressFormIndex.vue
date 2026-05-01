<script setup lang="ts">
import { User, Iphone, Location } from '@element-plus/icons-vue'
import { CAMPUS_LOCATIONS } from '@/constants'
import type { AddressFormData } from '@/types/api'

interface Props {
  modelValue: AddressFormData
  fullLocationTouched: boolean
  saveLoading?: boolean
  isEditMode?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  saveLoading: false,
  isEditMode: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: AddressFormData]
  'update:fullLocationTouched': [value: boolean]
  selectQuickLocation: [location: string]
  save: []
  cancel: []
}>()

const updateField = <K extends keyof AddressFormData>(key: K, value: AddressFormData[K]) => {
  emit('update:modelValue', { ...props.modelValue, [key]: value })
}

const onSwitchChange = (val: string | number | boolean) => {
  updateField('isDefault', val as number)
}

const onFullLocationInput = () => {
  emit('update:fullLocationTouched', true)
}

const onSelectQuickLocation = (location: string) => {
  emit('selectQuickLocation', location)
}
</script>

<template>
  <el-form label-width="88px">
    <el-form-item label="收货人">
      <el-input
        :model-value="modelValue.receiver"
        @update:model-value="updateField('receiver', $event)"
        placeholder="请输入收货人姓名"
        :prefix-icon="User"
      />
    </el-form-item>
    <el-form-item label="手机号">
      <el-input
        :model-value="modelValue.contact"
        @update:model-value="updateField('contact', $event)"
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
          :class="{ active: modelValue.address === location }"
          @click="onSelectQuickLocation(location)"
        >
          {{ location.replace('宿舍楼代收点', '') }}
        </button>
      </div>
    </el-form-item>
    <el-form-item label="完整地址">
      <el-input
        :model-value="modelValue.fullLocation"
        @update:model-value="updateField('fullLocation', $event)"
        placeholder="将根据收货点自动填充，可手动修改"
        :prefix-icon="Location"
        @input="onFullLocationInput"
      />
    </el-form-item>
    <el-form-item label="设为默认">
      <el-switch
        :model-value="modelValue.isDefault"
        @update:model-value="onSwitchChange"
        :active-value="1"
        :inactive-value="0"
      />
    </el-form-item>
  </el-form>
  <div class="form-footer">
    <el-button @click="emit('cancel')">取消</el-button>
    <el-button type="primary" :loading="saveLoading" @click="emit('save')">
      {{ isEditMode ? '更新地址' : '保存地址' }}
    </el-button>
  </div>
</template>

<style scoped lang="scss">
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

.form-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 10px;
}
</style>
