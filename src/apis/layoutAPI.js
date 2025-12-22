import httpInstance from '@/utils/http'

/**
 * 获取校园惠首页分类导航数据
 */
export function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head',
  })
}
