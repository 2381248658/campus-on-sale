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
import type { CartItem, MergeCartItem, UpdateCartParams } from '@/types/api'

// ============================================
// 添加购物车商品参数（本地未登录状态）
// ============================================

export interface AddCartGoods {
  skuId: string
  count: number
  name?: string
  picture?: string
  price?: number
  nowPrice?: number
  selected?: boolean
  [key: string]: unknown
}

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed<boolean>(() => !!userStore.userInfo?.token)
    const cartList = ref<CartItem[]>([])

    // ============================================
    // 计算属性 (增加容错)
    // ============================================

    const allCount = computed<number>(() =>
      cartList.value.reduce((a, c) => a + (Number(c.count) || 0), 0),
    )

    const allPrice = computed<number>(() =>
      cartList.value.reduce(
        (a, c) => a + Number(c.nowPrice || c.price || 0) * (Number(c.count) || 0),
        0,
      ),
    )

    const selectedCount = computed<number>(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + (Number(c.count) || 0), 0),
    )

    const selectedPrice = computed<number>(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => {
          const price = Number(c.nowPrice || c.price || 0)
          return a + price * (Number(c.count) || 0)
        }, 0),
    )

    const isAll = computed<boolean>(
      () => cartList.value.length > 0 && cartList.value.every((item) => item.selected),
    )

    // ============================================
    // Actions
    // ============================================

    /**
     * 刷新购物车列表（登录状态）
     */
    const updateCartList = async (): Promise<void> => {
      if (!isLogin.value) return
      const res = await findNewCartListAPI()
      cartList.value = res
    }

    /**
     * 合并本地购物车到云端（登录后执行）
     */
    const mergeCart = async (): Promise<void> => {
      if (cartList.value.length > 0) {
        const data: MergeCartItem[] = cartList.value.map((item) => ({
          skuId: item.skuId,
          selected: item.selected,
          count: item.count,
        }))
        await mergeCartAPI(data)
      }
      await updateCartList()
    }

    /**
     * 添加商品到购物车
     * @param goods - 商品信息
     */
    const addCart = async (goods: AddCartGoods): Promise<void> => {
      if (isLogin.value) {
        await insertCartAPI({ skuId: goods.skuId, count: goods.count })
        await updateCartList()
      } else {
        const item = cartList.value.find((i) => i.skuId === goods.skuId)
        if (item) {
          item.count += goods.count
        } else {
          // 确保所有添加到购物车的商品都有明确的selected初始值（默认选中）
          cartList.value.push({ ...goods, selected: true } as CartItem)
        }
      }
    }

    /**
     * 删除购物车商品
     * @param skuId - SKU ID
     */
    const delCart = async (skuId: string): Promise<void> => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        await updateCartList()
      } else {
        cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
      }
    }

    /**
     * 更新单项状态 (单选/改数量)
     * @param skuId - SKU ID
     * @param params - 更新参数
     */
    const updateCartItem = async (
      skuId: string,
      { selected, count }: UpdateCartParams,
    ): Promise<void> => {
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

    /**
     * 全选/取消全选
     * @param selected - 选中状态
     */
    const allCheck = async (selected: boolean): Promise<void> => {
      if (isLogin.value) {
        await batchUpdateCartAPI({ selected, ids: cartList.value.map((i) => i.skuId) })
        await updateCartList()
      } else {
        cartList.value.forEach((item) => (item.selected = selected))
      }
    }

    /**
     * 精准清除选中商品 (用于支付成功后)
     */
    const clearSelectedCart = async (): Promise<void> => {
      if (isLogin.value) {
        // 找到所有选中的 skuId
        const selectedIds = cartList.value.filter((item) => item.selected).map((item) => item.skuId)

        if (selectedIds.length > 0) {
          await delCartAPI(selectedIds) // 批量删除
          await updateCartList() // 同步后端列表
        }
      } else {
        // 未登录：直接本地过滤
        cartList.value = cartList.value.filter((item) => !item.selected)
      }
    }

    /**
     * 清空购物车
     */
    const clearCart = (): void => {
      cartList.value = []
    }

    // ============================================
    // Return
    // ============================================

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
