/**
 * @file 路由配置
 * @description 定义应用路由、路由守卫、页面加载状态
 */
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type RouterScrollBehavior,
} from 'vue-router'
import { ElLoading } from 'element-plus'

import Layout from '@/views/Layout/LayoutIndex.vue'
import Login from '@/views/Login/LoginIndex.vue'

/** 路由配置表 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home/HomeIndex.vue'),
      },
      {
        path: 'category/:id',
        name: 'category',
        component: () => import('@/views/Category/CategoryIndex.vue'),
      },
      {
        path: 'category/sub/:id',
        name: 'subCategory',
        component: () => import('@/views/SubCategory/SubCategoryIndex.vue'),
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: () => import('@/views/Detail/DetailIndex.vue'),
      },
      {
        path: 'cartlist',
        name: 'cartlist',
        component: () => import('@/views/CartList/CartListIndex.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/Checkout/CheckoutIndex.vue'),
      },
      {
        path: 'pay',
        name: 'pay',
        component: () => import('@/views/Pay/payIndex.vue'),
      },
      {
        path: 'member',
        component: () => import('@/views/Member/MemberIndex.vue'),
        children: [
          {
            path: '',
            name: 'member',
            component: () => import('@/views/Member/components/UserInfo.vue'),
          },
          {
            path: 'order',
            name: 'memberOrder',
            component: () => import('@/views/Member/components/UserOrder.vue'),
          },
          {
            path: 'order/:id',
            name: 'memberOrderDetail',
            component: () => import('@/views/Member/components/UserOrderDetail.vue'),
          },
          {
            path: 'address',
            name: 'memberAddress',
            component: () => import('@/views/Member/components/UserAddress.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register/RegisterIndex.vue'),
  },
]

/** 页面滚动行为：跳转后回到顶部 */
const scrollBehavior: RouterScrollBehavior = () => {
  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
})

/** 页面加载Loading实例 */
let loadingInstance: ReturnType<typeof ElLoading.service> | null = null

/** 关闭并重置Loading实例 */
const closeLoading = (): void => {
  loadingInstance?.close()
  loadingInstance = null
}

/**
 * 路由前置守卫
 * @description 处理页面加载状态、登录状态校验、权限控制
 */
router.beforeEach((to, _from, next) => {
  closeLoading()

  loadingInstance = ElLoading.service({
    lock: true,
    text: '页面加载中...',
    background: 'rgba(255, 255, 255, 0.7)',
  })

  // 需要登录权限的路径
  const protectedPaths = ['/checkout', '/pay', '/member']
  const requiresAuth = protectedPaths.some((path) => to.path.startsWith(path))

  // 获取token
  const persistedUser = localStorage.getItem('user')
  let token = ''
  if (persistedUser) {
    try {
      token = JSON.parse(persistedUser)?.userInfo?.token || ''
    } catch {
      token = ''
    }
  }

  // 已登录用户访问登录/注册页，重定向到首页
  if (to.name === 'login' || to.name === 'register') {
    if (token) {
      next({ path: '/' })
    } else {
      next()
    }
    return
  }

  // 不需要权限的页面直接放行
  if (!requiresAuth) {
    next()
    return
  }

  // 需要权限的页面检查token
  if (token) {
    next()
  } else {
    next({ path: '/login', query: { redirect: to.fullPath } })
  }
})

/**
 * 路由后置守卫
 * @description 关闭页面加载动画
 */
router.afterEach(() => {
  closeLoading()
})

export default router
