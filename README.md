# 🛒 校园二手交易平台 (Campus On Sale)

[![Vue 3](https://img.shields.io/badge/Vue-3.5.25-4FC08D?style=for-the-badge&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Element Plus](https://img.shields.io/badge/Element%20Plus-2.12.0-409EFF?style=for-the-badge&logo=element)](https://element-plus.org/)
[![Pinia](https://img.shields.io/badge/Pinia-3.0.4-F7C52A?style=for-the-badge&logo=pinia)](https://pinia.vuejs.org/)

一个基于 Vue 3 + Vite 构建的现代化校园二手交易电商平台，采用前沿的前端技术栈和最佳工程化实践，致力于为校园用户提供优质的二手物品交易体验。
现已使用apifox模拟接口进行简单部署http://121.43.248.176/(开发中)

## 🚀 项目概述

### 项目背景

随着校园经济的快速发展，二手物品交易在大学生群体中变得越来越普遍。本项目旨在构建一个专为校园用户设计的二手交易平台，提供便捷、安全、高效的物品交易服务。

### 项目特色

- ✨ **现代化技术栈**: 采用 Vue 3 Composition API + Vite 构建
- 🎨 **精美UI设计**: 基于 Element Plus 的响应式设计系统
- ⚡ **高性能体验**: 路由懒加载、图片懒加载等性能优化
- 🔧 **工程化实践**: ESLint + Prettier 代码规范，完整的开发工具链
- 📱 **移动端友好**: 响应式布局，支持多终端访问

## 🛠️ 核心技术栈

### 前端框架

- **Vue 3.5.25**: 使用 Composition API 进行响应式开发，提供更好的 TypeScript 支持和性能优化
- **Vite 7.2.4**: 下一代前端构建工具，提供毫秒级热重载和优化的生产构建
- **Vue Router 4.6.3**: Vue 3 官方路由库，支持路由懒加载和嵌套路由

### UI 组件库

- **Element Plus 2.12.0**: 基于 Vue 3 的企业级组件库，提供 80+ 高质量组件
- **SCSS**: 强大的 CSS 预处理器，支持变量、嵌套、混合器等高级特性
- **自定义设计系统**: 统一的色彩体系、字体规范和组件样式

### 状态管理

- **Pinia 3.0.4**: Vue 3 官方推荐的状态管理库，轻量且类型安全
- **pinia-plugin-persistedstate**: 自动处理状态持久化，支持 localStorage/sessionStorage

### HTTP 客户端

- **Axios 1.13.2**: 基于 Promise 的 HTTP 库，支持请求/响应拦截器
- **拦截器模式**: 统一的请求处理、错误处理和数据转换

### 开发工具链

- **ESLint 9.39.1**: JavaScript/TypeScript 代码检查工具
- **Prettier 3.6.2**: 代码格式化工具
- **MockJS 1.1.0**: 前后端分离开发的数据模拟工具
- **自动导入插件**: Element Plus 组件和 API 的智能按需导入

## 🎯 核心功能模块

### 1. 用户系统

- **登录注册**: 支持账号密码登录，集成 JWT Token 认证
- **个人中心**: 用户信息管理、订单历史查看、账户设置
- **权限控制**: 基于登录状态的页面访问控制和路由守卫

### 2. 商品展示系统

- **首页轮播**: 精美 banner 展示，自动播放和手动切换
- **商品分类**: 多级分类导航，支持动态路由切换
- **商品列表**: 响应式网格布局，支持筛选和排序
- **商品详情**: 丰富的商品信息展示，包含 SKU 选择器

### 3. 购物车系统

- **商品添加**: 支持多规格商品的 SKU 选择
- **数量控制**: 实时数量调整，库存校验和价格计算
- **批量操作**: 全选/取消、批量删除功能
- **状态同步**: 本地存储与服务端数据智能合并

### 4. 订单结算系统

- **订单确认**: 购物车商品确认和地址选择
- **支付集成**: 多种支付方式支持
- **订单状态**: 实时订单状态跟踪和管理

## 🔧 技术亮点

### 1. 自定义 SKU 选择器组件

实现了复杂商品规格选择的完整解决方案：

```javascript
// 基于幂集算法的规格组合逻辑
const getPowerSet = (specs) => {
  // 生成所有可能的规格组合
  // 实现高效的库存校验和禁用状态管理
}

// 动态更新规格状态
const updateDisabledStatus = (specs, pathMap) => {
  // 实时计算可选择规格
  // 提供优秀的用户交互体验
}
```

**技术特色**：

- 使用幂集算法处理复杂的规格组合逻辑
- 路径字典优化，提升性能表现
- 响应式状态更新，支持多规格互斥选择

### 2. 图片懒加载指令

基于 Intersection Observer API 的高性能图片加载方案：

```javascript
// 智能图片加载策略
app.directive('img-lazy', {
  mounted(el, binding) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 进入视口时加载图片
          el.src = binding.value
          observer.unobserve(el) // 停止观察
        }
      })
    })
    observer.observe(el)
  }
})
```

**性能优化**：

- 减少初始页面加载流量
- 提升首屏渲染速度
- 完善的容错处理机制

### 3. Composition Function 设计模式

将业务逻辑封装为可复用的组合函数：

```javascript
// 分类页面业务逻辑封装
export function useCategory() {
  const categoryData = ref({ children: [], name: '' })

  const getCategory = async (id) => {
    try {
      const res = await getCategoryAPI(id)
      categoryData.value = res.data || res
    } catch (err) {
      // 错误处理和数据重置
      categoryData.value = { children: [], name: '加载失败' }
    }
  }

  // 路由更新监听
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return { categoryData, getCategory }
}
```

**设计优势**：

- 代码复用和逻辑分离
- 更好的 TypeScript 支持
- 单元测试友好

### 4. HTTP 拦截器架构

统一的请求/响应处理机制：

```javascript
const httpInstance = axios.create({
  baseURL: '/api/campus/v1',
  timeout: 10000,
})

// 响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    const { code, msg, result } = response.data
    if (code === '1' || code === 200) {
      return result // 直接返回业务数据
    }
    ElMessage.error(msg || '服务暂不可用')
    return Promise.reject(new Error(msg))
  },
  (error) => {
    ElMessage.error(error.response?.data?.message || '网络异常')
    return Promise.reject(error)
  }
)
```

**架构特点**：

- 数据脱壳处理
- 统一的错误提示
- 请求状态管理

## ⚡ 性能优化实践

### 构建层面优化

- **路由懒加载**: 页面组件按需加载，减少初始包体积
- **组件自动导入**: Element Plus 组件智能按需导入
- **Tree Shaking**: 自动移除未使用代码
- **代码分割**: 基于路由的智能代码分割

### 运行时优化

- **图片懒加载**: 减少首屏图片加载压力
- **防抖处理**: 购物车数量变化防抖优化
- **内存管理**: 及时清理观察者和事件监听器
- **缓存策略**: 合理使用浏览器缓存

### 用户体验优化

- **骨架屏**: 数据加载过程中的友好提示
- **错误边界**: 网络异常时的优雅降级
- **加载状态**: 各交互环节的反馈提示
- **响应式设计**: 多设备适配和触摸优化

## 🏃‍♂️ 快速开始

### 环境要求

- Node.js: ^20.19.0 || >=22.12.0
- 包管理器: npm/yarn/pnpm
- 推荐IDE: VS Code + Vue (Official) 插件

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 代码检查

```bash
npm run lint
```

### 代码格式化

```bash
npm run format
```

### 生产环境构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📊 项目特色

### 🎨 设计系统

- **统一色彩**: 校园主题色彩体系
- **响应式布局**: 支持桌面端、平板、手机等多终端
- **动画效果**: 流畅的过渡动画和交互动画
- **无障碍设计**: 键盘导航和屏幕阅读器支持

### 🔍 SEO 优化

- **页面标题**: 动态页面标题管理
- **Meta 标签**: 完善的页面元信息
- **结构化数据**: 商品 Schema 标记
- **路由优化**: 语义化 URL 设计

### 📱 移动端适配

- **触控优化**: 滑动操作和手势识别
- **自适应图片**: 根据设备像素密度加载合适图片
- **离线支持**: Service Worker 缓存策略
- **PWA 特性**: 可安装的 Web 应用体验

## 💡 技术能力展示

### 前端架构设计能力

- ✅ 现代化前端技术栈选型和应用
- ✅ 组件化架构设计和模块化开发
- ✅ 状态管理最佳实践
- ✅ 路由设计和页面组织

### 性能优化能力

- ✅ 构建工具优化和打包策略
- ✅ 运行时性能优化技巧
- ✅ 用户体验优化实践
- ✅ 监控和分析能力

### 业务逻辑实现能力

- ✅ 复杂 SKU 规格算法实现
- ✅ 购物车状态同步逻辑
- ✅ 用户认证和权限管理
- ✅ 数据持久化和缓存策略

### 工程化能力

- ✅ 开发工具链配置
- ✅ 代码质量保障体系
- ✅ 团队协作规范
- ✅ 项目文档编写

## 🚀 部署说明

### 开发环境

- 使用 Vite 开发服务器
- 支持热重载和模块热替换
- 集成 Mock 数据服务

### 生产环境

- 静态资源优化和压缩
- CDN 资源分发
- 服务端渲染支持（可选）

### Docker 部署

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
```

## 📈 项目展望

### 短期目标

- [ ] 完善移动端适配
- [ ] 增加商品搜索功能
- [ ] 优化图片上传体验
- [ ] 添加商品评价系统

### 长期规划

- [ ] 集成实时聊天功能
- [ ] 实现校园圈子社区
- [ ] 添加 AI 智能推荐
- [ ] 开发小程序版本
⭐ 如果这个项目对你有帮助，请给它一个 star！

**最后更新时间**: 2025年1月
