/**
 * @file Axios请求封装
 * @description 封装axios实例，配置请求/响应拦截器，处理token注入和错误提示
 */
import axios, { AxiosError, type AxiosInstance } from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import type { ApiResponse } from '@/types/api'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

let isRedirecting = false

const handleUnauthorized = async (): Promise<void> => {
  if (isRedirecting) return
  isRedirecting = true

  const userStore = useUserStore()
  const currentPath = window.location.pathname + window.location.search

  await userStore.clearUserInfo()

  if (currentPath !== '/login' && currentPath !== '/register') {
    ElMessage.warning('登录状态已失效，请重新登录')
    router.replace({ path: '/login', query: { redirect: currentPath } })
  }

  setTimeout(() => {
    isRedirecting = false
  }, 2000)
}

const httpInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000,
})

httpInstance.interceptors.request.use((config) => {
  const userStore = useUserStore()
  const token = userStore.userInfo?.token
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

httpInstance.interceptors.response.use(
  (response) => {
    const { code, msg, result } = response.data as ApiResponse<unknown>
    if (String(code) === '1') {
      return result as typeof response.data
    }
    if (code === '401') {
      handleUnauthorized()
      return Promise.reject(new Error(msg || '未授权'))
    }
    ElMessage.error(msg || '服务暂不可用')
    return Promise.reject(new Error(msg))
  },
  (error: unknown) => {
    const axiosError = error as AxiosError<{ message?: string; msg?: string; code?: string }>
    if (axiosError.response?.status === 401) {
      handleUnauthorized()
      return Promise.reject(error)
    }
    const errorMessage =
      axiosError.response?.data?.message || axiosError.response?.data?.msg || '网络异常，请稍后重试'
    ElMessage.error(errorMessage)
    return Promise.reject(error)
  },
)

export default httpInstance
