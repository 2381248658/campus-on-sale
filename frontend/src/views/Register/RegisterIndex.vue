<script setup lang="ts">
import { ref } from 'vue'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const formRef = ref<FormInstance>()

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
  const { account, password, nickname } = form.value
  formRef.value?.validate(async (valid) => {
    if (valid) {
      try {
        await userStore.registerUserInfo({ account, password, nickname: nickname || undefined })
        ElMessage({ type: 'success', message: '注册成功' })
        router.replace({ path: '/' })
      } catch (err) {
        console.log('注册出错啦', err)
      }
    }
  })
}
</script>

<template>
  <div class="register-page">
    <header class="register-header">
      <div class="container">
        <h1 class="logo">
          <RouterLink to="/">EasyHub</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页>>
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>

    <section class="register-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户注册</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="form" :rules="rules" status-icon label-position="top">
              <el-form-item label="学号" prop="account">
                <el-input v-model="form.account" placeholder="请输入学号" />
              </el-form-item>
              <el-form-item label="昵称" prop="nickname">
                <el-input v-model="form.nickname" placeholder="请输入昵称（选填，默认使用学号）" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  v-model="form.password"
                  type="password"
                  placeholder="请输入密码"
                  show-password
                />
              </el-form-item>
              <el-form-item label="确认密码" prop="confirmPassword">
                <el-input
                  v-model="form.confirmPassword"
                  type="password"
                  placeholder="请再次输入密码"
                  show-password
                />
              </el-form-item>
              <el-form-item prop="agree">
                <el-checkbox size="large" v-model="form.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doRegister">点击注册</el-button>
              <div class="to-login">已有账号？<RouterLink to="/login">去登录</RouterLink></div>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <footer class="register-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; compus on sale</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.register-page {
  max-width: 100vw;
  overflow-x: hidden;
}

.register-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(228, 228, 228, 0.5);

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .logo {
    width: 180px;

    a {
      display: block;
      height: 120px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 20px / contain;
      transition: all 0.3s ease;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    transition: all 0.3s ease;

    &:hover {
      color: $campusColor;
      transform: translateX(5px);
    }

    i {
      font-size: 14px;
      color: $campusColor;
      letter-spacing: -5px;
    }
  }
}

.register-section {
  background: url('@/assets/images/login-bg.jpg') no-repeat center / cover;
  height: 734px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10%;

  .wrapper {
    width: 420px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
    }

    nav {
      height: 60px;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      padding: 0 40px;
      align-items: center;
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 22px;
        font-weight: 600;
        position: relative;
        text-align: center;
        color: #333;

        &::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: $campusColor;
          border-radius: 2px;
        }
      }
    }
  }
}

.account-box {
  .form {
    padding: 30px 40px 40px;

    :deep(.el-form) {
      width: 100%;
    }

    :deep(.el-form-item) {
      margin-bottom: 18px;

      &:last-of-type {
        margin-bottom: 24px;
      }

      .el-form-item__label {
        font-size: 15px;
        font-weight: 500;
        color: #333;
        padding-bottom: 4px;
      }
    }

    :deep(.el-input) {
      --el-input-border-color: #e8eaed;
      --el-input-hover-border-color: $campusColor;
      --el-input-focus-border-color: $campusColor;
      --el-input-border-radius: 8px;

      .el-input__wrapper {
        height: 46px;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:focus-within {
          box-shadow: 0 0 0 3px rgba($campusColor, 0.1);
          border-color: $campusColor;
        }
      }

      .el-input__inner {
        height: 46px;
        line-height: 46px;
        font-size: 16px;
      }
    }

    :deep(.el-checkbox) {
      display: flex;
      align-items: center;
      gap: 8px;

      .el-checkbox__label {
        font-size: 14px;
        color: #5f6368;
        white-space: normal;
      }
    }
  }
}

.subBtn {
  background: linear-gradient(
    135deg,
    $campusColor 0%,
    color.adjust($campusColor, $lightness: 10%) 100%
  );
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba($campusColor, 0.3);

  &:hover {
    background: linear-gradient(
      135deg,
      color.adjust($campusColor, $lightness: -5%) 0%,
      $campusColor 100%
    );
    box-shadow: 0 6px 16px rgba($campusColor, 0.4);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
}

.to-login {
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: #999;

  a {
    color: $campusColor;
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
}

.register-footer {
  padding: 40px 0 30px;
  background: rgba(255, 255, 255, 0.95);
  border-top: 1px solid rgba(228, 228, 228, 0.5);

  .container {
    width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }

  p {
    text-align: center;
    color: #6b7280;
    padding-top: 15px;
    font-size: 14px;
    line-height: 1.6;

    a {
      line-height: 1;
      padding: 0 12px;
      color: #6b7280;
      display: inline-block;

      &:hover {
        color: $campusColor;
      }

      ~ a {
        border-left: 1px solid #e5e7eb;
      }
    }

    &:last-of-type {
      color: #9ca3af;
      font-size: 13px;
      margin-top: 10px;
    }
  }
}
</style>
