/**
 * @file 应用入口
 * @description 创建Vue应用实例，注册全局插件和指令
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import imgLazy from './directives/imgLazy'
import { PluginManager } from './components'
import App from './App.vue'
import router from './router'

// 创建Vue应用实例
const app = createApp(App)

// 创建Pinia状态管理并启用持久化插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 注册全局插件
app.use(pinia) // 状态管理
app.use(router) // 路由
app.use(imgLazy) // 图片懒加载指令
app.use(PluginManager) // 全局组件

// 挂载应用
app.mount('#app')
