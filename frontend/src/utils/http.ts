import axios, { AxiosError, AxiosInstance } from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

// 创建 axios 实例

const httpInstance: AxiosInstance = axios.create({
  // 🔥 唯一修改：替换为 Apifox 云端 Mock 完整地址（包含你的接口前缀）
  baseURL: 'http://localhost:3000',
  timeout: 10000,
})

// 响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    const { code, msg, result } = response.data
    // 修复：code 可能是 string 或 number，统一转字符串比较
    if (code === '1' || String(code) === '200') {
      return result
    }
    ElMessage.error(msg || '校园服务暂不可用')
    return Promise.reject(new Error(msg))
  },
  (error: AxiosError<{ message?: string }>) => {
    ElMessage.error(error.response?.data?.message || '网络拥堵，请稍后刷新')
    return Promise.reject(error)
  },
)

export default httpInstance
