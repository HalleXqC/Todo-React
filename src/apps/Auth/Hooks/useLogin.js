import React from 'react'
import { signIn } from '../API'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const [loaded, setLoaded] = React.useState(false)
  const [authError, setAuthError] = React.useState(null)
  const navigate = useNavigate()

  const post = React.useCallback((data) => {
    setLoaded(true)

    signIn(data)
      .then(res => {
        localStorage.setItem('userToken', res.data.auth_token)
        navigate('/')
      })
      .catch(() => {
        setAuthError('Неправильный email или пароль')
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [])

  return {
    authError,
    loaded,
    actions: {
      post,
    },
  }
}