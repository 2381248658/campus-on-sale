import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

const httpInstance = axios.create({
  // 🔥 唯一修改：替换为 Apifox 云端 Mock 完整地址（包含你的接口前缀）
  baseURL: 'https://m1.apifoxmock.com/m1/7606020-7344783-default',
  timeout: 10000,
})

// 响应拦截器 【完全不用改】
httpInstance.interceptors.response.use(
  (response) => {
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
