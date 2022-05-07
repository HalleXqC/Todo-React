import React from 'react'
import { signUp } from '../API'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
  const [loaded, setLoaded] = React.useState(false)
  const [regErrors, setRegErrors] = React.useState(null)
  const navigate = useNavigate()

  const post = React.useCallback(data => {
    setLoaded(true)

    signUp(data)
      .then(() => {
        navigate('/auth/login')
      })
      .catch(err => {
        setRegErrors(err.response.data)
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [navigate])

  return {
    regErrors,
    loaded,
    actions: {
      post,
    },
  }
}
