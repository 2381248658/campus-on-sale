// mock/modules/cart.js
import Mock from 'mockjs'

export const baseURL = '/api/campus/v1'
export let mockCart = []

// 生成商品信息的函数，与home.js保持一致
function generateGoodsInfo(id) {
  // 根据ID的最后一位字符的ASCII码决定商品类型（兼容GUID格式）
  const lastChar = id.slice(-1)
  const type = (lastChar.charCodeAt(0) % 3)

  // 使用ID作为种子生成一致的商品名称
  let seed = 0;
  for (let i = 0; i < id.length; i++) {
    seed += id.charCodeAt(i);
  }

  // 基于种子的伪随机数生成函数
  function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  // 基于种子生成一致的随机索引
  function getSeededIndex(seed, max) {
    return Math.floor(seededRandom(seed) * max);
  }

  // 商品模板
  const goodsTemplates = [
    // 模板0: 数码产品
    {
      name: `【校园惠】${['考研平板', '游戏笔记本', '专业相机', '设计显示器'][getSeededIndex(seed, 4)]} - ${['九成新', '近全新', '全新'][getSeededIndex(seed + 1, 3)]}`,
      price: (Math.floor(seededRandom(seed + 2) * 3000) + 2000).toFixed(2),
      oldPrice: (Math.floor(seededRandom(seed + 3) * 3500) + 2500).toFixed(2),
    },
    // 模板1: 电子产品
    {
      name: `【校园惠】${['无线蓝牙耳机', '智能手表', '机械键盘', '游戏鼠标'][getSeededIndex(seed + 4, 4)]} - ${['学长自用', '全新未拆', '仅试戴'][getSeededIndex(seed + 5, 3)]}`,
      price: (Math.floor(seededRandom(seed + 6) * 900) + 100).toFixed(2),
      oldPrice: (Math.floor(seededRandom(seed + 7) * 1350) + 150).toFixed(2),
    },
    // 模板2: 二手教材
    {
      name: `【校园惠】${['考研英语真题', '高等数学教材', '专业课程辅导书', '英语六级词汇'][getSeededIndex(seed + 8, 4)]} - ${['含解析', '带笔记', '全新未用'][getSeededIndex(seed + 9, 3)]}`,
      price: (Math.floor(seededRandom(seed + 10) * 80) + 20).toFixed(2),
      oldPrice: (Math.floor(seededRandom(seed + 11) * 120) + 30).toFixed(2),
    }
  ]

  // 获取对应的模板
  return goodsTemplates[type]
}

// 生成SKU信息的函数，与home.js保持一致
function generateSkuInfo(goodsId, skuIndex) {
  // 根据ID的最后一位字符的ASCII码决定商品类型（兼容GUID格式）
  const lastChar = goodsId.slice(-1)
  const type = (lastChar.charCodeAt(0) % 3)

  // 使用ID作为种子生成一致的商品名称
  let seed = 0;
  for (let i = 0; i < goodsId.length; i++) {
    seed += goodsId.charCodeAt(i);
  }

  // 基于种子的伪随机数生成函数
  function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  // 基于种子生成一致的随机索引
  function getSeededIndex(seed, max) {
    return Math.floor(seededRandom(seed) * max);
  }

  // SKU模板
  const skuTemplates = [
    // 模板0: 数码产品SKU
    {
      price: (Math.floor(seededRandom(seed + 2 + skuIndex) * 3000) + 2000).toFixed(2),
      oldPrice: (Math.floor(seededRandom(seed + 3 + skuIndex) * 3500) + 2500).toFixed(2),
      specs: [
        { name: '成色', valueName: ['九成新', '近全新', '全新'][getSeededIndex(seed + 1 + skuIndex, 3)] },
        { name: '容量', valueName: ['64G', '128G', '256G', '512G'][getSeededIndex(seed + 2 + skuIndex, 4)] },
        { name: '颜色', valueName: ['深空灰', '银色', '金色'][getSeededIndex(seed + 3 + skuIndex, 3)] },
      ],
    },
    // 模板1: 电子产品SKU
    {
      price: (Math.floor(seededRandom(seed + 6 + skuIndex) * 900) + 100).toFixed(2),
      oldPrice: (Math.floor(seededRandom(seed + 7 + skuIndex) * 1350) + 150).toFixed(2),
      specs: [
        { name: '成色', valueName: ['九成新', '近全新'][getSeededIndex(seed + 5 + skuIndex, 2)] },
        { name: '颜色', valueName: ['黑色', '白色', '蓝色', '红色'][getSeededIndex(seed + 6 + skuIndex, 4)] },
      ],
    },
    // 模板2: 二手教材SKU
    {
      price: (Math.floor(seededRandom(seed + 10 + skuIndex) * 80) + 20).toFixed(2),
      oldPrice: (Math.floor(seededRandom(seed + 11 + skuIndex) * 120) + 30).toFixed(2),
      specs: [
        { name: '科目', valueName: ['英语', '数学', '专业课', '政治'][getSeededIndex(seed + 9 + skuIndex, 4)] },
        { name: '版本', valueName: ['2023版', '2024版', '2025版'][getSeededIndex(seed + 10 + skuIndex, 3)] },
      ],
    }
  ]

  // 获取对应的模板
  return skuTemplates[type]
}

