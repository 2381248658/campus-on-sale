<script setup>
import { ref } from 'vue';

import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus';
import router from '@/router';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore()
const formRef = ref(null)
const form = ref({
  account: '',
  password: '',
  agree: false
})

const rules = {
  account: [
    { required: true, message: '学号不能为空', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 14, message: '密码应该在6~14位之间', trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选用户协议'))
        }
      }
    }
  ]
}

const doLogin = () => {
  const { account, password } = form.value
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        // 这里的调用会发送 POST /login
        // 只有当你手动输入 admin 和 666666 时，Mock 才会返回成功
        await userStore.getUserInfo({ account, password })
        ElMessage({ type: 'success', message: '登录成功' })
        router.replace({ path: '/' })
      } catch(err) {
        // 捕获 Mock 返回的 400/500 等错误
        console.log('登录出错啦',err);
      }
    }
  })
}
</script>

<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
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
    <section class="login-section">
      <div class="container">
        <div class="wrapper">
          <nav>
            <a href="javascript:;">账户登录</a>
          </nav>
          <div class="account-box">
            <div class="form">
              <el-form ref="formRef" :model="form" :rules="rules" label-position="right" label-width="100px" status-icon>
                <el-form-item label="学号" prop="account">
                  <el-input v-model="form.account" type="text" placeholder="请输入学号" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input v-model="form.password" type="password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item prop="agree" label-width="22px">
                  <el-checkbox size="large" v-model="form.agree">
                    我已同意隐私条款和服务条款
                  </el-checkbox>
                </el-form-item>
                <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
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

<style scoped lang='scss'>
@use "sass:color";

