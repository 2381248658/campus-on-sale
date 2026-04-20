/**
 * @file 商品详情相关接口
 * @description 商品详情、热销榜单等API
 */
import httpInstance from '@/utils/http'
import type { GoodsDetail, CategoryGoods, HotGoodsParams } from '@/types/api'

/**
 * 获取商品详情
 * @param id - 商品ID
 * @returns 商品详情信息
 */
export const getDetail = (id?: string): Promise<GoodsDetail> => {
  return httpInstance({ url: '/goods', params: { id } })
}

/**
 * 获取热销商品列表
 * @param params - 查询参数（id商品ID、type榜单类型、limit数量）
 * @returns 热销商品列表
 */
export const fetchHotGoodsAPI = ({
  id,
  type,
  limit = 3,
}: HotGoodsParams): Promise<CategoryGoods[]> => {
  return httpInstance({ url: '/goods/hot', params: { id, type, limit } })
}
