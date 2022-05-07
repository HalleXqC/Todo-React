import React from 'react'
import { createTodo, addCategory } from '../API'
import { useNavigate } from 'react-router-dom'

export const useCreate = () => {
  const [loaded, setLoaded] = React.useState(false)
  const [createError, setError] = React.useState('')
  const navigate = useNavigate()

  const post = React.useCallback(data => {
    setLoaded(true)

    createTodo(data)
      .then(() => {
        navigate('/')
      })
      .catch(err => {
        setError(err.response.data)
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [navigate])

  const postWithCategory = React.useCallback((categoryData, todoData) => {
    addCategory(categoryData)
      .then(res => {
        post({ ...todoData, category: res.data.id })
      })
      .catch(err => {
        setError(err.response.data)
      })
  }, [post])

  return {
    loaded,
    createError,
    actions: {
      post,
      postWithCategory,
    },
  }
}
