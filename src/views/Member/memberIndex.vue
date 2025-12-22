<script setup>
</script>

<template>
  <div class="container">
    <div class="campus-member-aside">
      <div class="user-manage">
        <h4>我的账户</h4>
        <div class="links">
          <RouterLink to="/member" exact-active-class="active">个人中心</RouterLink>
        </div>
        <h4>交易管理</h4>
        <div class="links">
          <RouterLink to="/member/order" active-class="active">我的订单</RouterLink>
        </div>
      </div>
    </div>
    <div class="article">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";

.container {
  display: flex;
  padding-top: 20px;
  margin: 0 auto;
  align-items: flex-start;

  .campus-member-aside {
    width: 220px;
    margin-right: 20px;
    border-radius: $borderRadiusSmall;
    background-color: #fff;
    box-shadow: $cardShadow;

    .user-manage {
      h4 {
        font-size: 16px;
        font-weight: 400;
        padding: 20px 52px 5px;
        color: #333;
        border-top: 1px solid #f6f6f6;

        &:first-child {
          border-top: none;
        }
      }

      .links {
        padding: 0 52px 10px;
      }

      a {
        display: block;
        line-height: 1;
        padding: 15px 0;
        font-size: 14px;
        color: #666;
        position: relative;
        transition: color 0.2s;

        &:hover {
          color: $campusColor;
        }

        &.active {
          color: $campusColor;
          font-weight: bold;

          &:before {
            display: block;
          }
        }

        &:before {
          content: '';
          display: none;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          top: 19px;
          left: -16px;
          background-color: $campusColor;
        }
      }
    }
  }

  .article {
    width: 1000px;
    min-height: 600px;
    background-color: #fff;
    border-radius: $borderRadiusSmall;
    box-shadow: $cardShadow;
  }
}
</style>
