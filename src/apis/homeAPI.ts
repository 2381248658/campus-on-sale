import httpInstance from '@/utils/http'

/**
 * 3.1 定义数据模型
 */

// 轮播图数据项
export interface BannerItem {
  id: string
  imgUrl: string
}

// 校园商品/学长推荐数据项
export interface GoodsItem {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

// 人气推荐数据项 (根据文档: id, title, alt, picture)
export interface HotItem {
  id: string
  title: string
  alt: string
  picture: string
}

// 首页产品板块 (根据文档: id, name, picture, goods列表)
export interface GoodsModule {
  id: string
  name: string
  picture: string
  goods: GoodsItem[]
}

// 获取轮播图参数
export interface BannerParams {
  distributionsite?: string
}

/**
 * 3.2 改造 API 函数 - 彻底移除 any
 */

// 1.1 获取首页/商品页轮播图
export function getBannerAPI(params: BannerParams = {}) {
  const { distributionsite = '1' } = params
  // 🚀 修正：使用 <unknown, BannerItem[]> 因为拦截器类型推断问题
  return httpInstance<unknown, BannerItem[]>({
    url: '/recommend/banner',
    params: { distributionsite },
  })
}

// 1.2 获取学长推荐 (对应文档 /recommend/fresh)
export function findNewAPI() {
  return httpInstance<unknown, GoodsItem[]>({
    url: '/recommend/fresh',
  })
}

// 1.3 获取人气推荐 (对应文档 /recommend/hot)
export const findHotAPI = () => {
  return httpInstance<unknown, HotItem[]>({
    url: '/recommend/hot',
  })
}

// 1.4 获取所有校园商品模块 (对应文档 /campus/goods/all)
export const getGoodsAPI = () => {
  return httpInstance<unknown, GoodsModule[]>({
    url: '/campus/goods/all',
  })
}
