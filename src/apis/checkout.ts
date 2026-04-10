import httpInstance from '@/utils/http'
import type { CheckoutInfo, CreateOrderParams, CreateOrderResult } from '@/types/api'

// ============================================
// 订单结算相关接口
// ============================================

/**
 * 获取结账信息（购物车选中商品）
 */
export const getCheckoutInfoAPI = (): Promise<CheckoutInfo> => {
  return httpInstance({
    url: '/member/order/pre',
  })
}

// ============================================
// 创建订单
// ============================================

/**
 * 从购物车创建订单
 * @param data - 配送地址等信息
 */
export const createOrderAPI = (data: CreateOrderParams): Promise<CreateOrderResult> => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
