// 购物车相关接口封装：支持登录 / 未登录两种购物车模式的数据同步
import httpInstance from '@/utils/http'
import type { CartItem } from '@/stores/cartStore'

/**
 * 合并购物车单项类型
 */
export interface MergeCartItem {
  skuId: string
  selected: boolean
  count: number
}

/**
 * 批量更新购物车参数
 */
export interface BatchUpdateParams {
  selected: boolean
  ids: string[]
}

/**
 * 更新购物车项参数
 */
export interface UpdateCartItemParams {
  selected?: boolean
  count?: number
}

// 加入购物车
export const insertCartAPI = ({ skuId, count }: { skuId: string; count: number }) => {
  return httpInstance({
    url: 'member/cart',
    method: 'POST',
    data: {
      skuId,
      count,
    },
  })
}

// 获取购物车列表
// 🚀 修正：使用 <unknown, CartItem[]> 因为拦截器类型推断问题
export const findNewCartListAPI = () => {
  return httpInstance<unknown, CartItem[]>({
    url: 'member/cart',
  })
}

// 删除购物车
export const delCartAPI = (ids: string[]) => {
  return httpInstance({
    url: 'member/cart',
    method: 'DELETE',
    data: {
      ids,
    },
  })
}

// 合并购物车
export const mergeCartAPI = (data: MergeCartItem[]) => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data,
  })
}

// 单选更新登录购物车
export const updateNewCartAPI = (skuId: string, { selected, count }: UpdateCartItemParams) => {
  return httpInstance({
    url: `member/cart/${skuId}`,
    method: 'PUT',
    data: {
      selected,
      count,
    },
  })
}

// 全选更新购物车
export const batchUpdateCartAPI = (data: BatchUpdateParams) => {
  return httpInstance({
    url: 'member/cart/selected',
    method: 'PUT',
    data,
  })
}
