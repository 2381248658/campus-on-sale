import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI, registerAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import type { LoginResult, LoginParams, RegisterParams } from '@/types/api'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<LoginResult>({} as LoginResult)

    const getUserInfo = async ({ account, password }: LoginParams): Promise<void> => {
      const res = await loginAPI({ account, password })
      userInfo.value = res

      const cartStore = useCartStore()
      try {
        await cartStore.mergeCart()
      } catch (err) {
        console.warn('购物车同步失败:', err)
        await cartStore.updateCartList().catch(() => {})
      }
    }

    const registerUserInfo = async ({ account, password, nickname }: RegisterParams): Promise<void> => {
      const res = await registerAPI({ account, password, nickname })
      userInfo.value = res

      const cartStore = useCartStore()
      try {
        await cartStore.mergeCart()
      } catch (err) {
        console.warn('购物车同步失败:', err)
        await cartStore.updateCartList().catch(() => {})
      }
    }

    const clearUserInfo = (): void => {
      userInfo.value = {} as LoginResult
      const cartStore = useCartStore()
      cartStore.clearCart()
    }

    return {
      userInfo,
      getUserInfo,
      registerUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  },
)
