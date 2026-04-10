// 购物车相关接口封装：支持登录 / 未登录两种购物车模式的数据同步
import httpInstance from '@/utils/http'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
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
  return httpInstance({
    url: 'member/cart',
  })
}

// 删除购物车
export const delCartAPI = (ids) => {
  return httpInstance({
    url: 'member/cart',
    method: 'DELETE',
    data: {
      ids,
    },
  })
}

// 合并购物车
export const mergeCartAPI = (data) => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data,
  })
}

// 单选更新登录购物车
export const updateNewCartAPI = (skuId, { selected, count }) => {
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
export const batchUpdateCartAPI = (data) => {
  return httpInstance({
    url: 'member/cart/selected',
    method: 'PUT',
    data,
  })
}
