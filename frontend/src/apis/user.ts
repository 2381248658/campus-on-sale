import httpInstance from '@/utils/http'
import type { LoginParams, LoginResult, RegisterParams, RelevantGoods, LikeListParams } from '@/types/api'

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

export const registerAPI = ({ account, password, nickname }: RegisterParams): Promise<LoginResult> => {
  return httpInstance({
    url: '/register',
    method: 'POST',
    data: {
      account,
      password,
      nickname,
    },
  })
}

export const getLikeListAPI = ({ limit = 4 }: LikeListParams = {}): Promise<RelevantGoods[]> => {
  return httpInstance({
    url: '/goods/relevant',
    params: {
      limit,
    },
  })
}
