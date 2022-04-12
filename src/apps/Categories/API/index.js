import instance from "../../../configs"
import { headers } from "../Tools"

export const getCategories = () => {
  return instance.get(`/category/`, {
    headers,
  })
}

export const getCategory = id => {
  return instance.get(`/category/detail/${id}`, {
    headers,
  })
}