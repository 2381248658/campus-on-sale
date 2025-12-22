<script setup>
// 定义属性，并为校园化重构设置更符合业务的默认值
defineProps({
  // 主标题
  title: {
    type: String,
    default: '学长推荐'
  },
  // 副标题
  subTitle: {
    type: String,
    default: '学长亲测 避坑指南'
  }
})
</script>

<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>
          <span class="title-text">{{ title }}</span>
          <small class="sub-title">{{ subTitle }}</small>
        </h3>
        <div class="right-area">
          <slot name="right" />
        </div>
      </div>
      <div class="main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: $borderRadius;

  .head {
    padding: 40px 0 20px;
    display: flex;
    align-items: center;

    h3 {
      flex: 1;
      font-size: 28px;
      font-weight: 600;
      color: #333;
      height: 35px;
      line-height: 35px;
      position: relative;
      padding-left: 15px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        width: 4px;
        height: 24px;
        background-color: $campusColor;
        border-radius: 2px;
      }

      .sub-title {
        font-size: 15px;
        color: #999;
        margin-left: 15px;
        font-weight: normal;
        vertical-align: middle;
      }
    }

    .right-area {
      font-size: 14px;
    }
  }

  .main-content {
    // 预留内容边距
    min-height: 300px;
  }
}
</style>
