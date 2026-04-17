/**
 * 路由配置 - 懒加载
 * 职责：通过动态导入实现组件按需加载，提升首屏性能
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { RouterScrollBehavior } from 'vue-router'
import { ElLoading } from 'element-plus'

import Layout from '@/views/Layout/LayoutIndex.vue'
import Login from '@/views/Login/LoginIndex.vue'

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
        component: () => import('@/views/Detail/detailIndex.vue'),
      },
      {
        path: 'cartlist',
        name: 'cartlist',
        component: () => import('@/views/CartList/cartListindex.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/Checkout/checkoutIndex.vue'),
      },
      {
        path: 'pay',
        name: 'pay',
        component: () => import('@/views/Pay/payIndex.vue'),
      },
      {
        path: 'member',
        component: () => import('@/views/Member/memberIndex.vue'),
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

const scrollBehavior: RouterScrollBehavior = () => {
  return {
    top: 0,
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
})

let loadingInstance: ReturnType<typeof ElLoading.service> | null = null

router.beforeEach((to, _from, next) => {
  loadingInstance = ElLoading.service({
    lock: true,
    text: '页面加载中...',
    background: 'rgba(255, 255, 255, 0.7)',
  })

  const protectedPaths = ['/checkout', '/pay', '/member']
  const requiresAuth = protectedPaths.some((path) => to.path.startsWith(path))

  const persistedUser = localStorage.getItem('user')
  let token = ''
  if (persistedUser) {
    try {
      token = JSON.parse(persistedUser)?.userInfo?.token || ''
    } catch {
      token = ''
    }
  }

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

router.afterEach(() => {
  loadingInstance?.close()
  loadingInstance = null
})

export default router
