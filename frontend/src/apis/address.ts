import httpInstance from '@/utils/http'
import type { AddressApiItem, AddressFormData } from '@/types/api'

export const getAddressListAPI = (): Promise<AddressApiItem[]> => {
  return httpInstance({
    url: '/member/address',
    method: 'GET',
  })
}

export const createAddressAPI = (data: AddressFormData): Promise<AddressApiItem> => {
  return httpInstance({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

export const updateAddressAPI = (id: string, data: AddressFormData): Promise<AddressApiItem> => {
  return httpInstance({
    url: `/member/address/${id}`,
    method: 'PUT',
    data,
  })
}

export const deleteAddressAPI = (id: string): Promise<null> => {
  return httpInstance({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}

export const setDefaultAddressAPI = (id: string): Promise<null> => {
  return httpInstance({
    url: `/member/address/${id}/default`,
    method: 'PUT',
  })
}
