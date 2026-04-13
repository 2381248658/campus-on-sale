import httpInstance from '@/utils/http'
import type { GoodsDetail, CategoryGoods, HotGoodsParams } from '@/types/api'

// ============================================
// 商品详情相关接口
// ============================================

/**
 * 获取商品详情
 * @param id - 商品ID
 */
export const getDetail = (id?: string): Promise<GoodsDetail> => {
  return httpInstance({
    url: '/goods',
    params: {
      id,
    },
  })
}

// ============================================
// 热点商品接口（热销榜单）
// ============================================

export interface FetchHotGoodsParams {
  /** 商品id */
  id: string
  /** 1代表24小时热销榜 2代表周热销榜 */
  type: number
  /** 获取个数，默认3 */
  limit?: number
}

/**
 * 获取热点商品列表
 * @param id - 商品id
 * @param type - 1代表24小时热销榜 2代表周热销榜
 * @param limit - 获取个数，默认3
 */
export const fetchHotGoodsAPI = ({
  id,
  type,
  limit = 3,
}: FetchHotGoodsParams): Promise<CategoryGoods[]> => {
  return httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit,
    },
  })
}
