<div align="center">

# 校园惠 Campus On Sale

**一个现代化的校园二手交易平台**

[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Element Plus](https://img.shields.io/badge/Element_Plus-2.12-409EFF?style=flat-square&logo=element)](https://element-plus.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.2-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.4-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)

[🌐 在线演示](http://121.43.248.176/) · [📝 接口文档](./docs/接口.md)

---

## 项目简介

校园惠是一个基于 **Vue 3 + TypeScript + Vite** 构建的校园二手交易平台。采用前后端分离架构，前端使用 Composition API 开发模式，后端基于 Express + MongoDB 提供 RESTful API，实现完整的商品浏览、购物车、订单管理等电商核心功能。

### 核心亮点

| 🎯 技术栈                                    | ✨ 特色功能                              |
| :------------------------------------------- | :--------------------------------------- |
| Vue 3.5 - Composition API + `<script setup>` | SKU 选择器 - 幂集算法实现多规格选择      |
| TypeScript - 前后端完整类型支持              | 图片懒加载 - Intersection Observer API   |
| Vite 7 - 极速开发体验                        | 路由懒加载 - 按需加载优化首屏            |
| Pinia - 轻量状态管理                         | 状态持久化 - pinia-plugin-persistedstate |
| Element Plus - 企业级 UI 组件                | JWT 认证 - 安全的用户身份验证            |
| Express 5 + MongoDB - RESTful API            | 响应式布局 - 多端适配                    |

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

## 功能模块

| 模块     | 功能                                          |
| :------- | :-------------------------------------------- |
| 用户系统 | 注册登录（JWT）、个人信息、地址管理、订单历史 |
| 商品系统 | 首页轮播、分类导航、列表筛选、详情 + SKU 选择 |
| 购物车   | 添加删除、数量调整、批量操作、本地持久化      |
| 订单系统 | 订单确认、地址选择、状态管理                  |

---

## 技术架构

### 整体架构

```
┌─────────────────────────────────────────────────────────────────┐
│                          Frontend                                │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                        Views                             │   │
│  │   Home │ Category │ Detail │ Cart │ Checkout │ Member   │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                    Components                            │   │
│  │     XyhSku │ ImageView │ GoodsItem │ Layout...          │   │
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
├── apis/           # API 接口封装
├── components/     # 公共组件（XyhSku、ImageView）
├── directives/     # 自定义指令（图片懒加载）
├── router/         # 路由配置
├── stores/         # Pinia 状态管理
├── styles/         # 全局样式 + Element Plus 主题
├── types/          # TypeScript 类型定义
├── utils/          # 工具函数（Axios 封装）
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

---

## 前端技术实现

### SKU 选择器（幂集算法）

基于幂集算法实现的多规格商品选择器，支持动态禁用状态和库存校验：

```typescript
const getPowerSet = (specs: string[]) => {
  const result: string[][] = [[]];
  specs.forEach((spec) =>
    result.forEach((item) => result.push([...item, spec])),
  );
  return result;
};
```

### 图片懒加载指令

基于 Intersection Observer API 的高性能实现：

```typescript
app.directive("img-lazy", {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.src = binding.value;
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  },
});
```

### HTTP 拦截器

统一的请求/响应处理机制：

```typescript
http.interceptors.response.use(
  (res) => {
    const { code, msg, result } = res.data;
    if (code === "1" || code === 200) return result;
    ElMessage.error(msg || "服务暂不可用");
    return Promise.reject(new Error(msg));
  },
  (err) => {
    ElMessage.error(err.response?.data?.message || "网络异常");
    return Promise.reject(err);
  },
);
```

---

## 后端技术实现

### JWT 认证中间件

基于 JWT 的用户身份验证，支持 Token 过期检测和错误处理：

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

### Mongoose 数据模型

使用 Mongoose ODM 定义数据模型，支持时间戳自动管理：

```typescript
const userSchema = new Schema(
  {
    account: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, select: false },
    nickname: { type: String, default: "" },
    avatar: { type: String, default: "" },
  },
  { timestamps: true, versionKey: false },
);
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

---

## 快速开始

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

---

## 环境变量配置

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

---

## 常用命令

### 前端命令

| 命令              | 说明                        |
| :---------------- | :-------------------------- |
| `npm run dev`     | 启动开发服务器（端口 8080） |
| `npm run build`   | 生产环境构建                |
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

---

## 部署说明

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

### Nginx 配置

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/campus-on-sale/dist;
    index index.html;

    # SPA 路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API 代理
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

### 构建优化配置

前端已配置代码分割策略（`vite.config.ts`）：

```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        'vue-vendor': ['vue', 'vue-router', 'pinia'],
        'element-plus': ['element-plus'],
        'axios-vendor': ['axios'],
      },
    },
  },
}
```

---

## 技术栈总览

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

### 后端技术栈

| 技术     | 版本  | 说明                 |
| :------- | :---- | :------------------- |
| Express  | 5.2.1 | Node.js Web 应用框架 |
| MongoDB  | 9.4.1 | NoSQL 数据库         |
| Mongoose | 9.4.1 | MongoDB 对象建模工具 |
| JWT      | 9.0.3 | JSON Web Token 认证  |
| bcryptjs | 3.0.3 | 密码加密库           |

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐ Star**

Made with ❤️

</div>
