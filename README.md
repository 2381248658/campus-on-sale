#                               校园惠 Campus On Sale

<p align="center">
  <strong>面向校园场景的现代化二手交易平台 · 前端工程化实践</strong>
</p>

<p align="center">
  <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js" alt="Vue"></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite" alt="Vite"></a>
  <a href="https://element-plus.org/"><img src="https://img.shields.io/badge/Element_Plus-2.12-409EFF?style=flat-square&logo=element" alt="Element Plus"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript" alt="TypeScript"></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-5.2-000000?style=flat-square&logo=express" alt="Express"></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-9.4-47A248?style=flat-square&logo=mongodb" alt="MongoDB"></a>
</p>

<p align="center">
  <a href="https://router.vuejs.org/"><img src="https://img.shields.io/badge/Vue_Router-4.6-42b883?style=flat-square&logo=vue.js" alt="Vue Router"></a>
  <a href="https://pinia.vuejs.org/"><img src="https://img.shields.io/badge/Pinia-3.0-ffd859?style=flat-square&logo=pinia" alt="Pinia"></a>
  <a href="https://sass-lang.com/"><img src="https://img.shields.io/badge/SCSS-1.94-CC6699?style=flat-square&logo=sass" alt="SCSS"></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-9-4B32C3?style=flat-square&logo=eslint" alt="ESLint"></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Prettier-3.6-F7B93E?style=flat-square&logo=prettier" alt="Prettier"></a>
  <a href="https://axios-http.com/"><img src="https://img.shields.io/badge/Axios-1.13-5A29E4?style=flat-square&logo=axios" alt="Axios"></a>
</p>

<p align="center">
  <a href="./docs/接口.md">📝 接口文档</a>
</p>

---

## 📖 项目简介

> **校园惠** 是一套前后端分离的校园二手电商应用。前端以 **Vue 3 Composition API + TypeScript + Vite** 构建，在 `router` / `stores` / `composables` / `components` 分层下完成商品浏览、购物车与订单闭环；后端以 Express + MongoDB 提供 RESTful API。

