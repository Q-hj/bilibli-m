import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入WindiCSS插件
import WindiCSS from 'vite-plugin-windicss'
// 引入文件
const path = require('path')
// 使用自动导入组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // 添加 @
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "@/style/lessvar.less";',
      },
    },
  },
  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 8080, // 端口号
    // open: true, // 自动打开浏览器
    cors: true, // 跨域设置允许
    strictPort: true, // 如果端口已占用直接退出
    hmr: true, //
    // 接口代理
    proxy: {
      '/api': {
        // 本地 8000 前端代码的接口 代理到 8888 的服务端口
        target: 'http://localhost:8888/',
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace('/api/', '/'),
      },
    },
  },
})
