import httpInstance from '@/utils/http'
import type { OrderDetail } from '@/types/api'

// ============================================
// 支付相关接口
// ============================================

/**
 * 获取订单详情（用于支付页）
 * @param id - 订单ID
 */
export const getOrderAPI = (id: string): Promise<OrderDetail> => {
  return httpInstance({
    url: `/member/order/${id}`,
  })
}

/**
 * 支付确认（将订单状态更新为待发货）
 * @param id - 订单ID
 */
export const confirmOrderPayAPI = (
  id: string,
): Promise<{ id: string; orderState: number }> => {
  return httpInstance({
    url: `/member/order/${id}/pay`,
    method: 'PUT',
  })
}
