import instance from '../../../configs'

export const signUp = data => {
  return instance.post('/auth/users/', data)
}

export const signIn = data => {
  return instance.post('/auth/token/login/', data)
}