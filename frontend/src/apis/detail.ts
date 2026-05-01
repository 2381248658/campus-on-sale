import httpInstance from '@/utils/http'
import type { GoodsDetail, CategoryGoods, HotGoodsParams } from '@/types/api'

export const getGoodsDetailAPI = (id?: string): Promise<GoodsDetail> => {
  return httpInstance({ url: '/goods', params: { id } })
}

export const getHotGoodsAPI = ({
  id,
  type,
  limit = 3,
}: HotGoodsParams): Promise<CategoryGoods[]> => {
  return httpInstance({ url: '/goods/hot', params: { id, type, limit } })
}
