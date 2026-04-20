/**
 * @file Axios请求封装
 * @description 封装axios实例，配置请求/响应拦截器，处理token注入和错误提示
 */
import axios, { AxiosError, type AxiosInstance } from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import type { ApiResponse } from '@/types/api'

/** Axios实例 */
const httpInstance: AxiosInstance = axios.create({
  /** API基础地址 */
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  /** 请求超时时间（毫秒） */
  timeout: 10000,
})

/**
 * 请求拦截器
 * @description 自动注入Authorization token
 */
httpInstance.interceptors.request.use((config) => {
  try {
    const persistedUser = localStorage.getItem('user')
    if (persistedUser) {
      const parsed = JSON.parse(persistedUser) as { userInfo?: { token?: string } }
      const token = parsed?.userInfo?.token
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${token}`
      }
    }
  } catch {
    // ignore parsing errors
  }
  return config
})

/**
 * 响应拦截器
 * @description 统一处理响应数据和错误
 */
httpInstance.interceptors.response.use(
  (response) => {
    const { code, msg, result } = response.data as ApiResponse<unknown>
    if (code === '1' || String(code) === '200') {
      return result as typeof response.data
    }
    ElMessage.error(msg || '服务暂不可用')
    return Promise.reject(new Error(msg))
  },
  (error: unknown) => {
    const axiosError = error as AxiosError<{ message?: string; msg?: string }>
    const errorMessage =
      axiosError.response?.data?.message || axiosError.response?.data?.msg || '网络异常，请稍后重试'
    ElMessage.error(errorMessage)
    return Promise.reject(error)
  },
)

export default httpInstance
