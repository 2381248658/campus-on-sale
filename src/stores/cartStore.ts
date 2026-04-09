import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import {
  insertCartAPI,
  findNewCartListAPI,
  delCartAPI,
  mergeCartAPI,
  updateNewCartAPI,
  batchUpdateCartAPI,
} from '@/apis/carts'

/**
 * 🚀 新增：API返回的原始购物车项类型
 * 严格对齐后端接口返回的字段
 */
export interface CartItemAPI {
  id: string
  skuId: string
  name: string
  picture: string
  price: number
  count: number
  selected: boolean
  stock?: number
  attrsText?: string
}

/**
 * 前端使用的购物车项类型（包含本地计算字段）
 * 🚀 修正：继承API类型并扩展前端字段
 */
export interface CartItem extends CartItemAPI {
  nowPrice?: number // 前端计算的现价（促销价）
  isEffective?: boolean // 前端判断的商品有效性（库存>0等）
}

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => !!userStore.userInfo?.token)

    // 明确标注为 CartItem 数组
    const cartList = ref<CartItem[]>([])

    // --- 计算属性 ---
    const allCount = computed(() => cartList.value.reduce((a, c) => a + (Number(c.count) || 0), 0))

    const allPrice = computed(() =>
      cartList.value.reduce(
        (a, c) => a + Number(c.nowPrice ?? c.price ?? 0) * (Number(c.count) || 0),
        0,
      ),
    )

    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + (Number(c.count) || 0), 0),
    )

    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => {
          const price = Number(c.nowPrice ?? c.price ?? 0)
          return a + price * (Number(c.count) || 0)
        }, 0),
    )

    const isAll = computed(
      () => cartList.value.length > 0 && cartList.value.every((item) => item.selected),
    )

    // --- Actions ---

    // 1. 刷新列表
    const updateCartList = async () => {
      if (!isLogin.value) return
      try {
        // 🚀 修正：res 是 AxiosResponse，需要 .data 获取实际数据
        // 或者如果拦截器确实返回了 result，则使用 res as CartItem[]
        const res = await findNewCartListAPI()
        cartList.value = (res as any).data ?? res
      } catch (error) {
        console.error('获取购物车列表失败:', error)
        throw error
      }
    }

    // 2. 合并购物车
    const mergeCart = async () => {
      if (cartList.value.length > 0) {
        const data = cartList.value.map((item) => ({
          skuId: item.skuId,
          selected: item.selected,
          count: item.count,
        }))
        await mergeCartAPI(data)
      }
      await updateCartList()
    }

    // 3. 添加购物车
    const addCart = async (goods: CartItem) => {
      if (isLogin.value) {
        await insertCartAPI({ skuId: goods.skuId, count: goods.count })
        await updateCartList()
      } else {
        const item = cartList.value.find((i) => i.skuId === goods.skuId)
        if (item) {
          item.count += goods.count
        } else {
          // 确保所有添加到购物车的商品都有明确的selected初始值（默认选中）
          cartList.value.push({ ...goods, selected: goods.selected ?? true })
        }
      }
    }

    // 4. 删除购物车
    const delCart = async (skuId: string) => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        await updateCartList()
      } else {
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
      }
    }

    // 5. 更新单项状态 (单选/改数量)
    const updateCartItem = async (
      skuId: string,
      { selected, count }: { selected?: boolean; count?: number },
    ) => {
      const item = cartList.value.find((i) => i.skuId === skuId)
      if (!item) return

      if (isLogin.value) {
        const finalSelected = selected !== undefined ? selected : item.selected
        const finalCount = count !== undefined ? count : item.count
        await updateNewCartAPI(skuId, {
          selected: finalSelected,
          count: finalCount,
        })
        await updateCartList()
      } else {
        if (selected !== undefined) item.selected = selected
        if (count !== undefined) item.count = count
      }
    }

    // 6. 全选
    const allCheck = async (selected: boolean) => {
      if (isLogin.value) {
        await batchUpdateCartAPI({ selected, ids: cartList.value.map((i) => i.skuId) })
        await updateCartList()
      } else {
        cartList.value.forEach((item) => (item.selected = selected))
      }
    }

    // 7. 精准清除选中商品
    const clearSelectedCart = async () => {
      if (isLogin.value) {
        const selectedIds = cartList.value.filter((item) => item.selected).map((item) => item.skuId)
        if (selectedIds.length > 0) {
          await delCartAPI(selectedIds)
          await updateCartList()
        }
      } else {
        cartList.value = cartList.value.filter((item) => !item.selected)
      }
    }

    const clearCart = () => (cartList.value = [])

    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      addCart,
      delCart,
      allCheck,
      updateCartItem,
      updateCartList,
      clearCart,
      clearSelectedCart,
      mergeCart,
    }
  },
  { persist: true },
)
