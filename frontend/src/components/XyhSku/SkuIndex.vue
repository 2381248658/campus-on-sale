<!--
 * SKU规格选择组件
 * 职责：
 * 1. 展示商品规格选项（颜色、尺寸等）
 * 2. 处理规格选中逻辑，实现规格互斥和库存校验
 * 3. 选完规格后通过 change 事件向父组件传递 SKU 信息
 -->
<template>
  <div class="goods-sku">
    <!-- 规格项列表 -->
    <dl v-for="item in goods.specs" :key="item.name">
      <dt>{{ item.name }}</dt>
      <dd>
        <!-- 图片类型规格按钮 -->
        <template v-for="val in item.values" :key="val.name">
          <img
            :class="{ selected: val.selected, disabled: val.disabled }"
            @click="clickSpecs(item, val)"
            v-if="val.picture"
            :src="val.picture"
            :title="val.name"
          />
          <!-- 文字类型规格按钮 -->
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

/** 路径字典的分隔符 */
const spliter = '★'

/** 路径字典类型：key 为规格组合，value 为对应的 skuId 数组 */
type PathMap = Record<string, string[]>

/** 规格值类型（扩展 selected/disabled 属性） */
interface SpecValue {
  name: string
  picture?: string
  desc?: string
  selected?: boolean
  disabled?: boolean
}

/** 规格项类型 */
interface SpecItem {
  id?: string
  name: string
  values: SpecValue[]
}

/**
 * 根据 skus 数据生成路径字典对象
 * @param skus - 所有的 sku 组合数据
 * @returns 路径字典对象
 */
const getPathMap = (skus: Sku[]): PathMap => {
  const pathMap: PathMap = {}
  if (skus && skus.length > 0) {
    skus.forEach((sku) => {
      if (sku.inventory > 0) {
        const specs = sku.specs.map((spec: SkuSpec) => spec.valueName)
        const powerSet = getPowerSet(specs)
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
 * 初始化规格按钮的禁用状态
 * @param specs - 规格项数组
 * @param pathMap - 路径字典
 */
function initDisabledStatus(specs: SpecItem[], pathMap: PathMap): void {
  if (specs && specs.length > 0) {
    specs.forEach((spec) => {
      spec.values.forEach((val) => {
        val.disabled = !pathMap[val.name]
      })
    })
  }
}

/**
 * 获取当前选中的规格值数组
 * @param specs - 规格项数组
 * @returns 选中规格数组，如 [undefined, '蓝色', undefined]
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
 * 更新规格按钮的禁用状态（点击时的核心匹配逻辑）
 * @param specs - 规格项数组
 * @param pathMap - 路径字典
 */
const updateDisabledStatus = (specs: SpecItem[], pathMap: PathMap): void => {
  specs.forEach((item, i) => {
    const selectedArr = getSelectedArr(specs)
    item.values.forEach((val) => {
      if (!val.selected) {
        selectedArr[i] = val.name
        const key = selectedArr.filter((value): value is string => !!value).join(spliter)
        val.disabled = !pathMap[key]
      }
    })
  })
}

/** 组件 props 定义 */
interface Props {
  goods: {
    specs: SpecItem[]
    skus: Sku[]
  }
}

const props = withDefaults(defineProps<Props>(), {
  goods: () => ({ specs: [], skus: [] }),
})

/** 组件 emits 定义 */
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

/** 路径字典缓存 */
let pathMap: PathMap = {}

watchEffect(() => {
  pathMap = getPathMap(props.goods.skus)
  initDisabledStatus(props.goods.specs, pathMap)
})

/**
 * 点击规格按钮处理函数
 * @param item - 当前规格项
 * @param val - 当前点击的规格值
 * @returns 是否处理成功
 */
const clickSpecs = (item: SpecItem, val: SpecValue): boolean => {
  if (val.disabled) return false

  if (val.selected) {
    val.selected = false
  } else {
    item.values.forEach((bv) => {
      bv.selected = false
    })
    val.selected = true
  }

  updateDisabledStatus(props.goods.specs, pathMap)

  const selectedArr = getSelectedArr(props.goods.specs).filter((value): value is string => !!value)
  if (selectedArr.length === props.goods.specs.length) {
    const skuId = pathMap[selectedArr.join(spliter)][0]
    const sku = props.goods.skus.find((sku: Sku) => sku.id === skuId)

    if (sku) {
      emit('change', {
        skuId: sku.id,
        price: sku.price,
        oldPrice: sku.oldPrice,
        inventory: sku.inventory,
        specsText: sku.specs
          .reduce((p: string, n: SkuSpec) => `${p} ${n.name}:${n.valueName}`, '')
          .trim(),
      })
    }
  } else {
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

  /* 选中状态 */
  &.selected {
    border-color: $campusColor;
  }

  /* 禁用状态 */
  &.disabled {
    opacity: 0.5;
    border-style: dashed;
    cursor: not-allowed;
    background-color: #f6f6f6;
  }
}

/* SKU 选择容器 */
.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  /* 规格项 */
  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    /* 规格名称 */
    dt {
      width: 50px;
      color: #999;
    }

    /* 规格值列表 */
    dd {
      flex: 1;
      color: #666;
      display: flex;
      flex-wrap: wrap;

      /* 图片类型规格按钮 */
      > img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }

      /* 文字类型规格按钮 */
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
