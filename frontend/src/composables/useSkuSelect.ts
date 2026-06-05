/**
 * @file SKU 选择 Composable
 * @description 管理 SKU 选择结果，通过 computed 派生展示价格，不修改原始商品数据
 */
import { ref, computed, type Ref } from 'vue'
import type { GoodsDetail } from '@/types/api'

/** SKU 选择结果 */
export interface SkuResult {
  skuId?: string
  price?: number
  oldPrice?: number
  specsText?: string
}

export function useSkuSelect(goods: Ref<GoodsDetail>) {
  /** 当前 SKU 选择结果 */
  const skuObj = ref<SkuResult>({})

  /** 展示价格：选中 SKU 时取 SKU 价格，否则取商品原价 */
  const displayPrice = computed(() => skuObj.value.price ?? goods.value.price)

  /** 展示原价：选中 SKU 时取 SKU 原价，否则取商品原价 */
  const displayOldPrice = computed(() => skuObj.value.oldPrice ?? goods.value.oldPrice)

  /**
   * SKU 变更回调（由 SkuIndex 组件触发）
   * @param sku - 选中的 SKU 信息
   */
  const skuChange = (sku: SkuResult) => {
    skuObj.value = sku
  }

  /** 是否已选择完整规格 */
  const isSkuSelected = () => !!skuObj.value.skuId

  return { skuObj, displayPrice, displayOldPrice, skuChange, isSkuSelected }
}
