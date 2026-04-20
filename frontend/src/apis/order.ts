/**
 * @file 订单相关接口
 * @description 订单列表、订单详情等API
 */
import httpInstance from '@/utils/http'
import type { OrderDetail, OrderItem, OrderListParams, PaginatedResult } from '@/types/api'

/**
 * 获取用户订单列表
 * @param params - 查询参数（orderState订单状态、page页码、pageSize每页数量）
 * @returns 分页订单列表
 */
export const getUserOrderAPI = (params: OrderListParams): Promise<PaginatedResult<OrderItem>> => {
  return httpInstance({ url: '/member/order', method: 'GET', params })
}

/**
 * 获取订单详情
 * @param id - 订单ID
 * @returns 订单详情
 */
export const getOrderDetailAPI = (id: string): Promise<OrderDetail> => {
  return httpInstance({ url: `/member/order/${id}`, method: 'GET' })
}
