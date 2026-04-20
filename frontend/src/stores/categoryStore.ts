/**
 * @file 分类状态管理
 * @description 管理商品分类导航数据
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/layout'
import type { CategoryHead } from '@/types/api'

export const useCategoryStore = defineStore('category', () => {
  /** 分类列表（用于顶部导航） */
  const categoryList = ref<CategoryHead[]>([])

  /**
   * 获取分类列表
   * @description 从服务器获取商品分类数据
   */
  const getCategory = async (): Promise<void> => {
    try {
      const res = await getCategoryAPI()
      categoryList.value = res || []
    } catch (error) {
      categoryList.value = []
      console.error('分类加载异常:', error)
    }
  }

  return { categoryList, getCategory }
})
