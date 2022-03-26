import React from 'react'
import { createTodo } from '../API'

export const useCreate = () => {
  const [loaded, setLoaded] = React.useState(false)
  const token = localStorage.getItem('userToken')

  const post = React.useCallback((data) => {
    setLoaded(true)

    createTodo(data, token)
      .then(res => {
        console.log(res)
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