import React from 'react'
import { signIn } from '../API'

export const useLogin = () => {
  const [loaded, setLoaded] = React.useState(false)
  const [authError, setAuthError] = React.useState(null)

  const post = React.useCallback((data) => {
    setLoaded(true)

    signIn(data)
      .then(res => {
        !res.auth_token
          ? setAuthError('Неправильный логин или пароль!')
          : alert('Success')
      })
      .catch(err => {
        setAuthError(err.toString())
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