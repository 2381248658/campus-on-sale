<template>
  <footer class="app_footer">
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <div class="dd-wrapper">
            <dd><i class="iconfont icon-zaixiankefu"></i> 在线客服</dd>
            <dd><i class="iconfont icon-wenti"></i> 问题反馈</dd>
          </div>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <div class="dd-wrapper">
            <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
            <dd><i class="iconfont icon-weibo"></i> 官方微博</dd>
          </div>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <div class="dd-wrapper">
            <dd class="qrcode"><i class="iconfont icon-erweima"></i></dd>
            <dd class="download">
              <span>扫描二维码</span>
              <span>立马下载校园惠APP</span>
              <a href="javascript:;">前往下载</a>
            </dd>
          </div>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">
            校园内线：66666
            <small>周一至周日 8:00-22:00 (含节假日)</small>
          </dd>
        </dl>
      </div>
    </div>

    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>学长推荐</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>校内直达</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>售后无忧</span>
          </a>
        </div>

        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">加入我们</a>
            <a href="javascript:;">商家入驻</a>
            <a href="javascript:;">配送规则</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">校园动态</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight © 2025 校园惠-校内综合服务平台 EasyHub</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang='scss'>
@use "sass:color";

.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 20px;

  .contact {
    background: #fff;

    .container {
      padding: 60px 0 40px;
      display: flex;
      justify-content: space-between;
    }

    dl {
      flex: 1;
      height: 190px;
      text-align: center;
      border-right: 1px solid #f2f2f2;
      color: #999;
      display: flex;
      flex-direction: column;
      align-items: center;

      &:last-child {
        border-right: none;
      }
    }

    dt {
      line-height: 1;
      font-size: 18px;
      color: #333;
      margin-bottom: 30px;
    }

    .dd-wrapper {
      display: flex;
      justify-content: center;
      gap: 12px;
    }

    dd {
      width: 92px;
      height: 92px;
      padding-top: 10px;
      border: 1px solid #ededed;
      transition: all 0.3s;
      cursor: pointer;

      .iconfont {
        font-size: 36px;
        display: block;
        color: #666;
        margin-bottom: 5px;
      }

      &:hover {
        border-color: $campusColor;

        .iconfont {
          color: $campusColor;
        }
      }
    }

    .qrcode {
      padding: 7px;

      .iconfont {
        font-size: 60px;
        line-height: 1.2;
      }
    }

    .download {
      width: auto;
      height: auto;
      border: none;
      text-align: left;
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
        color: #999;
        line-height: 1.5;
      }

      a {
        background-color: $campusColor;
        color: #fff;
        padding: 6px 15px;
        border-radius: $borderRadiusSmall;
        margin-top: 5px;
        text-align: center;
        font-size: 13px;

        &:hover {
          background-color: color.adjust($campusColor, $lightness: -10%);
        }
      }
    }

    .hotline {
      font-size: 20px;
      color: #666;
      width: auto;
      border: none;

      small {
        display: block;
        font-size: 14px;
        color: #999;
        margin-top: 15px;
      }
    }
  }

  .extra {
    background-color: #333;
  }

  .slogan {
    height: 178px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-around;

    a {
      color: #fff;
      font-size: 28px;
      transition: all 0.3s;
      display: flex;
      align-items: center;

      i {
        font-size: 50px;
        margin-right: 15px;
        font-weight: 100;
      }

      &:hover {
        color: $campusColor;
        transform: translateY(-3px);
      }
    }
  }

  .copyright {
    padding: 40px 0;
    text-align: center;
    color: #999;
    font-size: 14px;

    p {
      margin-bottom: 15px;
    }

    a {
      color: #999;
      padding: 0 10px;
      border-right: 1px solid #666;

      &:hover {
        color: $campusColor;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
