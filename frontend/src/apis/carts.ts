/**
 * @file 购物车相关接口
 * @description 购物车增删改查、合并等操作API
 */
import httpInstance from '@/utils/http'
import type {
  CartItem,
  AddCartParams,
  DeleteCartParams,
  UpdateCartParams,
  SelectAllParams,
  MergeCartItem,
} from '@/types/api'

/**
 * 添加商品到购物车
 * @param params - 添加参数（skuId商品规格ID、count数量）
 */
export const insertCartAPI = ({ skuId, count }: AddCartParams): Promise<unknown> => {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: { skuId, count },
  })
}

/**
 * 获取购物车列表
 * @returns 购物车商品列表
 */
export const findNewCartListAPI = (): Promise<CartItem[]> => {
  return httpInstance({ url: '/member/cart' })
}

/**
 * 删除购物车商品
 * @param ids - 要删除的商品SKU ID数组
 */
export const delCartAPI = (ids: string[]): Promise<unknown> => {
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: { ids } as DeleteCartParams,
  })
}

/**
 * 合并购物车（本地->服务器）
 * @param data - 要合并的购物车数据
 */
export const mergeCartAPI = (data: MergeCartItem[]): Promise<unknown> => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data,
  })
}

/**
 * 更新购物车商品
 * @param skuId - 商品SKU ID
 * @param params - 更新参数（selected选中状态、count数量）
 */
export const updateNewCartAPI = (
  skuId: string,
  { selected, count }: UpdateCartParams,
): Promise<unknown> => {
  return httpInstance({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data: { selected, count },
  })
}

/**
 * 批量更新购物车选中状态
 * @param params - 更新参数（selected是否全选）
 */
export const batchUpdateCartAPI = ({ selected }: SelectAllParams): Promise<unknown> => {
  return httpInstance({
    url: '/member/cart/selected',
    method: 'PUT',
    data: { selected },
  })
}
