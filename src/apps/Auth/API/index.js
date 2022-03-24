import { API } from "./api"

export const signUp = data => {
  return API.post('auth/users/', JSON.stringify(data))
}

export const signIn = data => {
  return API.post('auth/token/login/', JSON.stringify(data))
}