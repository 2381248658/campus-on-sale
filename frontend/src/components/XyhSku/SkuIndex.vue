<template>
  <div class="goods-sku">
    <!-- 修复1：key 替换为 item.name（规格名称唯一，无需id） -->
    <dl v-for="item in goods.specs" :key="item.name">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <img
            :class="{ selected: val.selected, disabled: val.disabled }"
            @click="clickSpecs(item, val)"
            v-if="val.picture"
            :src="val.picture"
            :title="val.name"
          />
          <span
            :class="{ selected: val.selected, disabled: val.disabled }"
            @click="clickSpecs(item, val)"
            v-else
          >
            {{ val.name }}
          </span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import getPowerSet from './power-set'
import type { Sku, SkuSpec } from '@/types/api'

// 路径字典的分隔符
const spliter = '★'

// 路径字典类型
type PathMap = Record<string, string[]>

// 规格值类型（扩展 selected/disabled 属性）
interface SpecValue {
  name: string
  picture?: string
  desc?: string
  selected?: boolean
  disabled?: boolean
}

// 规格项类型
interface SpecItem {
  // 修复2：id 改为可选属性（加?），兼容接口数据
  id?: string
  name: string
  values: SpecValue[]
}

/**
 * 根据 skus 数据得到路径字典对象
 * @param skus - 所有的 sku 组合
 */
const getPathMap = (skus: Sku[]): PathMap => {
  const pathMap: PathMap = {}
  if (skus && skus.length > 0) {
    skus.forEach((sku) => {
      // 1. 过滤出有效库存的 sku
      if (sku.inventory > 0) {
        // 2. 得到 sku 属性值数组 ['蓝色', '128G']
        const specs = sku.specs.map((spec: SkuSpec) => spec.valueName)
        // 3. 得到 sku 属性值数组的子集（幂集算法）
        const powerSet = getPowerSet(specs)
        // 4. 设置给路径字典对象
        powerSet.forEach((set) => {
          const key = set.join(spliter)
          if (!pathMap[key]) {
            pathMap[key] = []
          }
          pathMap[key].push(sku.id)
        })
      }
    })
  }
  return pathMap
}

/**
 * 初始化禁用状态
 */
function initDisabledStatus(specs: SpecItem[], pathMap: PathMap): void {
  if (specs && specs.length > 0) {
    specs.forEach((spec) => {
      spec.values.forEach((val) => {
        // 如果路径字典里查不到该名称，说明此规格初始就无货
        val.disabled = !pathMap[val.name]
      })
    })
  }
}

/**
 * 得到当前选中规格集合
 * @returns Array [undefined, '蓝色', undefined]
 */
const getSelectedArr = (specs: SpecItem[]): (string | undefined)[] => {
  const selectedArr: (string | undefined)[] = []
  specs.forEach((spec, index) => {
    const selectedVal = spec.values.find((val) => val.selected)
    if (selectedVal) {
      selectedArr[index] = selectedVal.name
    } else {
      selectedArr[index] = undefined
    }
  })
  return selectedArr
}

/**
 * 更新按钮的禁用状态（点击时的核心匹配逻辑）
 */
const updateDisabledStatus = (specs: SpecItem[], pathMap: PathMap): void => {
  specs.forEach((item, i) => {
    const selectedArr = getSelectedArr(specs)
    item.values.forEach((val) => {
      if (!val.selected) {
        // 尝试模拟：如果当前项被选中，路径是否还通畅
        selectedArr[i] = val.name
        const key = selectedArr.filter((value): value is string => !!value).join(spliter)
        val.disabled = !pathMap[key]
      }
    })
  })
}

// 组件 props 定义
interface Props {
  goods: {
    specs: SpecItem[]
    skus: Sku[]
  }
}

const props = withDefaults(defineProps<Props>(), {
  goods: () => ({ specs: [], skus: [] }),
})

// 组件 emits 定义
interface Emits {
  (
    e: 'change',
    value:
      | {
          skuId: string
          price: number
          oldPrice: number
          inventory: number
          specsText: string
        }
      | Record<string, never>,
  ): void
}

const emit = defineEmits<Emits>()

let pathMap: PathMap = {}

// 监听 goods 数据，一旦传入则初始化路径字典
watchEffect(() => {
  pathMap = getPathMap(props.goods.skus)
  initDisabledStatus(props.goods.specs, pathMap)
})

const clickSpecs = (item: SpecItem, val: SpecValue): boolean => {
  // 禁用状态点击无效
  if (val.disabled) return false

  // 选中与取消选中切换
  if (val.selected) {
    val.selected = false
  } else {
    // 同规格组排他逻辑
    item.values.forEach((bv) => {
      bv.selected = false
    })
    val.selected = true
  }

  // 点击后实时更新其他规格的禁用状态
  updateDisabledStatus(props.goods.specs, pathMap)

  // 产出选中结果
  const selectedArr = getSelectedArr(props.goods.specs).filter((value): value is string => !!value)
  // 如果所有规格都已选齐
  if (selectedArr.length === props.goods.specs.length) {
    const skuId = pathMap[selectedArr.join(spliter)][0]
    const sku = props.goods.skus.find((sku: Sku) => sku.id === skuId)

    if (sku) {
      // 触发 change 事件将完整 SKU 数据传递给父组件
      emit('change', {
        skuId: sku.id,
        price: sku.price,
        oldPrice: sku.oldPrice,
        inventory: sku.inventory,
        // 拼接规格字符串，例如: "颜色:红色 尺寸:XL"
        specsText: sku.specs
          .reduce((p: string, n: SkuSpec) => `${p} ${n.name}:${n.valueName}`, '')
          .trim(),
      })
    }
  } else {
    // 选不全时传出空对象
    emit('change', {})
  }
  return true
}
</script>

<style scoped lang="scss">
/* 规格按钮状态混合 */
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &.selected {
    border-color: $campusColor;
  }

  &.disabled {
    opacity: 0.5;
    border-style: dashed;
    cursor: not-allowed;
    background-color: #f6f6f6;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;
      display: flex;
      flex-wrap: wrap;

      > img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }

      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }
    }
  }
}
</style>
