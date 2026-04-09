import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

export interface ResData<T = unknown> {
  code: string | number
  msg: string
  result: T
}

// 创建 axios 实例（类型无问题，保留）
const httpInstance: AxiosInstance = axios.create({
  baseURL: '/api/campus/v1',
  timeout: 10000,
})

// 🔥 2. 响应拦截器：完整泛型传递 + 类型标注，彻底消除 any
httpInstance.interceptors.response.use(
  <T>(response: AxiosResponse<ResData<T>>) => {
    const { code, msg, result } = response.data
    if (code === 1 || code === 200 || code === '1') {
      return result
    }
    // 业务失败提示
    ElMessage.error(msg || '校园服务暂不可用')
    return response.data.result
  },
  // 🔥 4. 给错误标注 AxiosError 类型，消除隐式 any
  (error: AxiosError<ResData>) => {
    const errMsg = error.response?.data?.msg || error.message || '网络拥堵，请稍后刷新'
    ElMessage.error(errMsg)
    return Promise.reject(error)
  },
)

export default httpInstance
