import React from 'react'
import { deleteTodo, completeTodo, createTodo } from '../API'
import { useNavigate } from 'react-router-dom'

export const useTodos = () => {
  const [loaded, setLoaded] = React.useState(false)
  const [createError, setError] = React.useState('')
  const token = localStorage.getItem('userToken')

  const navigate = useNavigate()
  
  const remove = React.useCallback(id => {
    setLoaded(true)

    deleteTodo(token, id)
    .finally(() => {
      setLoaded(false)
    })
  }, [token])

  const patch = React.useCallback((id, data) => {
    setLoaded(true)

    completeTodo(token, id, data)
      .finally(() => {
        setLoaded(false)
      })
  }, [token])

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
      remove,
      patch,
      post,
    },
  }
}