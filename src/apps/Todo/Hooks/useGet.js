import React from 'react'
import { getTodos } from '../API'

export const useGet = () => {

  const [base, setBase] = React.useState([])
  const token = localStorage.getItem('userToken')

  const get = React.useCallback(() => {
    getTodos(token)
      .then(res => {
        console.log(res);
        setBase(res.data)
      })
  }, [])

  React.useEffect(() => {
    get()
  }, [])

  return base
}