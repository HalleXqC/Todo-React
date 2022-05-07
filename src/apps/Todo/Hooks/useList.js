import React from 'react'
import { completeTodo, deleteTodo, getTodos } from '../API'

export const useList = category => {
  const [base, setBase] = React.useState('')

  const [loaded, setLoaded] = React.useState(false)

  const get = React.useCallback(() => {
    getTodos(category)
      .then(res => {
        setBase(res.data)
      })
  }, [category])

  const remove = React.useCallback(id => {
    setLoaded(true)

    deleteTodo(id)
      .then(get)
      .finally(() => {
        setLoaded(false)
      })
  }, [get])

  const complete = React.useCallback((id, data) => {
    setLoaded(true)

    completeTodo(id, data)
      .then(get)
      .finally(() => {
        setLoaded(false)
      })
  }, [get])

  React.useEffect(() => {
    get()
  }, [get])

  return {
    base,
    loaded,
    actions: {
      remove,
      complete,
    },
  }
}
