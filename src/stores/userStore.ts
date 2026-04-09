import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI, type LoginParams } from '@/apis/user' // 引入 LoginParams
import { useCartStore } from './cartStore'

// 4.1 定义用户信息类型
export interface UserInfo {
  id?: string
  account?: string
  mobile?: string
  token?: string
  avatar?: string
  nickname?: string
  // 根据接口实际返回补充字段...
}

export const useUserStore = defineStore(
  'user',
  () => {
    // 使用类型声明 UserInfo
    const userInfo = ref<UserInfo>({})

    // 登录并同步购物车数据
    // 🚀 修正：使用 LoginParams 替换 any
    const getUserInfo = async ({ account, password }: LoginParams) => {
      const res = await loginAPI({ account, password })
      // 🚀 此时 res 已经是 UserInfo 类型，赋值不再报错
      userInfo.value = res

      const cartStore = useCartStore()
      try {
        // 登录成功后执行本地与云端购物车合并
        await cartStore.mergeCart()
      } catch (err) {
        console.warn('购物车同步失败:', err)
        // 合并失败时执行兜底方案：仅获取云端数据
        await cartStore.updateCartList().catch(() => {})
      }
    }

    // 清除用户状态（退出登录）
    const clearUserInfo = () => {
      userInfo.value = {}
      const cartStore = useCartStore()
      // 清空本地购物车数据
      cartStore.clearCart()
    }

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  {
    // 启用 Pinia 插件持久化存储
    persist: true,
  },
)
