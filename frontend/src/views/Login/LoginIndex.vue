<!--
  @file 登录页
  @description 用户登录页面，包含登录表单和表单验证
-->
<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { useRoute } from 'vue-router'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'
import AuthLayout from '@/components/AuthLayout/AuthLayoutIndex.vue'

const userStore = useUserStore()
const route = useRoute()
const formRef = ref<FormInstance>()
const loginLoading = ref(false)

interface LoginForm {
  account: string
  password: string
  agree: boolean
}

const form = ref<LoginForm>({
  account: '',
  password: '',
  agree: false,
})

const rules: FormRules<LoginForm> = {
  account: [{ required: true, message: '学号不能为空', trigger: 'blur' }],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码应该在6~14位之间', trigger: 'blur' },
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        if (value) callback()
        else callback(new Error('请勾选用户协议'))
      },
    },
  ],
}

const doLogin = () => {
  if (loginLoading.value) return
  const { account, password } = form.value
  formRef.value?.validate(async (valid) => {
    if (valid) {
      loginLoading.value = true
      try {
        await userStore.getUserInfo({ account, password })
        ElMessage({ type: 'success', message: '登录成功' })
        const redirect = (route.query.redirect as string) || '/'
        router.replace(redirect)
      } catch (err) {
        console.log('登录出错啦', err)
      } finally {
        loginLoading.value = false
      }
    }
  })
}
</script>

<template>
  <AuthLayout title="账户登录">
    <el-form ref="formRef" :model="form" :rules="rules" status-icon label-position="top">
      <el-form-item label="学号" prop="account">
        <el-input v-model="form.account" placeholder="请输入学号" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入密码"
          show-password
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox size="large" v-model="form.agree">我已同意隐私条款和服务条款</el-checkbox>
      </el-form-item>
      <el-button size="large" class="subBtn" :loading="loginLoading" @click="doLogin"
        >点击登录</el-button
      >
      <div class="auth-link">还没有账号？<RouterLink to="/register">立即注册</RouterLink></div>
    </el-form>
  </AuthLayout>
</template>
