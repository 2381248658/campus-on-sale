// ============================================
// 通用响应类型（保持与你后端格式一致）
// ============================================

export interface ApiResponse<T> {
  code: string
  msg: string
  result: T
}

// ============================================
// 用户管理模块
// ============================================

export interface LoginParams {
  account: string
  password: string
}

export interface LoginResult {
  id: string
  account: string
  nickname: string
  avatar: string
  token: string
}

export interface UserInfo {
  id: string
  account: string
  nickname: string
  avatar: string
}

// 猜你喜欢商品（个人中心）
export interface RelevantGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

// ============================================
// 首页模块
// ============================================

// 轮播图
export interface Banner {
  id: string
  imgUrl: string
}

// 人气推荐
export interface HotRecommend {
  id: string
  title: string
  alt: string
  picture: string
}

// 学长推荐（新鲜好物）
export interface FreshGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

// 分类导航中的商品
export interface CategoryGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

// 分类导航
export interface CategoryHead {
  id: string
  name: string
  subtitle: string
  goods: CategoryGoods[]
}

// 首页产品板块
export interface HomeProduct {
  id: string
  name: string
  picture: string
  goods: CategoryGoods[]
}

// ============================================
// 分类模块
// ============================================

// 子分类
export interface ChildCategory {
  id: string
  name: string
  picture: string
  goods: CategoryGoods[]
}

// 一级分类详情
export interface CategoryDetail {
  id: string
  name: string
  subtitle: string
  picture: string
  children: ChildCategory[]
}

// 分类查询参数
export interface CategoryParams {
  id?: string
}

// 二级分类筛选结果
export interface SubCategoryFilter {
  id: string
  name: string
  parentId: string
  parentName: string
  categories: Array<{
    id: string
    name: string
  }>
}

// 分页参数
export interface PaginationParams {
  page?: number
  pageSize?: number
}

// 分页结果包装
export interface PaginatedResult<T> {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}

// ============================================
// 商品模块
// ============================================

// 商品详情查询参数
export interface GoodsParams {
  id?: string
}

// SKU规格
export interface SkuSpec {
  name: string
  valueName: string
}

// SKU
export interface Sku {
  id: string
  inventory: number
  price: number
  oldPrice: number
  specs: SkuSpec[]
}

// 商品详情
export interface GoodsDetail {
  id: string
  name: string
  price: number
  oldPrice: number
  mainPictures: string[]
  specs: Array<{
    name: string
    values: Array<{
      name: string
      picture?: string
      desc?: string
    }>
  }>
  skus: Sku[]
  details: {
    pictures: string[]
    properties: Array<{
      name: string
      value: string
    }>
  }
  categories: Array<{
    id: string
    name: string
  }>
}

// 热销榜单查询参数
export interface HotGoodsParams {
  type?: string
}

// ============================================
// 购物车模块
// ============================================

// 购物车商品（根据你的业务补充完整字段）
export interface CartItem {
  id: string
  skuId: string
  name: string
  picture: string
  price: number
  count: number
  selected: boolean
  stock: number
  attrsText: string // 规格属性文本，如"颜色:黑色 尺码:XL"
}

// 添加到购物车参数
export interface AddCartParams {
  skuId: string
  count?: number
}

// 更新购物车商品参数
export interface UpdateCartParams {
  selected?: boolean
  count?: number
}

// 删除购物车参数
export interface DeleteCartParams {
  ids: string[]
}

// 全选参数
export interface SelectAllParams {
  selected: boolean
}

// 合并购物车参数（本地购物车项）
export interface MergeCartItem {
  skuId: string
  selected: boolean
  count: number
}

// ============================================
// 订单模块
// ============================================

// 地址信息
export interface Address {
  id: string
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
  fullLocation: string
}

// 订单商品
export interface OrderGoods {
  id: string
  name: string
  picture: string
  price: number
  count: number
  attrsText: string
  totalPrice: number
  totalPayPrice: number
}

// 订单汇总
export interface OrderSummary {
  goodsCount: number
  totalPrice: number
  postFee: number
  discountMoney: number
  totalPay: number
}

// 结账信息
export interface CheckoutInfo {
  userAddresses: Address[]
  goods: OrderGoods[]
  summary: OrderSummary
}

// 创建订单参数
export interface CreateOrderParams {
  deliveryAddress: Address
}

// 创建订单结果
export interface CreateOrderResult {
  id: string
  payMoney: number
}

// 订单列表查询参数
export interface OrderListParams {
  orderState?: number
  page?: number
  pageSize?: number
}

// 订单项
export interface OrderItem {
  id: string
  createTime: string
  orderState: number
  payMoney: number
  totalNum: number
  skus: Array<{
    id: string
    name: string
    picture: string
    price: number
    count: number
    attrsText: string
  }>
}

// 订单详情
export interface OrderDetail {
  id: string
  createTime: string
  orderState: number
  payMoney: number
  userAddresses: Address
  goods: OrderGoods[]
  summary: OrderSummary
}
