<!--
  @file 认证页面共享布局
  @description 登录/注册页面的公共布局（头部、表单卡片、底部）
-->
<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="auth-page">
    <header class="auth-header">
      <div class="container">
        <h1 class="logo">
          <RouterLink to="/">Campus on Sale</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>

    <section class="auth-section">
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
        <p>CopyRight © 2026 Campus on Sale</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.auth-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.auth-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(228, 228, 228, 0.5);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    height: 80px;
  }

  .logo {
    a {
      display: block;
      width: 140px;
      height: 60px;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center / contain;
      transition: all 0.3s ease;
    }

    &:hover a {
      transform: scale(1.03);
    }
  }

  .entry {
    font-size: 14px;
    color: #666;
    transition: all 0.3s ease;

    &:hover {
      color: $campusColor;
    }

    i {
      font-size: 12px;
      color: $campusColor;
      letter-spacing: -4px;
    }
  }
}

.auth-section {
  flex: 1;
  background: url('@/assets/images/login-bg.jpg') no-repeat center / cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 40px 10%;

  .wrapper {
    width: 400px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border-radius: $borderRadiusLarge;
    overflow: hidden;

    nav {
      height: 50px;
      border-bottom: 1px solid $lineColor;
      display: flex;
      padding: 0 30px;
      align-items: center;
      background: linear-gradient(135deg, $bgColor 0%, #ffffff 100%);

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        font-weight: 600;
        position: relative;
        text-align: center;
        color: #333;

        &::after {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
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
    padding: 28px 30px 32px;

    :deep(.el-form) {
      width: 100%;
    }

    :deep(.el-form-item) {
      margin-bottom: 18px;

      .el-form-item__label {
        font-size: 14px;
        font-weight: 500;
        color: #333;
        padding-bottom: 2px;
      }
    }

    :deep(.el-input) {
      --el-input-border-color: $borderColor;
      --el-input-hover-border-color: $campusColor;
      --el-input-focus-border-color: $campusColor;
      --el-input-border-radius: $borderRadius;

      .el-input__wrapper {
        height: 44px;
        border-radius: $borderRadius;
        transition: all 0.3s ease;

        &:focus-within {
          box-shadow: 0 0 0 3px rgba($campusColor, 0.1);
          border-color: $campusColor;
        }
      }

      .el-input__inner {
        height: 44px;
        line-height: 44px;
        font-size: 15px;
      }
    }

    :deep(.el-checkbox) {
      display: flex;
      align-items: center;
      gap: 6px;

      .el-checkbox__label {
        font-size: 13px;
        color: $subTextColor;
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
      height: 44px;
      font-size: 15px;
      font-weight: 600;
      color: #fff;
      border: none;
      border-radius: $borderRadius;
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
      margin-top: 14px;
      font-size: 13px;
      color: $subTextColor;

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
  padding: 24px 0;
  background: rgba(255, 255, 255, 0.95);
  border-top: 1px solid rgba(228, 228, 228, 0.5);

  .container {
    width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }

  p {
    text-align: center;
    color: $subTextColor;
    padding-top: 10px;
    font-size: 13px;
    line-height: 1.5;

    a {
      line-height: 1;
      padding: 0 10px;
      color: $subTextColor;
      display: inline-block;

      &:hover {
        color: $campusColor;
      }

      ~ a {
        border-left: 1px solid #e5e7eb;
      }
    }

    &:last-of-type {
      color: $insTextColor;
      font-size: 12px;
      margin-top: 6px;
    }
  }
}
</style>
