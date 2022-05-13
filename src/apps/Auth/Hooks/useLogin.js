import React from 'react'
import { signIn } from '../API'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleSetUserToken } from '../../../redux/reducers/authReducer/actions'

export const useLogin = () => {
  const [loaded, setLoaded] = React.useState(false)
  const [authError, setAuthError] = React.useState(null)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const post = React.useCallback((data) => {
    setLoaded(true)

    signIn(data)
      .then(res => {
        localStorage.setItem('userToken', res.data.auth_token)
        dispatch(handleSetUserToken(res.data.auth_token))
        navigate('/')
      })
      .catch(() => {
        setAuthError('Неправильный email или пароль')
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [navigate])

  return {
    authError,
    loaded,
    actions: {
      post,
    },
  }
}
