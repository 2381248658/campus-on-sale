import httpInstance from '@/utils/http'
import type { OrderListParams, PaginatedResult, OrderItem } from '@/types/api'

// ============================================
// 订单列表相关接口
// ============================================

/**
 * 获取用户订单列表（分页）
 * @param params - 查询参数
 * @example
 * {
 *   orderState: 0,  // 订单状态筛选（0-全部, 1-待支付, 2-已支付, 3-已发货）
 *   page: 1,        // 当前页
 *   pageSize: 2,    // 每页条数
 * }
 */
export const getUserOrderAPI = (params: OrderListParams): Promise<PaginatedResult<OrderItem>> => {
  return httpInstance({
    url: 'member/order',
    method: 'GET',
    params,
  })
}
