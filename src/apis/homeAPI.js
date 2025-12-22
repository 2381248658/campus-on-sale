import httpInstance from '@/utils/http'

// 1.1 获取首页/商品页轮播图
export function getBannerAPI(params = {}) {
  const { distributionsite = '1' } = params
  return httpInstance({
    url: '/recommend/banner',
    method: 'get',
    params: { distributionsite },
  })
}

// 1.2 获取校园特惠
export function findNewAPI() {
  return httpInstance({
    url: '/recommend/fresh',
    method: 'get',
  })
}

// 1.3 获取人气推荐
export const findHotAPI = () => {
  return httpInstance({
    url: '/recommend/hot',
    method: 'get',
  })
}

// 1.4 获取所有校园商品模块
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/campus/goods/all',
    method: 'get',
  })
}
