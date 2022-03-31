import React from 'react'

import { createTodo } from '../API'

export const useCreate = () => {
  const [loaded, setLoaded] = React.useState(false)
  const token = localStorage.getItem('userToken')
  const navigate = useNavigate()

  const post = React.useCallback(data => {
    setLoaded(true)

    createTodo(data, token)
      .then(() => {
        navigate('/')
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [navigate, token])

  return {
    loaded,
    actions: {
      post,
    },
  }
}