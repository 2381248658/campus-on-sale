/**
 * @file 布局相关接口
 * @description 顶部导航分类等API
 */
import httpInstance from '@/utils/http'
import type { CategoryHead } from '@/types/api'

/**
 * 获取顶部分类导航
 * @returns 分类列表
 */
export function getCategoryAPI(): Promise<CategoryHead[]> {
  return httpInstance({ url: '/home/category/head' })
}
