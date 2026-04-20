export interface ApiResponse<T> {
  code: string
  msg: string
  result: T
}

export interface LoginParams {
  account: string
  password: string
}

export interface RegisterParams {
  account: string
  password: string
  nickname?: string
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

export interface RelevantGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

export interface Banner {
  id: string
  imgUrl: string
}

export interface HotRecommend {
  id: string
  title: string
  alt: string
  picture: string
}

export interface FreshGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

export interface CategoryGoods {
  id: string
  name: string
  desc: string
  price: number
  picture: string
}

export interface CategoryHead {
  id: string
  name: string
  subtitle: string
  goods: CategoryGoods[]
  children?: Array<{ id: string; name: string; picture?: string }>
}

export interface HomeProduct {
  id: string
  name: string
  picture: string
  goods: CategoryGoods[]
}

export interface ChildCategory {
  id: string
  name: string
  picture: string
  goods: CategoryGoods[]
}

export interface CategoryDetail {
  id: string
  name: string
  subtitle: string
  picture: string
  children: ChildCategory[]
}

export interface CategoryParams {
  id?: string
}

export interface SubCategoryFilter {
  id: string
  name: string
  parentId: string
  parentName: string
  categories: Array<{ id: string; name: string }>
}

export interface PaginationParams {
  page?: number
  pageSize?: number
}

export interface PaginatedResult<T> {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: T[]
}

export interface GoodsParams {
  id?: string
}

export interface SkuSpec {
  name: string
  valueName: string
}

export interface Sku {
  id: string
  inventory: number
  price: number
  oldPrice: number
  specs: SkuSpec[]
}

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

export interface HotGoodsParams {
  id: string
  type: number
  limit?: number
}

export interface LikeListParams {
  limit?: number
}

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

export interface AddCartParams {
  skuId: string
  count?: number
}

export interface UpdateCartParams {
  selected?: boolean
  count?: number
}

export interface DeleteCartParams {
  ids: string[]
}

export interface SelectAllParams {
  selected: boolean
}

export interface MergeCartItem {
  skuId: string
  selected: boolean
  count: number
}

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

export interface AddressApiItem extends Omit<Address, 'id'> {
  id?: string
  _id?: string
}

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

export interface DeliveryAddressSnapshot {
  receiver: string
  contact: string
  provinceCode?: string
  cityCode?: string
  countyCode?: string
  address: string
  fullLocation?: string
}

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

export interface OrderSummary {
  goodsCount: number
  totalPrice: number
  postFee: number
  discountMoney: number
  totalPay: number
}

export interface CheckoutInfo {
  userAddresses: Address[]
  goods: OrderGoods[]
  summary: OrderSummary
}

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

export interface CreateOrderResult {
  id: string
  payMoney: number
}

export interface OrderListParams {
  orderState?: number
  page?: number
  pageSize?: number
}

export interface OrderItem {
  id: string
  createTime: string | Date
  orderState: number
  payMoney: number
  totalNum: number
  skus?: Array<{ id: string; name: string; picture: string; price: number; count: number; attrsText: string }>
}

export interface OrderDetail {
  id: string
  createTime: string | Date
  orderState: number
  payMoney: number
  userAddresses: DeliveryAddressSnapshot
  goods: OrderGoods[]
  summary: OrderSummary
}
