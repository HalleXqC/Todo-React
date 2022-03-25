import axios from '../../../configs'

export const signUp = data => {
  return axios.post('/auth/users/', data)
}

export const signIn = data => {
  return axios.post('/auth/token/login/', data)
}
