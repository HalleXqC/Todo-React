import React from 'react'
import { addCategory, getCategories } from '../API/index';

export const useCategories = () => {

  const [categories, setCategories] = React.useState([])
  const [newCategory, setNewCategory] = React.useState('')
  const [error, setError] = React.useState('')
  const token = localStorage.getItem('userToken')

  const get = React.useCallback(() => {
    getCategories(token)
      .then(res => {
        setCategories(res.data)
      })
  }, [token])

  const post = React.useCallback(data => {

    addCategory(token, data)
      .then(res => {
        setNewCategory(res.data)
      })
      .catch(err => setError(err.response.data))
  }, [token])

  React.useEffect(() => {
    get()
  }, [get])

  return {
    categories,
    newCategory,
    error,
    post,
  }

}