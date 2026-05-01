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
import { PROTECTED_PATHS } from '@/constants'
import { useUserStore } from '@/stores/userStore'

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
        component: () => import('@/views/Pay/PayIndex.vue'),
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

  const requiresAuth = PROTECTED_PATHS.some((path) => to.path.startsWith(path))

  const userStore = useUserStore()
  const token = userStore.userInfo?.token

  if (to.name === 'login' || to.name === 'register') {
    if (token) {
      next({ path: '/' })
    } else {
      next()
    }
    return
  }

  if (!requiresAuth) {
    next()
    return
  }

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
