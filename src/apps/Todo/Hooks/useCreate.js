import React from 'react'
import { createTodo } from '../API'
import { useNavigate } from 'react-router-dom'

export const useCreate = () => {
  const [loaded, setLoaded] = React.useState(false)
  const [createError, setError] = React.useState('')
  const token = localStorage.getItem('userToken')
  const navigate = useNavigate()

  const post = React.useCallback(data => {
    setLoaded(true)

    createTodo(token, data)
      .then(() => {
        navigate('/')
      })
      .catch(err => {
        setError(err.response.data)
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [navigate, token])

  return {
    loaded,
    createError,
    actions: {
      post,
    },
  }
}