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

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(imgLazy)
app.use(PluginManager)

app.config.errorHandler = (err, instance, info) => {
  console.error('[全局异常]', err)
  console.error('[异常组件]', instance)
  console.error('[异常信息]', info)
}

app.mount('#app')
