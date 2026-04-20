/**
 * @file 首页相关接口
 * @description 轮播图、新鲜好物、人气推荐、商品列表等API
 */
import httpInstance from '@/utils/http'
import type { Banner, FreshGoods, HotRecommend, HomeProduct } from '@/types/api'

/**
 * 获取首页轮播图
 * @returns 轮播图列表
 */
export function getBannerAPI(): Promise<Banner[]> {
  return httpInstance({ url: '/recommend/banner', method: 'get' })
}

/**
 * 获取新鲜好物列表
 * @returns 新鲜好物商品列表
 */
export function findNewAPI(): Promise<FreshGoods[]> {
  return httpInstance({ url: '/recommend/fresh', method: 'get' })
}

/**
 * 获取人气推荐列表
 * @returns 人气推荐商品列表
 */
export function findHotAPI(): Promise<HotRecommend[]> {
  return httpInstance({ url: '/recommend/hot', method: 'get' })
}

/**
 * 获取首页商品板块
 * @returns 商品板块列表
 */
export function getGoodsAPI(): Promise<HomeProduct[]> {
  return httpInstance({ url: '/campus/goods/all', method: 'get' })
}