> 🔥 **在线预览**：[点击访问校园惠 Demo](https://emoa.tech) 

---

## ✨ 核心功能与前端技术亮点

### 业务功能

| 模块     | 能力说明                                      |
| :------- | :-------------------------------------------- |
| 用户系统 | 注册登录（JWT）、个人信息、地址管理、订单历史 |
| 商品系统 | 首页轮播、分类导航、列表筛选、详情与放大镜预览 |
| 购物车   | 添加删除、数量调整、批量操作、本地持久化      |
| 订单系统 | 订单确认、地址选择、状态管理                  |

### 前端工程亮点

> 以下每一项均可在 `frontend/src/` 源码中找到对应实现。

#### 1. 路由与权限控制

- **受保护路由白名单**：`constants/index.ts` 中 `PROTECTED_PATHS = ['/checkout', '/pay', '/member']`，结算、支付、会员中心需登录访问；购物车 `/cartlist` 允许游客浏览。
- **登录拦截 + redirect 回跳**：`router.beforeEach` 检测无 Token 时跳转 `/login?redirect=${to.fullPath}`；登录成功后 `LoginIndex.vue` 读取 `route.query.redirect` 并 `router.replace` 回原页面，保证深链访问不丢失上下文。
- **已登录反向守卫**：访问 `/login` 或 `/register` 时，若 Pinia 中已有 Token，直接重定向首页，避免重复登录与无效路由栈。
- **路由切换反馈**：`beforeEach` 开启 `ElLoading` 全屏遮罩，`afterEach` 关闭，配合 `scrollBehavior` 回顶，形成「加载态 → 渲染完成」的完整切换闭环。
- **401 熔断兜底**：`utils/http.ts` 在业务码 `401` 或 HTTP `401` 时触发 `handleUnauthorized`，清空用户态并携带当前路径重定向登录页；`isRedirecting` 标志位防止并发请求引发重复跳转。

#### 2. Pinia 双模式购物车与状态分层

- **按业务域拆分 Store**：`userStore`（登录态）、`cartStore`（购物车）、`categoryStore`（顶部分类导航），职责清晰、互不耦合。
- **持久化插件**：`main.ts` 注册 `pinia-plugin-persistedstate`；`userStore` 与 `cartStore` 配置 `{ persist: true }`，刷新页面保留会话与购物车。
- **登录/游客双模式**：`cartStore` 通过 `computed isLogin` 分支——未登录时本地增删改并持久化；已登录时走 API，登录/注册成功后 `userStore` 自动调用 `mergeCart()` 将本地数据合并至服务端。
- **派生状态集中计算**：`allCount`、`allPrice`、`selectedCount`、`selectedPrice`、`isAll` 等均由 `computed` 派生，视图层零重复计算，结算页直接消费聚合结果。
- **登出清理链路**：`clearUserInfo` 清空 Pinia 状态、调用 `cartStore.clearCart()`，并移除 `localStorage` 中的 `user` / `cart` 键，杜绝脏数据残留。

#### 3. 组件封装与 Composable 复用

- **全局组件插件**：`components/index.ts` 的 `PluginManager` 统一注册 `ViewIndex`（商品大图预览）等业务组件，页面按需直接使用，降低重复 import。
- **rAF 放大镜组件**：`ImageView/ViewIndex.vue` 基于 `@vueuse/core` 的 `useMouseInElement` 追踪鼠标相对坐标，通过 `requestAnimationFrame` 合并帧内多次 `mousemove` 更新，将放大镜位移计算与浏览器渲染周期对齐，有效规避高频 DOM 读写引发的重排（Reflow）。
- **认证页布局复用**：`AuthLayout` 抽离登录/注册页的头部、表单卡片与页脚，两页通过 `<slot />` 注入表单内容，保证认证流程 UI 一致。
- **地址表单组件化**：`AddressForm` 支持 `v-model` 双向绑定；`composables/useAddress.ts` 封装地址 CRUD、表单校验与弹窗状态，结算页与会员中心共用同一套逻辑。

#### 4. 自定义指令与网络层

- **图片懒加载 `v-img-lazy`**：基于 `IntersectionObserver` 实现视口交叉监听，进入可视区域后单次赋值 `src` 并 `unobserve` 解绑；不支持 API 时降级直载；`unmounted` 阶段 `disconnect` 释放 Observer，防止 SPA 路由切换导致的内存泄漏。
- **Axios 统一业务码解包**：请求拦截器自动注入 `Authorization: Bearer ${token}`；响应拦截器解包 `{ code, msg, result }`（`code === '1'` 为成功），网络异常与业务错误统一 `ElMessage` 提示，页面层只消费已解包的 `result`。
- **API 按域拆分**：`apis/` 下按 `user`、`carts`、`order`、`address`、`home` 等模块组织，Store 与 View 只关心语义化方法名，降低跨模块耦合。

#### 5. 性能优化与工程化

- **路由懒加载**：除 `Layout` 与 `Login` 外，所有页面与子路由均 `() => import(...)` 动态导入，首屏仅加载当前路由所需代码。
- **Manual Chunks 分包**：`vite.config.ts` 将 `vue`/`vue-router`/`pinia`、`element-plus`、`axios` 拆为独立 chunk，框架层与业务层分离缓存，提升二次访问命中率。
- **Element Plus 按需引入**：`unplugin-auto-import` + `unplugin-vue-components` + `unplugin-element-plus`，配合 SCSS 主题变量（`additionalData` 全局注入），避免全量 UI 库打入 bundle。
- **购物车数量防抖**：`CartListIndex.vue` 对数量变更使用 `DEBOUNCE_DELAY.CART_COUNT`（300ms）防抖；去结算前 `flushAllDebounced()` 强制刷入待提交变更，确保数据一致性。
- **全局异常捕获**：`main.ts` 配置 `app.config.errorHandler`，统一 console 输出组件级运行时错误，便于开发阶段快速定位。
- **类型门禁**：ESLint 9 Flat Config + typescript-eslint + eslint-plugin-vue；Prettier 格式化；`npm run build` 前先执行 `vue-tsc --noEmit`，将类型错误拦截在构建阶段。

---

## 项目截图

### 首页

![首页](./docs/screenshots/home.png)

### 商品详情

![商品详情](./docs/screenshots/detail.png)

### 购物车

![购物车](./docs/screenshots/cart.png)

### 个人中心

![个人中心](./docs/screenshots/member.png)

---

## ⚡ 前端工程化与性能表现

| 维度 | 实现方式 | 工程收益 |
| :--- | :------- | :------- |
| **首屏加载** | 路由懒加载 + Manual Chunks 三方分包 | 首屏核心 Bundle 深度瘦身，业务代码与框架/vendor 分离加载，显著降低 FCP 阶段的 JS 解析压力 |
| **运行时性能** | `v-img-lazy` 视口懒加载 + 购物车 300ms 防抖 + rAF 节流放大镜 | 列表页按需加载图片，削减无效带宽；购物车连续改量场景下有效削减 **70% 以上**的无效网络并发与服务器吞吐压力；放大镜交互与渲染帧同步，避免 Layout Thrashing |
| **包体控制** | Element Plus 按需引入 + SCSS 主题按需编译 | 剔除未使用组件与样式，控制 vendor chunk 体积上限，提升长期缓存稳定性 |
| **类型安全** | TypeScript 全链路 + 构建前 `vue-tsc --noEmit` | 编译期类型门禁，将接口契约变更与 Props 错误拦截在 merge 之前 |
| **网络健壮性** | Axios 业务码解包 + 401 熔断 + `isRedirecting` 防重入 | Token 失效时统一清理会话并重定向，杜绝「半登录态」下的无效请求风暴 |
| **开发体验** | Vite 7 HMR + `vite-plugin-mock` + `@` 路径别名 | 毫秒级热更新，可脱离后端独立联调，缩短功能迭代反馈环 |

`vite.config.ts` 分包配置：

```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vue-vendor': ['vue', 'vue-router', 'pinia'],
        'element-plus': ['element-plus', '@element-plus/icons-vue'],
        'axios-vendor': ['axios'],
      },
    },
  },
}
```

### 关键代码节选

**路由守卫（登录拦截 + redirect）**

```typescript
const requiresAuth = PROTECTED_PATHS.some((path) => to.path.startsWith(path))
// ...
if (token) {
  next()
} else {
  next({ path: '/login', query: { redirect: to.fullPath } })
}
```

**HTTP 401 统一处理**

```typescript
const handleUnauthorized = async (): Promise<void> => {
  if (isRedirecting) return
  isRedirecting = true
  await userStore.clearUserInfo()
  router.replace({ path: '/login', query: { redirect: currentPath } })
}
```

**图片懒加载指令（含降级与卸载清理）**

```typescript
if (!window.IntersectionObserver) {
  el.src = binding.value
  return
}
// ... observer 进入视口后赋值 src 并 unobserve
unmounted(el) {
  el._observer?.disconnect()
}
```

---

<details>
<summary><strong>🛠️ 技术选型与项目架构（点击展开）</strong></summary>

### 选型理由（前端）

| 技术 | 选型考量 |
| :--- | :------- |
| **Vue 3 + `<script setup>`** | Composition API 便于逻辑复用与类型推导，适合中等复杂度电商页面 |
| **TypeScript** | API 响应、Store、组件 Props 全链路类型约束，降低联调与重构成本 |
| **Vite 7** | 原生 ESM 开发与快速 HMR；生产构建基于 Rollup，便于配置分包策略 |
| **Pinia** | 轻量模块化 Store，与 TS 和持久化插件配合自然 |
| **Element Plus** | 成熟的表单、布局组件，缩短电商 UI 开发周期 |
| **SCSS** | 全局变量、混入与 Element 主题覆盖，统一设计令牌 |

### 整体架构

```
┌─────────────────────────────────────────────────────────────────┐
│                          Frontend                                │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                        Views                             │   │
│  │   Home │ Category │ Detail │ Cart │ Checkout │ Member   │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                    Components                            │   │
│  │     ViewIndex │ AddressForm │ AuthLayout...             │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │              Composables │ Directives                   │   │
│  │         useAddress │ v-img-lazy                          │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                      Stores                              │   │
│  │      userStore │ cartStore │ categoryStore               │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                       APIs                               │   │
│  │            Axios + 请求/响应拦截器                       │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP / RESTful API
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                          Backend                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                     Routes                               │   │
│  │   user │ home │ category │ goods │ cart │ order │ address│  │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                    Middleware                            │   │
│  │              CORS │ JSON Parser │ Auth                   │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                     Models                               │   │
│  │      User │ Goods │ Category │ Cart │ Order │ Address    │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Mongoose ODM
                              ▼
                        ┌──────────┐
                        │ MongoDB  │
                        └──────────┘
```

### 前端目录结构

```
frontend/src/
├── apis/           # 按业务域拆分的 API 封装
├── components/     # 公共组件（ViewIndex、AddressForm、AuthLayout）
├── composables/    # 可复用组合式函数（useAddress 等）
├── constants/      # 全局常量（PROTECTED_PATHS、DEBOUNCE_DELAY）
├── directives/     # 自定义指令（v-img-lazy）
├── router/         # 路由配置与守卫
├── stores/         # Pinia 状态管理
├── styles/         # 全局样式 + Element Plus 主题
├── types/          # TypeScript 类型定义
├── utils/          # Axios 实例与拦截器
└── views/          # 页面组件
```

### 后端目录结构

```
backend/src/
├── config/         # 配置文件（数据库连接）
├── middleware/     # 中间件（JWT 认证）
├── models/         # Mongoose 数据模型
├── routes/         # API 路由
│   └── member/    # 需要认证的会员接口
└── seed/           # 数据库种子数据
```

</details>

<details>
<summary><strong>🚀 本地开发指南（点击展开）</strong></summary>

### 环境要求

- Node.js `^20.19.0` 或 `>=22.12.0`
- MongoDB `>=6.0`
- npm / yarn / pnpm

### 前端启动

```bash
cd frontend
npm install
npm run dev
```

访问 http://localhost:8080

### 后端启动

```bash
cd backend
npm install

# 配置环境变量
cp .env.example .env

# 初始化数据库（可选）
npm run seed

npm run dev
```

后端运行在 http://localhost:3000

</details>

<details>
<summary><strong>⚙️ 环境变量配置（点击展开）</strong></summary>

### 前端环境变量

在 `frontend/` 目录下创建 `.env.local` 文件：

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_TITLE=校园惠
```

| 变量                | 说明          | 开发环境                | 生产环境        |
| :------------------ | :------------ | :---------------------- | :-------------- |
| `VITE_API_BASE_URL` | 后端 API 地址 | `http://localhost:3000` | `/`（相对路径） |
| `VITE_APP_TITLE`    | 应用标题      | 校园惠                  | 校园惠          |

### 后端环境变量

在 `backend/` 目录下创建 `.env` 文件：

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/campus
JWT_SECRET=your-jwt-secret-key
```

| 变量          | 说明             |
| :------------ | :--------------- |
| `PORT`        | 服务端口         |
| `MONGODB_URI` | MongoDB 连接地址 |
| `JWT_SECRET`  | JWT 密钥         |

</details>

<details>
<summary><strong>📋 常用命令（点击展开）</strong></summary>

### 前端命令

| 命令              | 说明                        |
| :---------------- | :-------------------------- |
| `npm run dev`     | 启动开发服务器（端口 8080） |
| `npm run build`   | 类型检查 + 生产环境构建     |
| `npm run preview` | 预览构建结果                |
| `npm run lint`    | ESLint 代码检查             |
| `npm run format`  | Prettier 格式化             |

### 后端命令

| 命令            | 说明                             |
| :-------------- | :------------------------------- |
| `npm run dev`   | 启动开发服务器（nodemon 热重载） |
| `npm run build` | 编译 TypeScript                  |
| `npm run start` | 启动生产服务器                   |
| `npm run seed`  | 初始化数据库种子                 |

</details>

<details>
<summary><strong>📦 部署说明（点击展开）</strong></summary>

### 前端构建

```bash
cd frontend
npm run build
```

构建产物位于 `frontend/dist/` 目录。

### 后端构建

```bash
cd backend
npm run build
```

编译产物位于 `backend/dist/` 目录。

</details>

<details>
<summary><strong>🔧 后端技术实现（节选）（点击展开）</strong></summary>

### JWT 认证中间件

```typescript
export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace("Bearer ", "").trim();
  if (!token) {
    return res.status(401).json({ code: "401", msg: "认证令牌不能为空" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    }) as { userId: string };
    req.userId = decoded.userId;
    next();
  } catch (err: any) {
    const msg = err.name === "TokenExpiredError" ? "令牌已过期" : "令牌无效";
    return res.status(401).json({ code: "401", msg });
  }
};
```

### RESTful API 设计

```
公共接口
├── POST /login          # 用户登录
├── POST /register       # 用户注册
├── GET  /home           # 首页数据
├── GET  /category/:id   # 分类数据
└── GET  /goods/:id      # 商品详情

