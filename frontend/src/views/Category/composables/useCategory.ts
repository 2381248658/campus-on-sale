/**
 * 一级分类业务逻辑封装 (Hooks)
 * 核心功能：数据预初始化、响应式适配、路由切换监听
 */
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '@/apis/category'
import type { CategoryDetail } from '@/types/api'
import type { RouteLocationNormalized } from 'vue-router'

export function useCategory() {
  // 1. 数据初始化：预定义 children 数组防止模板 v-for 渲染因空指针引发白屏
  const categoryData = ref<CategoryDetail>({
    id: '',
    name: '',
    subtitle: '',
    picture: '',
    children: [],
  })

  const route = useRoute()

  /**
   * 获取分类详情数据
   * @param id - 分类ID，默认为当前路由参数 ID
   */
  const getCategory = async (id: string | string[] = route.params.id) => {
    try {
      if (!id) return

      const res = await getCategoryAPI(id as string)

      /**
       * 数据脱壳与容错处理：
       * 1. rawData: 兼容响应拦截器是否剥离 data 层的情况
       * 2. categoryData.value: 进一步剥离可能存在的 result 嵌套层级
       */
      const rawData = (res as any).data || res
      categoryData.value = rawData.result || rawData
    } catch (err) {
      // 容错处理：发生异常时重置基础结构，确保页面模板指令不报错
      categoryData.value = {
        id: '',
        name: '加载失败',
        subtitle: '',
        picture: '',
        children: [],
      }
      console.error('Category Data Fetching Error:', err)
    }
  }

  // 组件挂载时执行初始化请求
  onMounted(() => getCategory())

  /**
   * 路由更新守卫：
   * 解决 Vue-Router 实例复用时（如同级分类切换）生命周期钩子不重复触发的问题
   */
  onBeforeRouteUpdate((to: RouteLocationNormalized) => {
    // 使用目标路由（to）的 ID 更新数据
    getCategory(to.params.id)
  })

  return {
    categoryData,
    getCategory,
  }
}
