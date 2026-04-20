/**
 * @file 用户相关接口
 * @description 登录、注册、猜你喜欢等用户相关API
 */
import httpInstance from '@/utils/http'
import type {
  LoginParams,
  LoginResult,
  RegisterParams,
  RelevantGoods,
  LikeListParams,
} from '@/types/api'

/**
 * 用户登录
 * @param params - 登录参数（account账号、password密码）
 * @returns 用户信息（含token）
 */
export const loginAPI = ({ account, password }: LoginParams): Promise<LoginResult> => {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: { account, password },
  })
}

/**
 * 用户注册
 * @param params - 注册参数（account账号、password密码、nickname昵称）
 * @returns 用户信息（含token）
 */
export const registerAPI = ({
  account,
  password,
  nickname,
}: RegisterParams): Promise<LoginResult> => {
  return httpInstance({
    url: '/register',
    method: 'POST',
    data: { account, password, nickname },
  })
}

/**
 * 获取猜你喜欢商品列表
 * @param params - 查询参数（limit数量，默认4）
 * @returns 商品列表
 */
export const getLikeListAPI = ({ limit = 4 }: LikeListParams = {}): Promise<RelevantGoods[]> => {
  return httpInstance({ url: '/goods/relevant', params: { limit } })
}
