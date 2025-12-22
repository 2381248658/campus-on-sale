import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/layoutAPI'

export const useCategoryStore = defineStore('category', () => {
  // 导航列表中的数据
  const categoryList = ref([])


  // 定义函数操作数据
  const getCategory = async () => {
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

  return {
    categoryList,
    getCategory,
  }
})
