import React from 'react'
import { completeTodo, deleteTodo, getTodos } from '../API'

export const useList = () => {

  const [base, setBase] = React.useState('')

  const [loaded, setLoaded] = React.useState(false)
  const token = localStorage.getItem('userToken')

  const get = React.useCallback(() => {
    getTodos(token)
      .then(res => {
        setBase(res.data)
      })
  }, [token])

  const remove = React.useCallback(id => {
    setLoaded(true)

    deleteTodo(token, id)
    .then(get)
    .finally(() => {
      setLoaded(false)
    })
  }, [token, get])

  const complete = React.useCallback((id, data) => {
    setLoaded(true)

    completeTodo(token, id, data)
    .then(get)
    .finally(() => {
      setLoaded(false)
    })
  }, [token, get])

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