export default [
  // ---------------------------------------------------
  // 1. 全选更新 (PUT /member/cart/selected)
  // ---------------------------------------------------
  {
    url: `${baseURL}/member/cart/selected`,
    method: 'put',
    response: (config) => {
      const body = typeof config.body === 'string' ? JSON.parse(config.body) : config.body
      mockCart.forEach((item) => {
        item.selected = body.selected
      })
      return {
        code: '1',
        msg: '全选状态已同步',
        result: mockCart,
      }
    },
  },

  // ---------------------------------------------------
  // 2. 合并购物车 (POST /member/cart/merge) - 已加入去重
  // ---------------------------------------------------
  {
    url: `${baseURL}/member/cart/merge`,
    method: 'post',
    response: (config) => {
      const body = typeof config.body === 'string' ? JSON.parse(config.body) : config.body

      body.forEach((newItem) => {
        // 🚀 查找云端是否已有该商品
        const existItem = mockCart.find((item) => item.skuId === newItem.skuId)
        if (existItem) {
          // 如果有，累加数量，并同步勾选状态
          existItem.count += newItem.count
          existItem.selected = newItem.selected
        } else {
          // 如果没有，从SKU ID解析出商品ID和SKU索引
          // 正确处理包含下划线的商品ID（如senior_xxx）
          const skuId = newItem.skuId
          const firstUnderscore = skuId.indexOf('_')
          const lastUnderscore = skuId.lastIndexOf('_')
          const goodsId = skuId.substring(firstUnderscore + 1, lastUnderscore)
          const skuIndex = parseInt(skuId.substring(lastUnderscore + 1)) - 1

          // 获取原商品信息和SKU信息
          const goodsInfo = generateGoodsInfo(goodsId)
          const skuInfo = generateSkuInfo(goodsId, skuIndex)

          // 生成规格文本
          const attrsText = skuInfo.specs.map(spec => `${spec.name}: ${spec.valueName}`).join('; ')

          // 补充 Mock 数据后存入
          mockCart.push({
            ...newItem,
            cartId: Mock.mock('@guid'),
            id: Mock.mock('@id'),
            name: goodsInfo.name,
            attrsText: attrsText,
            nowPrice: Number(skuInfo.price),
            oldPrice: Number(skuInfo.oldPrice),
            picture: newItem.picture || `https://picsum.photos/200/200?random=${Mock.mock('@id')}`,
          })
        }
      })

      return {
        code: '1',
        msg: '本地数据已去重合并至云端',
        result: mockCart,
      }
    },
  },

  // ---------------------------------------------------
  // 3. 基础购物车操作 (POST/GET/DELETE /member/cart)
  // ---------------------------------------------------
  {
    // 🚀 添加商品接口 - 已加入去重逻辑
    url: `${baseURL}/member/cart`,
    method: 'post',
    response: (config) => {
      const body = typeof config.body === 'string' ? JSON.parse(config.body) : config.body

      // 检查是否重复
      const existItem = mockCart.find((item) => item.skuId === body.skuId)

      // 从skuId解析出商品ID和SKU索引
      // 正确处理包含下划线的商品ID（如senior_xxx）
      const skuId = body.skuId
      const firstUnderscore = skuId.indexOf('_')
      const lastUnderscore = skuId.lastIndexOf('_')
      const goodsId = skuId.substring(firstUnderscore + 1, lastUnderscore)
      const skuIndex = parseInt(skuId.substring(lastUnderscore + 1)) - 1

      // 获取原商品信息和SKU信息
      const goodsInfo = generateGoodsInfo(goodsId)
      const skuInfo = generateSkuInfo(goodsId, skuIndex)

      // 生成规格文本
      const attrsText = skuInfo.specs.map(spec => `${spec.name}: ${spec.valueName}`).join('; ')

      if (existItem) {
        // 已存在：累加数量
        existItem.count += body.count || 1
        return { code: '1', msg: '数量已累加', result: existItem }
      } else {
        // 不存在：新增一行，使用原商品信息和SKU信息
        const newItem = {
          cartId: Mock.mock('@guid'),
          skuId: body.skuId,
          count: body.count || 1,
          name: goodsInfo.name,
          nowPrice: Number(skuInfo.price),
          oldPrice: Number(skuInfo.oldPrice),
          picture: `https://picsum.photos/200/200?random=${Mock.mock('@id')}`,
          selected: true,
          attrsText: attrsText,
        }
        mockCart.push(newItem)
        return { code: '1', msg: '添加成功', result: newItem }
      }
    },
  },
  {
    url: `${baseURL}/member/cart`,
    method: 'get',
    response: () => ({ code: '1', msg: 'success', result: mockCart }),
  },
  {
    url: `${baseURL}/member/cart`,
    method: 'delete',
    response: (config) => {
      const body = typeof config.body === 'string' ? JSON.parse(config.body) : config.body
      const ids = body.ids || []
      mockCart = mockCart.filter((item) => !ids.includes(item.skuId))
      return { code: '1', msg: '删除成功', result: null }
    },
  },

  // ---------------------------------------------------
  // 4. 单选/数量更新 (PUT /member/cart/:id)
  // ---------------------------------------------------
  {
    url: RegExp(`${baseURL}/member/cart/\\w+`),
    method: 'put',
    response: (config) => {
      const skuId = config.url.split('/').pop()
      const body = typeof config.body === 'string' ? JSON.parse(config.body) : config.body

      // 🚀 这里的 find 现在只会找到唯一的一条数据了
      const item = mockCart.find((i) => i.skuId === skuId)

      if (item) {
        if (body.selected !== undefined) item.selected = body.selected
        if (body.count !== undefined) item.count = body.count
      }
      return {
        code: '1',
        msg: '更新成功',
        result: item || null,
      }
    },
  },
]
