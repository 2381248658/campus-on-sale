import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

//定义数据契约
export interface ResData<T = any> {
  code: string | number
  msg: string
  result: T
}

// 明确标注 httpInstance 是一个 AxiosInstance 实例
const httpInstance: AxiosInstance = axios.create({
  baseURL: '/api/campus/v1',
  timeout: 10000,
})

// 响应拦截器：明确标注 response 的类型，使其具备 ResData 的属性
httpInstance.interceptors.response.use(
  (response: AxiosResponse<ResData>) => {
    const { code, msg, result } = response.data
    if (code === '1' || code === 200) {
      return result
    }
    ElMessage.error(msg || '校园服务暂不可用')
    return Promise.reject(new Error(msg))
  },
  (error) => {
    ElMessage.error(error.response?.data?.message || '网络拥堵，请稍后刷新')
    return Promise.reject(error)
  },
)

export default httpInstance