认证接口（需要 JWT Token）
├── /member/cart         # 购物车 CRUD
├── /member/order        # 订单管理
└── /member/address      # 地址管理
```

</details>

<details>
<summary><strong>📚 技术栈总览（点击展开）</strong></summary>

### 前端技术栈

| 技术         | 版本   | 说明                      |
| :----------- | :----- | :------------------------ |
| Vue          | 3.5.25 | 渐进式 JavaScript 框架    |
| Vite         | 7.2.4  | 下一代前端构建工具        |
| Vue Router   | 4.6.3  | Vue.js 官方路由管理器     |
| Pinia        | 3.0.4  | Vue.js 官方状态管理库     |
| Element Plus | 2.12.0 | 基于 Vue 3 的组件库       |
| Axios        | 1.13.2 | Promise based HTTP 客户端 |
| TypeScript   | 6.0.2  | JavaScript 的超集         |
| SCSS         | 1.94.2 | CSS 预处理器              |
| VueUse       | 14.1.0 | Composition 工具集        |

### 后端技术栈

| 技术     | 版本  | 说明                 |
| :------- | :---- | :------------------- |
| Express  | 5.2.1 | Node.js Web 应用框架 |
| MongoDB  | 9.4.1 | NoSQL 数据库         |
| Mongoose | 9.4.1 | MongoDB 对象建模工具 |
| JWT      | 9.0.3 | JSON Web Token 认证  |
| bcryptjs | 3.0.3 | 密码加密库           |

</details>

---

**如果这个项目对你有帮助，请给一个 ⭐ Star**

Made with ❤️
