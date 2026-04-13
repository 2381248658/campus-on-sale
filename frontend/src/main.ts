/**
 * 职责：创建 Vue 应用实例，挂载全局插件
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 全局自定义插件
import imgLazy from './directives/imgLazy'
import { PluginManager } from './components'

// 根组件 & 路由
import App from './App.vue'
import router from './router'

// Element Plus 样式
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(imgLazy)
app.use(PluginManager)

app.mount('#app')
