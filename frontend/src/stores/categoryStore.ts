import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/layoutAPI'
import type { CategoryHead } from '@/types/api'

export const useCategoryStore = defineStore('category', () => {
  // ============================================
  // State
  // ============================================

  // 导航列表中的数据
  const categoryList = ref<CategoryHead[]>([])

  // ============================================
  // Actions
  // ============================================

  /**
   * 获取分类导航数据
   */
  const getCategory = async (): Promise<void> => {
    try {
      const res = await getCategoryAPI()
      categoryList.value = res || []
      // console.log('校园惠导航栏加载成功:', categoryList.value)
    } catch (error) {
      // 增强容错
      categoryList.value = []
      console.error('分类加载异常:', error)
    }
  }

  // ============================================
  // Return
  // ============================================

  return {
    categoryList,
    getCategory,
  }
})
