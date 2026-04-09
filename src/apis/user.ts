// 用户相关接口封装：登录、个人中心推荐等
import httpInstance from '@/utils/http'
import type { UserInfo } from '@/stores/userStore'

// 定义登录参数接口，消灭 any
export interface LoginParams {
  account: string
  password: string
}

export const loginAPI = ({ account, password }: LoginParams) => {
  // <any, UserInfo> 明确告诉 httpInstance：result 的类型是 UserInfo
  return httpInstance.post < any, UserInfo > ('/login', {
    account,
    password,
  })
}

// 个人中心猜你喜欢模块
export const getLikeListAPI = ({ limit = 4 }: { limit?: number } = {}) => {
  return httpInstance.get < any, any[] > ('/goods/relevant', {
    params: {
      limit,
    },
  })
}