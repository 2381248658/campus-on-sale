<!--
  @file 登录页
  @description 用户登录页面，包含登录表单和表单验证
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
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

onMounted(() => {
  form.value = { account: '', password: '', agree: false }
  formRef.value?.clearValidate()
})

const rules: FormRules<LoginForm> = {
  account: [{ required: true, message: '学号不能为空', trigger: ['blur', 'change'] }],
  password: [
    { required: true, message: '密码不能为空', trigger: ['blur', 'change'] },
    { min: 6, max: 14, message: '密码应该在6~14位之间', trigger: ['blur', 'change'] },
  ],
  agree: [
    {
      validator: (_rule, value, callback) => {
        if (value) callback()
        else callback(new Error('请勾选用户协议'))
      },
    },
  ],
}

const doLogin = () => {
  if (loginLoading.value) return
  if (!form.value.agree) {
    ElMessage.warning('请先勾选用户协议')
    return
  }
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
        console.error('登录失败:', err)
        ElMessage.error('登录失败，请检查学号和密码是否正确')
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
          autocomplete="new-password"
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

<style scoped lang="scss">
@use '@/styles/var.scss' as v;
@use '@/styles/mixins.scss' as *;

/* 登录表单增强样式 */
:deep(.el-form) {
  animation: v.$animationSlideInUp;
}

:deep(.el-form-item) {
  &:hover {
    :deep(.el-input__wrapper) {
      border-color: v.$campusColor;
    }
  }
}

/* 输入框焦点增强 */
:deep(.el-input__wrapper) {
  @include input-focus-state();
}

/* 按钮加载状态 */
:deep(.subBtn.is-loading) {
  opacity: 0.8;
  cursor: not-allowed;
}

/* 复选框样式优化 */
:deep(.el-checkbox__input.is-checked) {
  .el-checkbox__inner {
    background-color: v.$campusColor;
    border-color: v.$campusColor;
  }
}

/* 表单验证错误提示优化 */
:deep(.el-form-item__error) {
  color: v.$priceColor;
  font-size: v.$fontSizeXs;
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}
</style>