.login-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(228, 228, 228, 0.5);
  transition: all 0.3s ease;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .logo {
    width: 180px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    a {
      display: block;
      height: 120px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 20px / contain;
      transition: all 0.3s ease;
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

.login-section {
  background: url('@/assets/images/login-bg.jpg') no-repeat center / cover;
  min-height: 634px; /* 488px * 1.3 */
  padding: 78px 0; /* 60px * 1.3 */
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .container {
    width: 100%;
  }

  .wrapper {
    width: 546px; /* 420px * 1.3 */
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    margin-left: auto;
    margin-right: 15%;
    box-shadow: 0 13px 52px rgba(0, 0, 0, 0.15); /* 10px * 1.3, 40px * 1.3 */
    border-radius: 15.6px; /* 12px * 1.3 */
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
    }

    nav {
      font-size: 18.2px; /* 14px * 1.3 */
      height: 78px; /* 60px * 1.3 */
      border-bottom: 1.3px solid #f8f9fa; /* 1px * 1.3 */
      display: flex;
      padding: 0 52px; /* 40px * 1.3 */
      align-items: center;
      background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 28.6px; /* 22px * 1.3 */
        font-weight: 600;
        position: relative;
        text-align: center;
        color: #333;
        transition: color 0.3s ease;

        &::after {
          content: '';
          position: absolute;
          bottom: -26px; /* -20px * 1.3 */
          left: 50%;
          transform: translateX(-50%);
          width: 52px; /* 40px * 1.3 */
          height: 3.9px; /* 3px * 1.3 */
          background: $campusColor;
          border-radius: 2.6px; /* 2px * 1.3 */
        }

        &:hover {
          color: $campusColor;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    justify-content: center;

    .wrapper {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
  }
}

.login-footer {
  padding: 40px 0 30px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(228, 228, 228, 0.5);

  .container {
    max-width: 1200px;
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
      transition: all 0.3s ease;

      &:hover {
        color: $campusColor;
        transform: translateY(-2px);
      }

      ~a {
        border-left: 1px solid #e5e7eb;
      }
    }

    &:last-of-type {
      color: #9ca3af;
      font-size: 13px;
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px 20px;

    p {
      a {
        padding: 0 8px;
        font-size: 13px;

        ~a {
          border-left: 1px solid #eee;
        }
      }
    }
  }
}

.account-box {
  .form {
    padding: 58.5px; /* 45px * 1.3 */

    :deep(.el-form) {
      width: 100%;
    }

    :deep(.el-form-item) {
      margin-bottom: 36.4px; /* 28px * 1.3 */

      &:last-of-type {
        margin-bottom: 46.8px; /* 36px * 1.3 */
      }

      label {
        font-size: 19.5px; /* 15px * 1.3 */
        font-weight: 500;
        color: #333;
      }
    }

    :deep(.el-input) {
      --el-input-border-color: #e8eaed;
      --el-input-hover-border-color: $campusColor;
      --el-input-focus-border-color: $campusColor;
      --el-input-border-radius: 10.4px; /* 8px * 1.3 */
      --el-input-transition: all 0.3s ease;

      .el-input__wrapper {
        height: 65px; /* 50px * 1.3 */
        border-radius: 10.4px; /* 8px * 1.3 */
        transition: all 0.3s ease;

        &:hover {
          box-shadow: 0 2.6px 10.4px rgba(0, 0, 0, 0.1); /* 2px * 1.3, 8px * 1.3 */
        }

        &:focus-within {
          box-shadow: 0 0 0 3.9px rgba($campusColor, 0.1); /* 3px * 1.3 */
          border-color: $campusColor;
        }
      }

      .el-input__inner {
        height: 65px; /* 50px * 1.3 */
        line-height: 65px;
        font-size: 20.8px; /* 16px * 1.3 */
        padding: 0 20.8px; /* 16px * 1.3 */
      }

      .el-input__icon {
        color: #9aa0a6;
        font-size: 20.8px; /* 16px * 1.3 */

        &:hover {
          color: $campusColor;
        }
      }
    }

    :deep(.el-checkbox) {
      display: flex;
      align-items: center;
      gap: 10.4px; /* 8px * 1.3 */

      .el-checkbox__label {
        font-size: 18.2px; /* 14px * 1.3 */
        color: #5f6368;
        line-height: 1.5;
      }

      .el-checkbox__input {
        .el-checkbox__inner {
          width: 23.4px; /* 18px * 1.3 */
          height: 23.4px; /* 18px * 1.3 */
          border-radius: 5.2px; /* 4px * 1.3 */
          border: 2.6px solid #dadce0; /* 2px * 1.3 */
          transition: all 0.3s ease;

          &:hover {
            border-color: $campusColor;
          }

          &::after {
            left: 7.8px; /* 6px * 1.3 */
            width: 9px; /* 7px * 1.3 (近似) */
            height: 14px; /* 11px * 1.3 (近似) */
          }
        }

        &.is-checked .el-checkbox__inner {
          background-color: $campusColor;
          border-color: $campusColor;
          box-shadow: 0 2.6px 5.2px rgba($campusColor, 0.3); /* 2px * 1.3, 4px * 1.3 */
        }
      }
    }
  }

  .action {
    padding: 0 58.5px 52px; /* 45px * 1.3, 40px * 1.3 */
    display: flex;
    justify-content: center;
    align-items: center;

    .url {
      display: flex;
      gap: 26px; /* 20px * 1.3 */

      a {
        color: #6b7280;
        font-size: 18.2px; /* 14px * 1.3 */
        transition: all 0.3s ease;
        text-decoration: none;

        &:hover {
          color: $campusColor;
          text-decoration: underline;
        }
      }
    }
  }
}

.subBtn {
  background: linear-gradient(135deg, $campusColor 0%, color.adjust($campusColor, $lightness: 10%) 100%);
  width: 100%;
  height: 65px; /* 50px * 1.3 */
  font-size: 20.8px; /* 16px * 1.3 */
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 10.4px; /* 8px * 1.3 */
  transition: all 0.3s ease;
  box-shadow: 0 5.2px 15.6px rgba($campusColor, 0.3); /* 4px * 1.3, 12px * 1.3 */

  &:hover {
    background: linear-gradient(135deg, color.adjust($campusColor, $lightness: -5%) 0%, $campusColor 100%);
    box-shadow: 0 7.8px 20.8px rgba($campusColor, 0.4); /* 6px * 1.3, 16px * 1.3 */
    transform: translateY(-1.3px); /* -1px * 1.3 */
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2.6px 10.4px rgba($campusColor, 0.3); /* 2px * 1.3, 8px * 1.3 */
  }

  &:disabled {
    background: #e5e7eb;
    color: #9ca3af;
    box-shadow: none;
    transform: none;
  }
}
</style>
