import instance from '../../../configs'
import { headers } from '../Tools'

export const createTodo = data => {
  return instance.post('/todo/create/', data, {
    headers,
  })
}

export const getTodos = query => {
  return instance.get(`/todo/all/${query}`, {
    headers,
  })
}

export const deleteTodo = id => {
  return instance.delete(`/todo/detail/${id}/`, {
    headers,
  })
}

export const completeTodo = (id, data) => {
  return instance.patch(`/todo/detail/${id}/`, data, {
    headers,
  })
}

export const addCategory = data => {
  return instance.post('/category/create/', data, {
    headers,
  })
}

export const getSingleTodo = id => {
  return instance.get(`/todo/detail/${id}/`, {
    headers,
  })
}

export const editTodo = (id, data) => {
  return instance.patch(`/todo/detail/${id}/`, data, {
    headers,
  })
}
