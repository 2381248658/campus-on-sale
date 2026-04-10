import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})

    // 登录并同步购物车数据
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
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
