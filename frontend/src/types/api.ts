/**
 * @file API 类型定义
 * @description 前后端接口的请求参数、响应数据、业务实体等 TypeScript 类型
 */

/** 通用接口响应结构 */
export interface ApiResponse<T> {
  code: string
  msg: string
  result: T
}

/** 登录请求参数 */
export interface LoginParams {
  account: string
  password: string
}

/** 注册请求参数 */
export interface RegisterParams {
  account: string
  password: string
  nickname?: string
}

/** 登录/注册成功返回的用户信息（含 token） */
export interface LoginResult {
  id: string
  account: string
  nickname: string
  avatar: string
  token: string
}

/** 用户基本信息（不含 token） */
export interface UserInfo {
  id: string
  account: string
  nickname: string
  avatar: string
}

/** 猜你喜欢 / 相关推荐商品 */
export interface RelevantGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

/** 首页轮播图 */
export interface Banner {
  id: string
  imgUrl: string
}

/** 人气推荐 */
export interface HotRecommend {
  id: string
  title: string
  alt: string
  picture: string
}

/** 新鲜好物 */
export interface FreshGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

/** 分类/板块下的商品卡片 */
export interface CategoryGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

/** 分类导航头（含子分类与商品预览） */
export interface CategoryHead {
  id: string
  name: string
  subtitle: string
  goods: CategoryGoods[]
  children?: Array<{ id: string; name: string; picture?: string }>
}

/** 首页商品板块 */
export interface HomeProduct {
  id: string
  name: string
  picture: string
  goods: CategoryGoods[]
}

/** 二级分类（含下属商品） */
export interface ChildCategory {
  id: string
  name: string
  picture: string
  goods: CategoryGoods[]
}

/** 一级分类详情 */
export interface CategoryDetail {
  id: string
  name: string
  subtitle: string
  picture: string
  children: ChildCategory[]
}

/** 分类查询参数 */
export interface CategoryParams {
  id?: string
}

/** 二级分类页筛选条件 */
export interface SubCategoryFilter {
  id: string
  name: string
  parentId: string
  parentName: string
  categories: Array<{ id: string; name: string }>
}

/** 分页查询参数 */
export interface PaginationParams {
  page?: number
  pageSize?: number
}

/** 分页响应结果 */
export interface PaginatedResult<T> {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}

/** 商品详情查询参数 */
export interface GoodsParams {
  id?: string
}

/** SKU 规格项（名称 + 选中值） */
export interface SkuSpec {
  name: string
  valueName: string
}

/** 商品 SKU（库存、价格、规格组合） */
export interface Sku {
  id: string
  inventory: number
  price: number
  oldPrice: number
  specs: SkuSpec[]
}

/** 商品详情 */
export interface GoodsDetail {
  id: string
  name: string
  price: number
  oldPrice: number
  mainPictures: string[]
  specs: Array<{
    name: string
    values: Array<{ name: string; picture?: string; desc?: string }>
  }>
  skus: Sku[]
  details: { pictures: string[]; properties: Array<{ name: string; value: string }> }
  categories: Array<{ id: string; name: string }>
  desc?: string
  inventory?: number
  salesCount?: number | string
  commentCount?: number | string
  collectCount?: number | string
  brand?: { name: string }
}

/** 热门商品查询参数 */
export interface HotGoodsParams {
  id: string
  type: number
  limit?: number
}

/** 猜你喜欢列表查询参数 */
export interface LikeListParams {
  limit?: number
}

/** 购物车条目 */
export interface CartItem {
  id: string
  skuId: string
  goodsId: string | null
  name: string
  picture: string
  price: number
  nowPrice?: number
  count: number
  selected: boolean
  stock: number
  attrsText: string
}

/** 加入购物车参数 */
export interface AddCartParams {
  skuId: string
  count?: number
}

/** 更新购物车条目参数 */
export interface UpdateCartParams {
  selected?: boolean
  count?: number
}

/** 删除购物车条目参数 */
export interface DeleteCartParams {
  ids: string[]
}

/** 全选/取消全选参数 */
export interface SelectAllParams {
  selected: boolean
}

/** 合并购物车时的本地条目 */
export interface MergeCartItem {
  skuId: string
  selected: boolean
  count: number
}

/** 收货地址 */
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

/** 地址接口返回项（新建时 id 可能为空或使用 _id） */
export interface AddressApiItem extends Omit<Address, 'id'> {
  id?: string
  _id?: string
}

/** 新增/编辑地址表单数据 */
export interface AddressFormData {
  receiver: string
  contact: string
  provinceCode?: string
  cityCode?: string
  countyCode?: string
  address: string
  fullLocation?: string
  isDefault?: number
}

/** 订单中的收货地址快照 */
export interface DeliveryAddressSnapshot {
  receiver: string
  contact: string
  provinceCode?: string
  cityCode?: string
  countyCode?: string
  address: string
  fullLocation?: string
}

/** 订单商品行 */
export interface OrderGoods {
  id: string
  name: string
  picture: string
  price: number
  count: number
  attrsText: string
  totalPrice: number
  totalPayPrice: number
  skuId: string
}

/** 订单金额汇总 */
export interface OrderSummary {
  goodsCount: number
  totalPrice: number
  postFee: number
  discountMoney: number
  totalPay: number
}

/** 结算页信息（地址、商品、金额汇总） */
export interface CheckoutInfo {
  userAddresses: Address[]
  goods: OrderGoods[]
  summary: OrderSummary
}

/** 创建订单参数 */
export interface CreateOrderParams {
  deliveryTimeType?: number
  payType?: number
  payChannel?: number
  buyerMessage?: string
  goods: Array<{ skuId: string; count: number }>
  addressId?: string
  address?: string
  receiver?: string
  contact?: string
  deliveryAddress?: Address
}

/** 创建订单成功返回 */
export interface CreateOrderResult {
  id: string
  payMoney: number
}

/** 订单列表查询参数 */
export interface OrderListParams {
  orderState?: number
  page?: number
  pageSize?: number
}

/** 订单列表项 */
export interface OrderItem {
  id: string
  createTime: string | Date
  orderState: number
  payMoney: number
  totalNum: number
  skus?: Array<{ id: string; name: string; picture: string; price: number; count: number; attrsText: string }>
}

/** 订单详情 */
export interface OrderDetail {
  id: string
  createTime: string | Date
  orderState: number
  payMoney: number
  userAddresses: DeliveryAddressSnapshot
  goods: OrderGoods[]
  summary: OrderSummary
}
