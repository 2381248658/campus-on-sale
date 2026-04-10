// 用户相关接口封装：登录、个人中心推荐等
import httpInstance from '@/utils/http'

export const loginAPI = ({ account, password }) => {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password,
    },
  })
}

// 个人中心猜你喜欢模块
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url: '/goods/relevant',
    params: {
      limit,
    },
  })
}
