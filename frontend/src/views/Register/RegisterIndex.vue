<!--
  @file 注册页
  @description 用户注册页面，包含注册表单和表单验证
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'
import AuthLayout from '@/components/AuthLayout/AuthLayoutIndex.vue'

const userStore = useUserStore()
const formRef = ref<FormInstance>()
const registerLoading = ref(false)

interface RegisterForm {
  account: string
  password: string
  confirmPassword: string
  nickname: string
  agree: boolean
}

const form = ref<RegisterForm>({
  account: '',
  password: '',
  confirmPassword: '',
  nickname: '',
  agree: false,
})

onMounted(() => {
  form.value = { account: '', password: '', confirmPassword: '', nickname: '', agree: false }
  formRef.value?.clearValidate()
})

const validateConfirmPassword = (
  _rule: unknown,
  value: string,
  callback: (err?: Error) => void,
) => {
  if (value !== form.value.password) {
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}

const rules: FormRules<RegisterForm> = {
  account: [
    { required: true, message: '学号不能为空', trigger: 'blur' },
    { min: 4, max: 20, message: '学号长度应在4~20位之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码应该在6~14位之间', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { validator: validateConfirmPassword, trigger: 'blur' },
  ],
  agree: [
    {
      validator: (_rule, value, callback) => {
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选用户协议'))
        }
      },
    },
  ],
}

const doRegister = () => {
  if (registerLoading.value) return
  const { account, password, nickname } = form.value
  formRef.value?.validate(async (valid) => {
    if (valid) {
      registerLoading.value = true
      try {
        await userStore.registerUserInfo({ account, password, nickname: nickname || undefined })
        ElMessage({ type: 'success', message: '注册成功' })
        router.replace({ path: '/' })
      } catch (err) {
        console.log('注册出错啦', err)
      } finally {
        registerLoading.value = false
      }
    }
  })
}
</script>

<template>
  <AuthLayout title="账户注册" section-height="734px">
    <el-form ref="formRef" :model="form" :rules="rules" status-icon label-position="top">
      <el-form-item label="学号" prop="account">
        <el-input v-model="form.account" placeholder="请输入学号" autocomplete="off" />
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input
          v-model="form.nickname"
          placeholder="请输入昵称（选填，默认使用学号）"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          show-password
          autocomplete="new-password"
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input
          v-model="form.confirmPassword"
          type="password"
          placeholder="请再次输入密码"
          show-password
          autocomplete="new-password"
        />
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox size="large" v-model="form.agree"> 我已同意隐私条款和服务条款 </el-checkbox>
      </el-form-item>
      <el-button size="large" class="subBtn" :loading="registerLoading" @click="doRegister"
        >点击注册</el-button
      >
      <div class="auth-link">已有账号？<RouterLink to="/login">去登录</RouterLink></div>
    </el-form>
  </AuthLayout>
</template>
