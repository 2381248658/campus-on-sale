// 用户相关接口封装：登录、个人中心推荐等
import httpInstance from '@/utils/http'
import type { UserInfo } from '@/stores/userStore'
// 严格保留你的导入
import type { GoodsItem } from './homeAPI'

/**
 * 登录参数接口
 */
export interface LoginParams {
  account: string
  password: string
}

/**
 * 猜你喜欢列表参数
 */
export interface LikeListParams {
  limit?: number
}

/**
 * 登录接口
 * 🚀 修正：使用 <unknown, UserInfo> 因为拦截器类型推断问题
 */
export const loginAPI = (data: LoginParams) => {
  return httpInstance<unknown, UserInfo>({
    url: '/login',
    method: 'POST',
    data,
  })
}

/**
 * 个人中心猜你喜欢模块
 * 🚀 修正：使用 <unknown, GoodsItem[]> 因为拦截器类型推断问题
 */
export const getLikeListAPI = ({ limit = 4 }: LikeListParams = {}) => {
  return httpInstance<unknown, GoodsItem[]>({
    url: '/goods/relevant',
    method: 'GET',
    params: {
      limit,
    },
  })
}
