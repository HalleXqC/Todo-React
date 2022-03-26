import React from 'react'
import { createTodo } from '../API'

export const useCreate = () => {
  const [loaded, setLoaded] = React.useState(false)

  const post = React.useCallback((data) => {
    setLoaded(true)

    createTodo(data)
      .then(res => {
        alert(res)
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