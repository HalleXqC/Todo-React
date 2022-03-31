import instance from "../../../configs";

export const createTodo = (user, data) => {
  return instance.post('/todo/create/', data, {
    headers: {
      'Authorization': `Token ${user}`
    }
  })
}

export const getTodos = user => {
  return instance.get('/todo/all/', {
    headers: {
      'Authorization': `Token ${user}`
    }
  })
}

export const deleteTodo = (user, id) => {
  return instance.delete(`/todo/detail/${id}/`, {
    headers: {
      'Authorization' : `Token ${user}`
    }
  })
}

export const completeTodo = (user, id, data) => {
  return instance.patch(`/todo/detail/${id}/`, data, {
    headers: {
      'Authorization': `Token ${user}`
    }
  })
}

export const getCategories = user => {
  return instance.get(`/category/`, {
    headers: {
      'Authorization': `Token ${user}`
    }
  })
}

export const addCategory = (user, data) => {
  return instance.post(`/category/create/`, data, {
    headers: {
      'Authorization': `Token ${user}`
    }
  })
}