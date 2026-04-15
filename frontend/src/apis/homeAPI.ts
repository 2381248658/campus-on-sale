import httpInstance from '@/utils/http'
import type { Banner, FreshGoods, HotRecommend, HomeProduct } from '@/types/api'

// ============================================
// 1.1 获取首页/商品页轮播图
// ============================================
export function getBannerAPI(): Promise<Banner[]> {
  return httpInstance({
    url: '/recommend/banner',
    method: 'get',
  })
}

// ============================================
// 1.2 获取学长推荐（新鲜好物）
// ============================================

export function findNewAPI(): Promise<FreshGoods[]> {
  return httpInstance({
    url: '/recommend/fresh',
    method: 'get',
  })
}

// ============================================
// 1.3 获取人气推荐
// ============================================

export function findHotAPI(): Promise<HotRecommend[]> {
  return httpInstance({
    url: '/recommend/hot',
    method: 'get',
  })
}

// ============================================
// 1.4 获取首页所有产品板块
// ============================================

export function getGoodsAPI(): Promise<HomeProduct[]> {
  return httpInstance({
    url: '/campus/goods/all',
    method: 'get',
  })
}
