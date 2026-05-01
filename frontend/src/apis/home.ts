import httpInstance from '@/utils/http'
import type { Banner, FreshGoods, HotRecommend, HomeProduct, CategoryHead } from '@/types/api'

export function getBannerAPI(): Promise<Banner[]> {
  return httpInstance({ url: '/recommend/banner', method: 'get' })
}

export function getFreshGoodsAPI(): Promise<FreshGoods[]> {
  return httpInstance({ url: '/recommend/fresh', method: 'get' })
}

export function getHotRecommendAPI(): Promise<HotRecommend[]> {
  return httpInstance({ url: '/recommend/hot', method: 'get' })
}

export function getHomeGoodsAPI(): Promise<HomeProduct[]> {
  return httpInstance({ url: '/campus/goods/all', method: 'get' })
}

export function getCategoryHeadAPI(): Promise<CategoryHead[]> {
  return httpInstance({ url: '/home/category/head' })
}
