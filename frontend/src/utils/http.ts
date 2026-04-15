import axios, { AxiosError, AxiosInstance } from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import type { ApiResponse } from '@/types/api'

// 创建 axios 实例

const httpInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
})

// 请求拦截器：自动为登录态请求补充 Bearer Token
httpInstance.interceptors.request.use((config) => {
  try {
    const persistedUser = localStorage.getItem('user')
    if (persistedUser) {
      const parsed = JSON.parse(persistedUser) as {
        userInfo?: { token?: string }
      }
      const token = parsed?.userInfo?.token
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${token}`
      }
    }
  } catch {
    // 忽略本地存储解析错误，避免影响正常请求链路
  }
  return config
})

// 响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    const { code, msg, result } = response.data as ApiResponse<unknown>
    // 修复：code 可能是 string 或 number，统一转字符串比较
    if (code === '1' || String(code) === '200') {
      return result as typeof response.data
    }
    ElMessage.error(msg || '校园服务暂不可用')
    return Promise.reject(new Error(msg))
  },
  (error: unknown) => {
    const axiosError = error as AxiosError<{ message?: string; msg?: string }>
    const errorMessage =
      axiosError.response?.data?.message || axiosError.response?.data?.msg || '网络拥堵，请稍后刷新'
    ElMessage.error(errorMessage)
    return Promise.reject(error)
  },
)

export default httpInstance
