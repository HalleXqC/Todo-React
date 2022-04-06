import React from 'react'
import { addCategory, getCategories } from '../API';

export const useCategories = () => {

  const [categories, setCategories] = React.useState([])
  const [error, setError] = React.useState('')
  const token = localStorage.getItem('userToken')

  const get = React.useCallback(() => {
    getCategories(token)
      .then(res => {
        setCategories(res.data)
      })
  }, [token])

  const post = React.useCallback(data => {

    const promise = new Promise((resolve, reject) => {
      addCategory(token, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          setError(err.response.data)
          reject()
        })
    })

    return promise

  }, [token])



  React.useEffect(() => {
    get()
  }, [get])

  return {
    categories,
    error,
    post,
  }

}