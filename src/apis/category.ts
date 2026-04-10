import httpInstance from '@/utils/http'
import type {
  CategoryDetail,
  SubCategoryFilter,
  CategoryGoods,
  PaginatedResult,
  PaginationParams,
} from '@/types/api'

// ============================================
// 分类相关接口
// ============================================

/**
 * 获取一级分类详情
 * @param id - 分类ID
 */
export const getCategoryAPI = (id?: string): Promise<CategoryDetail> => {
  return httpInstance({
    url: '/category',
    params: {
      id,
    },
  })
}

// ============================================
// 获取二级分类筛选条件
// ============================================

/**
 * 获取二级分类筛选数据
 * @param id - 子分类ID
 */
export const getCategoryFilterAPI = (id?: string): Promise<SubCategoryFilter> => {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id,
    },
  })
}

// ============================================
// 获取导航数据（二级分类商品列表）
// ============================================

export interface SubCategoryData extends PaginationParams {
  /** 分类ID */
  categoryId: string
  /** 排序字段: 'publishTime' | 'orderNum' | 'evaluateNum' */
  sortField?: 'publishTime' | 'orderNum' | 'evaluateNum'
}

/**
 * 获取二级分类下的商品列表（分页）
 * @param data - 查询参数
 * @description 支持分页和排序
 */
export const getSubCategoryAPI = (
  data: SubCategoryData,
): Promise<PaginatedResult<CategoryGoods>> => {
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'post',
    data,
  })
}
