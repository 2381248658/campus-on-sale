// 购物车相关接口封装：支持登录 / 未登录两种购物车模式的数据同步
import httpInstance from '@/utils/http'
import type { CartItem } from '@/stores/cartStore'

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
export const findNewCartListAPI = () => {
  // <any, CartItem[]> 告诉 TS：拦截器返回的 result 是 CartItem 数组
  return httpInstance<any, CartItem[]>({
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
export const mergeCartAPI = (data: { skuId: string; selected: boolean; count: number }[]) => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data,
  })
}

// 单选更新登录购物车
export const updateNewCartAPI = (
  skuId: string,
  { selected, count }: { selected?: boolean; count?: number },
) => {
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
export const batchUpdateCartAPI = (data: { selected: boolean; ids: string[] }) => {
  return httpInstance({
    url: 'member/cart/selected',
    method: 'PUT',
    data,
  })
}
