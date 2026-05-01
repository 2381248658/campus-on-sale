/**
 * @file 首页相关接口
 * @description 首页轮播图、新鲜好物、人气推荐、商品板块、分类导航等API
 */
import httpInstance from '@/utils/http'
import type { Banner, FreshGoods, HotRecommend, HomeProduct, CategoryHead } from '@/types/api'

/**
 * 获取首页轮播图
 * @returns 轮播图列表
 */
export const getBannerAPI = (): Promise<Banner[]> => {
  return httpInstance({ url: '/recommend/banner', method: 'get' })
}

/**
 * 获取新鲜好物列表
 * @returns 新鲜好物列表
 */
export const getFreshGoodsAPI = (): Promise<FreshGoods[]> => {
  return httpInstance({ url: '/recommend/fresh', method: 'get' })
}

/**
 * 获取人气推荐列表
 * @returns 人气推荐列表
 */
export const getHotRecommendAPI = (): Promise<HotRecommend[]> => {
  return httpInstance({ url: '/recommend/hot', method: 'get' })
}

/**
 * 获取首页商品板块
 * @returns 商品板块列表
 */
export const getHomeGoodsAPI = (): Promise<HomeProduct[]> => {
  return httpInstance({ url: '/campus/goods/all', method: 'get' })
}

/**
 * 获取分类导航头数据
 * @returns 分类导航列表
 */
export const getCategoryHeadAPI = (): Promise<CategoryHead[]> => {
  return httpInstance({ url: '/home/category/head' })
}
