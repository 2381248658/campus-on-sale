/**
 * 组件统一注册入口
 * 职责：
 * 1. 集中导出所有全局组件
 * 2. 提供 Vue 插件安装方法，支持 app.use() 注册
 */

import type { App } from 'vue'
import ViewIndex from './imageView/ViewIndex.vue'
import XyhSku from './XyhSku/SkuIndex.vue'

/** 组件插件管理器 */
export const PluginManager = {
  /**
   * 安装组件插件
   * @param app - Vue 应用实例
   */
  install(app: App) {
    app.component('ViewIndex', ViewIndex)
    app.component('SkuIndex', XyhSku)
  },
}
