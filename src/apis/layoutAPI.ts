import httpInstance from '@/utils/http'
import type { CategoryHead } from '@/types/api'

// ============================================
// 布局相关接口（导航分类）
// ============================================

/**
 * 获取校园惠首页分类导航数据
 */
export function getCategoryAPI(): Promise<CategoryHead[]> {
  return httpInstance({
    url: '/home/category/head',
  })
}
