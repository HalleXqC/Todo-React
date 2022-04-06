import React from 'react'
import { getTodos } from '../API'

export const useGet = () => {

  const [base, setBase] = React.useState(null)
  const token = localStorage.getItem('userToken')

  const get = React.useCallback(() => {
    getTodos(token)
      .then(res => {
        setBase(res.data)
      })
  }, [token])

  React.useEffect(() => {
    get()
  }, [get])

  return {
    base,
  }
}