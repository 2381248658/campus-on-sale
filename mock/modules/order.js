// mock/modules/order.js
import Mock from 'mockjs'
import { mockCart } from './cart.js'

const baseURL = '/api/campus/v1'

// 模拟订单数据存储（内存中，刷新后丢失；可扩展为 localStorage）
let mockOrders = [] // 全局模拟订单列表

// 生成商品信息的函数，与home.js和cart.js保持一致
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

// 生成SKU信息的函数，与home.js和cart.js保持一致
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

// 辅助函数：从购物车生成订单项
const generateOrderItemFromCart = (cartItem) => {
  // 从SKU ID解析出商品ID和SKU索引
  const skuId = cartItem.skuId
  const firstUnderscore = skuId.indexOf('_')
  const lastUnderscore = skuId.lastIndexOf('_')
  const goodsId = skuId.substring(firstUnderscore + 1, lastUnderscore)
  const skuIndex = parseInt(skuId.substring(lastUnderscore + 1)) - 1

  // 获取原商品信息和SKU信息
  const goodsInfo = generateGoodsInfo(goodsId)
  const skuInfo = generateSkuInfo(goodsId, skuIndex)

  return {
    id: Mock.mock('@guid'),
    skuId: cartItem.skuId,
    name: goodsInfo.name,
    price: Number(skuInfo.price),
    count: cartItem.count,
    picture: cartItem.picture,
    attrsText: cartItem.attrsText,
  }
}

// 辅助函数：生成新订单
const createNewOrder = (data) => {
  // 获取购物车中勾选的商品
  const selectedGoods = mockCart.filter(item => item.selected)

  // 生成订单商品列表
  const orderGoods = selectedGoods.map(cartItem => generateOrderItemFromCart(cartItem))

  // 计算订单金额信息
  const goodsCount = orderGoods.reduce((total, item) => total + item.count, 0)
  const totalPrice = orderGoods.reduce((total, item) => total + (item.price * item.count), 0)
  const postFee = totalPrice >= 99 ? 0 : 10.0
  const discountMoney = 0.0 // 可以根据需求添加优惠逻辑
  const totalPay = totalPrice + postFee - discountMoney

  const newOrder = {
    id: Mock.mock('@guid'),
    createTime: new Date().toISOString(),
    orderState: 1, // 1: 待支付, 2: 已支付, 3: 已发货 等
    payMoney: Number(totalPay.toFixed(2)), // 总金额
    userAddresses: data?.deliveryAddress || {
      // 模拟地址
      receiver: '模拟用户',
      contact: '123456789',
      fullLocation: '模拟地址',
      address: '详细地址',
    },
    goods: orderGoods,
    summary: {
      goodsCount,
      totalPrice: Number(totalPrice.toFixed(2)),
      totalPay: Number(totalPay.toFixed(2)),
    },
  }
  mockOrders.push(newOrder)
  return newOrder
}

export default [
  // 获取结账信息 (GET /member/order/pre)
  {
    url: `${baseURL}/member/order/pre`,
    method: 'get',
    response: () => {
      // 获取购物车中勾选的商品
      const selectedGoods = mockCart.filter(item => item.selected)

      // 生成结账商品列表
      const checkoutGoods = selectedGoods.map(cartItem => generateOrderItemFromCart(cartItem))

      // 计算汇总信息
      const goodsCount = checkoutGoods.reduce((total, item) => total + item.count, 0)
      const totalPrice = checkoutGoods.reduce((total, item) => total + (item.price * item.count), 0)
      const postFee = totalPrice >= 99 ? 0 : 10.0
      const discountMoney = 0.0 // 可以根据需求添加优惠逻辑
      const totalPay = totalPrice + postFee - discountMoney

      return {
        code: '1',
        msg: 'success',
        result: {
          userAddresses: [
            // 模拟用户地址列表
            {
              id: Mock.mock('@id'),
              receiver: '张三',
              contact: '13812345678',
              fullLocation: '北京市 海淀区',
              address: '清华大学宿舍',
            },
            {
              id: Mock.mock('@id'),
              receiver: '李四',
              contact: '13987654321',
              fullLocation: '上海市 浦东新区',
              address: '复旦大学宿舍',
            },
          ],
          goods: checkoutGoods,
          summary: {
            goodsCount,
            totalPrice: Number(totalPrice.toFixed(2)),
            postFee,
            discountMoney,
            totalPay: Number(totalPay.toFixed(2)),
          },
        },
      }
    },
  },
  // 创建订单 (POST /member/order)
  {
    url: `${baseURL}/member/order`,
    method: 'post',
    response: (config) => {
      const body = typeof config.body === 'string' ? JSON.parse(config.body) : config.body
      const newOrder = createNewOrder(body)
      return {
        code: '1',
        msg: '订单创建成功',
        result: {
          id: newOrder.id,
          payMoney: newOrder.payMoney,
          // 其他必要字段
        },
      }
    },
  },
  // 获取订单列表 (GET /member/order)
  {
    url: `${baseURL}/member/order`,
    method: 'get',
    response: ({ query }) => {
      const orderState = parseInt(query.orderState) || 0 // 0: 全部
      const page = parseInt(query.page) || 1
      const pageSize = parseInt(query.pageSize) || 10

      let filteredOrders = mockOrders
      if (orderState !== 0) {
        filteredOrders = mockOrders.filter((order) => order.orderState === orderState)
      }

      const total = filteredOrders.length
      const start = (page - 1) * pageSize
      const items = filteredOrders.slice(start, start + pageSize)

      return {
        code: '1',
        msg: 'success',
        result: {
          counts: total,
          pageSize,
          pages: Math.ceil(total / pageSize),
          page,
          items,
        },
      }
    },
  },
  // 获取单个订单详情 (GET /member/order/{id})
  {
    url: RegExp(`${baseURL}/member/order/\\w+`), // 正则匹配动态 ID
    method: 'get',
    response: (config) => {
      const id = config.url.split('/').pop() // 提取订单 ID
      const order = mockOrders.find((o) => o.id === id)
      if (order) {
        return {
          code: '1',
          msg: 'success',
          result: order,
        }
      }
      return {
        code: '0',
        msg: '订单不存在',
        result: null,
      }
    },
  },
]
