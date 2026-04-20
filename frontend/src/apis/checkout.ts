/**
 * @file 结算相关接口
 * @description 结算信息、创建订单等API
 */
import httpInstance from '@/utils/http'
import type { CheckoutInfo, CreateOrderParams, CreateOrderResult } from '@/types/api'

/**
 * 获取结算信息
 * @returns 结算信息（地址、商品、汇总）
 */
export const getCheckoutInfoAPI = (): Promise<CheckoutInfo> => {
  return httpInstance({ url: '/member/order/pre' })
}

/**
 * 创建订单
 * @param data - 订单参数（商品、地址、支付方式等）
 * @returns 订单结果（订单ID、支付金额）
 */
export const createOrderAPI = (data: CreateOrderParams): Promise<CreateOrderResult> => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
