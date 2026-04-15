import httpInstance from '@/utils/http'
import type { LoginParams, LoginResult, RelevantGoods, LikeListParams } from '@/types/api'

// ============================================
// 用户相关接口：登录、个人中心推荐等
// ============================================

/**
 * 用户登录
 * @param account - 学号/账号
 * @param password - 密码
 */
export const loginAPI = ({ account, password }: LoginParams): Promise<LoginResult> => {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password,
    },
  })
}

// ============================================
// 个人中心猜你喜欢模块
// ============================================

export const getLikeListAPI = ({ limit = 4 }: LikeListParams = {}): Promise<RelevantGoods[]> => {
  return httpInstance({
    url: '/goods/relevant',
    params: {
      limit,
    },
  })
}
