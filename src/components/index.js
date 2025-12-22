import ViewIndex from './imageView/ViewIndex.vue'
import XyhSku from './XyhSku/SkuIndex.vue'

export const PluginManager = {
  install(app) {
    // 注册全局组件
    app.component('ViewIndex', ViewIndex)
    app.component('SkuIndex', XyhSku)
  },
}
