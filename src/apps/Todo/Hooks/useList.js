import React from 'react'
import { completeTodo, deleteTodo, getTodos } from '../API'
import { useSelector } from 'react-redux'

export const useList = category => {
  const [base, setBase] = React.useState('')

  const [loaded, setLoaded] = React.useState(false)

  const userToken = useSelector(s => s.authReducer.userToken)

  const get = React.useCallback(() => {
    getTodos(category, userToken)
      .then(res => {
        setBase(res.data)
      })
  }, [category, userToken])

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
  }, [get, userToken])

  return {
    base,
    loaded,
    actions: {
      remove,
      complete,
    },
  }
}
