import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
// 导入 Mock 插件
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    vue(),
    // 自动加载 mock
    viteMockServe({
      mockPath: 'mock',
      // localEnabled: true,
      // prodEnabled: false,//生产环境通常关闭（除非没有真实后端且需展示 Demo）
      // watchFiles: true,
      // logger: true,
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
  // 👇 新增：服务器配置（修改端口）
  server: {
    port: 8080, // 自定义端口，替换默认5173
    host: '0.0.0.0', // 允许局域网访问
    strictPort: true, // 端口被占用时直接报错，不自动切换端口
    open: true, // 启动项目后自动打开浏览器
  },
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
