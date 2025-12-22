// 订单列表相关接口封装
// params 示例：
// {
//   orderState: 0, // 订单状态筛选（0-全部）
//   page: 1,       // 当前页
//   pageSize: 2,   // 每页条数
// }
import httpInstance from '@/utils/http'

export const getUserOrderAPI = (params) => {
  return httpInstance({
    url: 'member/order',
    method: 'GET',
    params,
  })
}
