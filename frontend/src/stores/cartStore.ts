/**
 * @file 购物车状态管理
 * @description 管理购物车数据，包括商品列表、选中状态、价格计算等
 *              支持登录/未登录两种状态下的购物车操作
 */
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

/** 添加购物车商品参数 */
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
    /** 用户状态 */
    const userStore = useUserStore()
    /** 是否已登录 */
    const isLogin = computed<boolean>(() => !!userStore.userInfo?.token)
    /** 购物车商品列表 */
    const cartList = ref<CartItem[]>([])

    /** 购物车商品总数量（件） */
    const allCount = computed<number>(() =>
      cartList.value.reduce((a, c) => a + (Number(c.count) || 0), 0),
    )

    /** 购物车商品总价（元） */
    const allPrice = computed<number>(() =>
      cartList.value.reduce(
        (a, c) => a + Number(c.nowPrice || c.price || 0) * (Number(c.count) || 0),
        0,
      ),
    )

    /** 已选中商品数量（件） */
    const selectedCount = computed<number>(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + (Number(c.count) || 0), 0),
    )

    /** 已选中商品总价（元） */
    const selectedPrice = computed<number>(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => {
          const price = Number(c.nowPrice || c.price || 0)
          return a + price * (Number(c.count) || 0)
        }, 0),
    )

    /** 是否全选 */
    const isAll = computed<boolean>(
      () => cartList.value.length > 0 && cartList.value.every((item) => item.selected),
    )

    /**
     * 从服务器同步购物车列表
     * @description 登录状态下从服务器获取最新购物车数据
     */
    const updateCartList = async (): Promise<void> => {
      if (!isLogin.value) return
      const res = await findNewCartListAPI()
      cartList.value = res
    }

    /**
     * 合并本地购物车到服务器
     * @description 登录时将本地购物车数据合并到服务器
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
     * @param goods - 商品信息（skuId、count必填）
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
          cartList.value.push({ ...goods, selected: true } as CartItem)
        }
      }
    }

    /**
     * 从购物车删除商品
     * @param skuId - 商品SKU ID
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
     * 更新购物车商品信息
     * @param skuId - 商品SKU ID
     * @param params - 更新参数（selected选中状态、count数量）
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
        await updateNewCartAPI(skuId, { selected: finalSelected, count: finalCount })
        await updateCartList()
      } else {
        if (selected !== undefined) item.selected = selected
        if (count !== undefined) item.count = count
      }
    }

    /**
     * 全选/取消全选
     * @param selected - 是否全选
     */
    const allCheck = async (selected: boolean): Promise<void> => {
      if (isLogin.value) {
        await batchUpdateCartAPI({ selected })
        await updateCartList()
      } else {
        cartList.value.forEach((item) => (item.selected = selected))
      }
    }

    /**
     * 清除已选中的商品
     * @description 删除所有选中状态的购物车商品
     */
    const clearSelectedCart = async (): Promise<void> => {
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

    /** 清空购物车 */
    const clearCart = (): void => {
      cartList.value = []
    }

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
