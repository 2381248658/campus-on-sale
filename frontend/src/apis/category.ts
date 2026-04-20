/**
 * @file 分类相关接口
 * @description 一级分类、二级分类、分类商品列表等API
 */
import httpInstance from '@/utils/http'
import type {
  CategoryDetail,
  SubCategoryFilter,
  CategoryGoods,
  PaginatedResult,
  PaginationParams,
} from '@/types/api'

/**
 * 获取一级分类详情
 * @param id - 分类ID
 * @returns 分类详情（含子分类）
 */
export const getCategoryAPI = (id?: string): Promise<CategoryDetail> => {
  return httpInstance({ url: '/category', params: { id } })
}

/**
 * 获取二级分类筛选条件
 * @param id - 二级分类ID
 * @returns 筛选条件数据
 */
export const getCategoryFilterAPI = (id?: string): Promise<SubCategoryFilter> => {
  return httpInstance({ url: '/category/sub/filter', params: { id } })
}

/** 二级分类商品查询参数 */
export interface SubCategoryData extends PaginationParams {
  /** 分类ID */
  categoryId: string
  /** 排序字段 */
  sortField?: 'publishTime' | 'orderNum' | 'evaluateNum'
}

/**
 * 获取二级分类商品列表
 * @param data - 查询参数
 * @returns 分页商品列表
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
