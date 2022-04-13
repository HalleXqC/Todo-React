import React from 'react'
import { editCategory, getCategories, getCategory } from '../API'
import { useParams } from 'react-router-dom'
import { deleteCategory } from '../API/index'

export const useCategories = () => {

  const [categories, setCategories] = React.useState(null)
  const [category, setCategory] = React.useState(null)
  const [loaded, setLoaded] = React.useState(false)
  const [categoryError, setError] = React.useState('')

  const { id } = useParams()

  const get = React.useCallback(() => {
    getCategories()
      .then(res => {
        setCategories(res.data)
      })
  }, [])

  const getSingleCategory = React.useCallback((id) => {
    getCategory(id)
      .then(res => {
        setCategory(res.data)
      })
  }, [])

  const remove = id => {
    setLoaded(true)

    deleteCategory(id)
    .then(get)
    .finally(() => {
      setLoaded(false)
    })
  }

  const edit = (id, data) => {
    setLoaded(true)

    editCategory(id, data)
    .then(() => {
      get()
      setError('')
    })
    .catch(error => {
      setError(error.response)
    })
    .finally(() => {
      setLoaded(false)
    })
  }

  

  React.useEffect(() => {
    get()
    if (id) getSingleCategory(id)
  }, [get, getSingleCategory, id])

  return {
    categories,
    category,
    loaded,
    categoryError,
    actions: {
      remove,
      edit,
    }
  }
}