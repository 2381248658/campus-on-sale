/**
 * 首页 Banner 轮播图业务逻辑封装
 * 包含：数据请求、多环境响应格式兼容、异常容错处理
 */
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/homeAPI'

export function useBanner() {
  const bannerList = ref([])

  /**
   * 获取轮播图数据
   * @description 适配不同 Axios 拦截器配置下的响应格式
   */
  const getBanner = async () => {
    try {
      // distributionSite: '2' 为首页分类/商品页 banner 标识
      const res = await getBannerAPI({ distributionSite: '2' })

      /**
       * 响应数据脱壳处理 (兼容性逻辑)
       * 1. res.data.result: 标准 Axios 原始响应
       * 2. res.result: 拦截器已剥离 data 层
       * 3. res: 拦截器直接返回结果集
       */
      const data = res.data || res
      bannerList.value = data.result || data

      // console.log('Banner 数据加载成功:', bannerList.value)
    } catch (error) {
      // 异常捕获：防止接口报错导致页面逻辑崩溃，并清空列表防止界面残留异常状态
      console.error('Banner 获取失败:', error)
      bannerList.value = []
    }
  }

  // 挂载时自动初始化
  onMounted(() => {
    getBanner()
  })

  return {
    bannerList,
  }
}
