/**
 * @file 商品详情相关接口
 * @description 商品详情、热门商品推荐等API
 */
import { request } from '@/utils/http'
import type { GoodsDetail, CategoryGoods, HotGoodsParams } from '@/types/api'

/**
 * 获取商品详情
 * @param id - 商品ID
 * @returns 商品详情数据
 */
export const getGoodsDetailAPI = (id?: string) => {
  return request<GoodsDetail>({ url: '/goods', params: { id } })
}

/**
 * 获取热门商品推荐
 * @param params - 查询参数（id商品ID、type推荐类型、limit数量）
 * @returns 热门商品列表
 */
export const getHotGoodsAPI = ({ id, type, limit = 3 }: HotGoodsParams) => {
  return request<CategoryGoods[]>({ url: '/goods/hot', params: { id, type, limit } })
}
