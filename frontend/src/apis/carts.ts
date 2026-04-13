import httpInstance from '@/utils/http'
import type {
  CartItem,
  AddCartParams,
  DeleteCartParams,
  UpdateCartParams,
  SelectAllParams,
  MergeCartItem,
} from '@/types/api'

// ============================================
// 购物车相关接口：支持登录 / 未登录两种模式的数据同步
// ============================================

/**
 * 加入购物车
 * @param skuId - SKU ID
 * @param count - 数量，默认1
 */
export const insertCartAPI = ({ skuId, count }: AddCartParams): Promise<unknown> => {
  return httpInstance({
    url: 'member/cart',
    method: 'POST',
    data: {
      skuId,
      count,
    },
  })
}

// ============================================
// 获取购物车列表
// ============================================

export const findNewCartListAPI = (): Promise<CartItem[]> => {
  return httpInstance({
    url: 'member/cart',
  })
}

// ============================================
// 删除购物车商品
// ============================================

/**
 * 批量删除购物车中的商品
 * @param ids - 要删除的SKU ID列表
 */
export const delCartAPI = (ids: string[]): Promise<unknown> => {
  return httpInstance({
    url: 'member/cart',
    method: 'DELETE',
    data: {
      ids,
    } as DeleteCartParams,
  })
}

// ============================================
// 合并购物车（未登录数据同步到云端）
// ============================================

/**
 * 将本地购物车数据合并到云端
 * @param data - 本地购物车项数组
 */
export const mergeCartAPI = (data: MergeCartItem[]): Promise<unknown> => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data,
  })
}

// ============================================
// 更新购物车单个商品（数量/选中状态）
// ============================================

/**
 * 单选更新登录购物车
 * @param skuId - SKU ID
 * @param selected - 选中状态
 * @param count - 数量
 */
export const updateNewCartAPI = (
  skuId: string,
  { selected, count }: UpdateCartParams,
): Promise<unknown> => {
  return httpInstance({
    url: `member/cart/${skuId}`,
    method: 'PUT',
    data: {
      selected,
      count,
    },
  })
}

// ============================================
// 全选更新购物车
// ============================================

/**
 * 更新购物车全选状态
 * @param selected - 是否全选
 */
export const batchUpdateCartAPI = ({ selected }: SelectAllParams): Promise<unknown> => {
  return httpInstance({
    url: 'member/cart/selected',
    method: 'PUT',
    data: {
      selected,
    },
  })
}
