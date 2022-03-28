import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createTodo } from '../API'

export const useCreate = () => {
  const [loaded, setLoaded] = React.useState(false)
  const token = localStorage.getItem('userToken')
  const navigate = useNavigate()

  const post = React.useCallback((data) => {
    setLoaded(true)

    createTodo(data, token)
      .then(() => {
        navigate('/')
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [])

  return {
    loaded,
    actions: {
      post,
    },
  }
}