<!--
  @file 认证页面共享布局
  @description 登录/注册页面的公共布局（头部、表单卡片、底部）
-->
<script setup lang="ts">
/**
 * @props title - 表单卡片导航标题（如"账户登录"、"账户注册"）
 * @props sectionHeight - 表单区域高度（默认634px）
 * @slots default - 表单内容区域
 * @slots footer-link - 表单底部链接区域（如"还没有账号？立即注册"）
 */
defineProps<{
  title: string
  sectionHeight?: string
}>()
</script>

<template>
  <div class="auth-page">
    <header class="auth-header">
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

    <section class="auth-section" :style="{ height: sectionHeight || '634px' }">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">{{ title }}</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <slot />
          </div>
        </div>
      </div>
    </section>

    <footer class="auth-footer">
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

.auth-page {
  max-width: 100vw;
  overflow-x: hidden;
}

.auth-header {
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

.auth-section {
  background: url('@/assets/images/login-bg.jpg') no-repeat center / cover;
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
    padding: 35px 40px 45px;

    :deep(.el-form) {
      width: 100%;
    }

    :deep(.el-form-item) {
      margin-bottom: 22px;

      &:last-of-type {
        margin-bottom: 30px;
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
        height: 50px;
        border-radius: 8px;
        transition: all 0.3s ease;

        &:focus-within {
          box-shadow: 0 0 0 3px rgba($campusColor, 0.1);
          border-color: $campusColor;
        }
      }

      .el-input__inner {
        height: 50px;
        line-height: 50px;
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

    :deep(.subBtn) {
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

    :deep(.auth-link) {
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
  }
}

.auth-footer {
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
