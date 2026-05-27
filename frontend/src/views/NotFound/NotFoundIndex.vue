<!--
  @file 404错误页面
  @description 页面未找到时的错误提示页面，包含404提示、错误说明和返回首页按钮
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.replace('/')
}
</script>

<template>
  <div class="not-found-page">
    <div class="container">
      <div class="error-content">
        <div class="error-number">
          <span class="digit">4</span>
          <span class="digit-center">0</span>
          <span class="digit">4</span>
        </div>

        <h1 class="error-title">页面未找到</h1>

        <p class="error-description">
          抱歉，您访问的页面不存在或已被移除。<br />
          请检查网址是否正确，或点击下方按钮返回首页。
        </p>

        <div class="error-actions">
          <el-button type="primary" size="large" class="home-btn" @click="goHome">
            <i class="iconfont icon-home"></i>
            返回首页
          </el-button>
        </div>

        <div class="error-tips">
          <p>如果您认为这是一个错误，请联系我😄😄😄。</p>
          <p class="contact-info">
            <span>我的邮箱：2381248658@qq.com</span>
            <span>工作时间：周一至周五 9:00-18:00</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:color';

.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, $bgColor 0%, #ffffff 100%);
  animation: fadeIn 0.3s ease-in;

  .container {
    width: 100%;
    max-width: 800px;
    padding: 40px 20px;
  }

  .error-content {
    text-align: center;
    background: #fff;
    padding: 60px 40px;
    border-radius: $borderRadiusLarge;
    box-shadow: $cardShadow;
    animation: slideUp 0.5s ease-out;
  }

  .error-number {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    animation: bounceIn 0.8s ease-out;

    .digit {
      font-size: 120px;
      font-weight: 700;
      color: $campusColor;
      line-height: 1;
      display: inline-block;
      animation: digitFloat 2s ease-in-out infinite;

      &:first-child {
        animation-delay: 0s;
      }

      &:last-child {
        animation-delay: 0.2s;
      }
    }

    .digit-center {
      font-size: 120px;
      font-weight: 700;
      color: $priceColor;
      line-height: 1;
      display: inline-block;
      position: relative;
      animation: digitRotate 4s ease-in-out infinite;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        background: rgba($priceColor, 0.1);
        border-radius: $borderRadiusFull;
        animation: pulse 2s ease-in-out infinite;
      }
    }
  }

  .error-title {
    font-size: 32px;
    font-weight: 600;
    color: $textColor;
    margin-bottom: 20px;
    animation: fadeInUp 0.8s ease-out 0.3s both;
  }

  .error-description {
    font-size: 16px;
    color: $subTextColor;
    line-height: 1.8;
    margin-bottom: 40px;
    animation: fadeInUp 0.8s ease-out 0.5s both;
  }

  .error-actions {
    margin-bottom: 40px;
    animation: fadeInUp 0.8s ease-out 0.7s both;

    .home-btn {
      width: 200px;
      height: 50px;
      font-size: 16px;
      font-weight: 600;
      background: linear-gradient(
        135deg,
        $campusColor 0%,
        color.adjust($campusColor, $lightness: 10%) 100%
      );
      border: none;
      border-radius: $borderRadius;
      box-shadow: 0 4px 12px rgba($campusColor, 0.3);
      transition: all $transitionDuration $transitionEasing;

      .iconfont {
        font-size: 18px;
        margin-right: 8px;
      }

      &:hover {
        background: linear-gradient(
          135deg,
          color.adjust($campusColor, $lightness: -5%) 0%,
          $campusColor 100%
        );
        box-shadow: 0 6px 16px rgba($campusColor, 0.4);
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .error-tips {
    padding-top: 30px;
    border-top: 1px solid $lineColor;
    animation: fadeInUp 0.8s ease-out 0.9s both;

    p {
      font-size: 14px;
      color: $insTextColor;
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .contact-info {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;

      span {
        font-size: 13px;
        color: $insTextColor;

        &::before {
          content: '•';
          color: $campusColor;
          margin-right: 6px;
        }
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes digitFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes digitRotate {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  75% {
    transform: rotate(5deg);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.6;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
