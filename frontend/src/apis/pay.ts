/**
 * @file 支付相关接口
 * @description 订单查询、支付确认等API
 */
import httpInstance from '@/utils/http'
import type { OrderDetail } from '@/types/api'

/**
 * 获取订单详情（支付页）
 * @param id - 订单ID
 * @returns 订单详情
 */
export const getOrderAPI = (id: string): Promise<OrderDetail> => {
  return httpInstance({ url: `/member/order/${id}` })
}

/**
 * 确认支付
 * @param id - 订单ID
 * @returns 支付结果（订单ID、订单状态）
 */
export const confirmOrderPayAPI = (id: string): Promise<{ id: string; orderState: number }> => {
  return httpInstance({ url: `/member/order/${id}/pay`, method: 'PUT' })
}
