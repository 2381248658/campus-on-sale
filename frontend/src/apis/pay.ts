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
    url: `member/order/${id}`,
  })
}
