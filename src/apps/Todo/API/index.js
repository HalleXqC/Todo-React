import instance from "../../../configs";

export const createTodo = data => {
  return instance.post('/todo/create', data)
}