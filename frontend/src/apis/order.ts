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

export const getUserOrderAPI = (params: OrderListParams): Promise<PaginatedResult<OrderItem>> => {
  return httpInstance({ url: '/member/order', method: 'GET', params })
}

export const getOrderDetailAPI = (id: string): Promise<OrderDetail> => {
  return httpInstance({ url: `/member/order/${id}`, method: 'GET' })
}

export const confirmOrderPayAPI = (id: string): Promise<{ id: string; orderState: number }> => {
  return httpInstance({ url: `/member/order/${id}/pay`, method: 'PUT' })
}

export const getCheckoutInfoAPI = (): Promise<CheckoutInfo> => {
  return httpInstance({ url: '/member/order/pre' })
}

export const createOrderAPI = (data: CreateOrderParams): Promise<CreateOrderResult> => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
