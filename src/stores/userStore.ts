import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI, type LoginParams } from '@/apis/user'
import { useCartStore } from './cartStore'

/**
 * 🚀 修正：严格对齐API文档 /login 响应结构
 * 文档字段：id, account, nickname, avatar, token
 * 注意：文档中不包含 mobile 字段，如需支持请联系后端确认
 */
export interface UserInfo {
  id?: string
  account?: string
  nickname?: string
  avatar?: string
  token?: string
  // mobile?: string  // ⚠️ API文档中无此字段，如需使用请确保后端支持
}

export const useUserStore = defineStore(
  'user',
  () => {
    // 使用类型声明 UserInfo
    const userInfo = ref<UserInfo>({})

    // 登录并同步购物车数据
    const getUserInfo = async ({ account, password }: LoginParams) => {
      try {
        // 🚀 修正：res 是 AxiosResponse，需要 .data 获取实际数据
        const res = await loginAPI({ account, password })
        userInfo.value = (res as any).data ?? res

        const cartStore = useCartStore()
        try {
          await cartStore.mergeCart()
        } catch (err) {
          console.warn('购物车同步失败:', err)
          // 同步失败也尝试刷新列表
          await cartStore.updateCartList().catch(() => {})
        }
      } catch (error) {
        console.error('登录失败:', error)
        throw error
      }
    }

    // 清除用户状态（退出登录）
    const clearUserInfo = () => {
      userInfo.value = {}
      const cartStore = useCartStore()
      cartStore.clearCart()
    }

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  },
)
