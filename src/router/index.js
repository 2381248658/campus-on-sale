/**
 * 路由配置 - 懒加载
 * 职责：通过动态导入实现组件按需加载，提升首屏性能
 */
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/LayoutIndex.vue'
// 登录页通常也是高频且关键页面，可以静态也可以动态
import Login from '@/views/Login/LoginIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
          ],
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
