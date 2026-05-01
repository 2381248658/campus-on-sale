/**
 * @file 用户状态管理
 * @description 管理用户登录状态、用户信息、注册、登出等功能
 */
import { defineStore } from 'pinia'
import { ref, nextTick } from 'vue'
import { loginAPI, registerAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import type { LoginResult, LoginParams, RegisterParams } from '@/types/api'

export const useUserStore = defineStore(
  'user',
  () => {
    /** 用户信息（含token、昵称、头像等） */
    const userInfo = ref<LoginResult>({} as LoginResult)

    /**
     * 用户登录
     * @param params - 登录参数（account账号、password密码）
     */
    const getUserInfo = async ({ account, password }: LoginParams): Promise<void> => {
      const res = await loginAPI({ account, password })
      userInfo.value = res

      // 登录成功后同步购物车
      const cartStore = useCartStore()
      try {
        await cartStore.mergeCart()
      } catch (err) {
        console.warn('购物车同步失败:', err)
        await cartStore.updateCartList().catch(() => {})
      }
    }

    /**
     * 用户注册
     * @param params - 注册参数（account账号、password密码、nickname昵称）
     */
    const registerUserInfo = async ({
      account,
      password,
      nickname,
    }: RegisterParams): Promise<void> => {
      const res = await registerAPI({ account, password, nickname })
      userInfo.value = res

      // 注册成功后同步购物车
      const cartStore = useCartStore()
      try {
        await cartStore.mergeCart()
      } catch (err) {
        console.warn('购物车同步失败:', err)
        await cartStore.updateCartList().catch(() => {})
      }
    }

    /**
     * 用户登出（清除用户信息并清空购物车）
     */
    const clearUserInfo = async (): Promise<void> => {
      userInfo.value = {} as LoginResult
      const cartStore = useCartStore()
      cartStore.clearCart()
      await nextTick()
      localStorage.removeItem('user')
      localStorage.removeItem('cart')
    }

    return { userInfo, getUserInfo, registerUserInfo, clearUserInfo }
  },
  { persist: true },
)
