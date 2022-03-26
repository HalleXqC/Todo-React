import instance from "../../../configs";

export const createTodo = (data, user) => {
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