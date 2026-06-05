/**
 * @file 商品详情 Composable
 * @description 封装商品详情数据获取、加载状态、错误处理及路由参数监听
 */
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getGoodsDetailAPI } from '@/apis/detail'
import type { GoodsDetail } from '@/types/api'

export function useGoodsDetail() {
  const route = useRoute()

  /** 商品详情数据 */
  const goods = ref<GoodsDetail>({} as GoodsDetail)
  /** 加载状态 */
  const loading = ref(true)
  /** 错误状态 */
  const error = ref(false)

  /**
   * 获取商品详情
   * @param id - 商品ID，默认取当前路由参数
   */
  const getGoods = async (id: string | string[] = route.params.id) => {
    loading.value = true
    error.value = false
    try {
      const res = await getGoodsDetailAPI(id as string)
      goods.value = res
    } catch (err) {
      console.error('获取商品详情失败:', err)
      error.value = true
    } finally {
      loading.value = false
    }
  }

  onMounted(() => getGoods())

  onBeforeRouteUpdate((to) => {
    getGoods(to.params.id)
  })

  return { goods, loading, error, getGoods }
}
