/**
 * @file 地址相关接口
 * @description 收货地址增删改查API
 */
import httpInstance from '@/utils/http'
import type { AddressApiItem, AddressFormData } from '@/types/api'

/**
 * 获取地址列表
 * @returns 地址列表
 */
export const getAddressListAPI = (): Promise<AddressApiItem[]> => {
  return httpInstance({ url: '/member/address', method: 'GET' })
}

/**
 * 新增地址
 * @param data - 地址信息
 * @returns 新增的地址
 */
export const createAddressAPI = (data: AddressFormData): Promise<AddressApiItem> => {
  return httpInstance({ url: '/member/address', method: 'POST', data })
}

/**
 * 更新地址
 * @param id - 地址ID
 * @param data - 地址信息
 * @returns 更新后的地址
 */
export const updateAddressAPI = (id: string, data: AddressFormData): Promise<AddressApiItem> => {
  return httpInstance({ url: `/member/address/${id}`, method: 'PUT', data })
}

/**
 * 删除地址
 * @param id - 地址ID
 */
export const deleteAddressAPI = (id: string): Promise<null> => {
  return httpInstance({ url: `/member/address/${id}`, method: 'DELETE' })
}

/**
 * 设置默认地址
 * @param id - 地址ID
 */
export const setDefaultAddressAPI = (id: string): Promise<null> => {
  return httpInstance({ url: `/member/address/${id}/default`, method: 'PUT' })
}
