/**
 * @file 订单相关接口
 * @description 订单列表、订单详情、支付确认、结算信息、创建订单等API
 */
import httpInstance from '@/utils/http'
import type {
  OrderDetail,
  OrderItem,
  OrderListParams,
  PaginatedResult,
  CheckoutInfo,
  CreateOrderParams,
  CreateOrderResult,
} from '@/types/api'

/**
 * 获取用户订单列表
 * @param params - 查询参数（page页码、pageSize每页数量、orderState订单状态）
 * @returns 分页订单列表
 */
export const getUserOrderAPI = (params: OrderListParams): Promise<PaginatedResult<OrderItem>> => {
  return httpInstance({ url: '/member/order', method: 'GET', params })
}

/**
 * 获取订单详情
 * @param id - 订单ID
 * @returns 订单详情数据
 */
export const getOrderDetailAPI = (id: string): Promise<OrderDetail> => {
  return httpInstance({ url: `/member/order/${id}`, method: 'GET' })
}

/**
 * 确认订单支付
 * @param id - 订单ID
 * @returns 支付结果（订单ID和新状态）
 */
export const confirmOrderPayAPI = (id: string): Promise<{ id: string; orderState: number }> => {
  return httpInstance({ url: `/member/order/${id}/pay`, method: 'PUT' })
}

/**
 * 获取结算信息
 * @returns 结算信息（收货地址、商品列表、价格汇总）
 */
export const getCheckoutInfoAPI = (): Promise<CheckoutInfo> => {
  return httpInstance({ url: '/member/order/pre' })
}

/**
 * 创建订单
 * @param data - 订单数据（收货地址、商品列表、支付方式等）
 * @returns 创建结果（订单ID）
 */
export const createOrderAPI = (data: CreateOrderParams): Promise<CreateOrderResult> => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
