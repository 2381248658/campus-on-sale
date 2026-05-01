export const CAMPUS_LOCATIONS = [
  '一号宿舍楼代收点',
  '二号宿舍楼代收点',
  '三号宿舍楼代收点',
  '四号宿舍楼代收点',
  '五号宿舍楼代收点',
  '六号宿舍楼代收点',
] as const

export const PROTECTED_PATHS = ['/checkout', '/pay', '/member'] as const

export const DEBOUNCE_DELAY = {
  CART_COUNT: 300,
  SEARCH: 500,
} as const
