import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// 导入 Mock 插件
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    vue(),
    // 部署上线必须关闭
    vueDevTools(),

    // 自动加载 mock
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
      prodEnabled: false,//生产环境通常关闭（除非没有真实后端且需展示 Demo）
      watchFiles: true,
      logger: true,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    ElementPlus({
      useSource: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/var.scss" as *;
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/common.scss" as *;
        `,
      },
    },
  },
})
