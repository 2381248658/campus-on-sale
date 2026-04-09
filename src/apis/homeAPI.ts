import httpInstance from '@/utils/http'

/**
 * 3.1 定义数据模型 (Interface)
 * 这些模型决定了你在组件里写代码时有没有自动补全
 */

// 轮播图数据项
export interface BannerItem {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string
}

// 校园商品数据项 (根据你项目实际返回结构补充)
export interface GoodsItem {
  id: string
  name: string
  desc: string
  price: string
  picture: string
}

/**
 * 3.2 改造 API 函数
 */

// 1.1 获取首页/商品页轮播图
// <any, BannerItem[]> 第一个泛型是参数类型，第二个是 response.data.result 的类型
export function getBannerAPI(params: { distributionsite?: string } = {}) {
  const { distributionsite = '1' } = params
  return httpInstance.get<any, BannerItem[]>('/recommend/banner', {
    params: { distributionsite },
  })
}

// 1.2 获取校园特惠
export function findNewAPI() {
  return httpInstance.get<any, GoodsItem[]>('/recommend/fresh')
}

// 1.3 获取人气推荐
export const findHotAPI = () => {
  return httpInstance.get<any, any[]>('/recommend/hot')
}

// 1.4 获取所有校园商品模块
export const getGoodsAPI = () => {
  return httpInstance.get<any, any>('/campus/goods/all')
}
