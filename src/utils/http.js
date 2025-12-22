import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

const httpInstance = axios.create({
  baseURL: '/api/campus/v1',
  timeout: 10000,
})

// 响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    const { code, msg, result } = response.data
    // 兼容字符串 '1' 或数字 200 的成功状态
    if (code === '1' || code === 200) {
      return result // 🚀 关键：直接返回业务数据结果
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
