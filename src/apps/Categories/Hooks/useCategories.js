import React from 'react'
import { getCategories, getCategory } from '../API'
import { useParams } from 'react-router-dom'

export const useCategories = () => {

  const [categories, setCategories] = React.useState(null)
  const [category, setCategory] = React.useState(null)

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

  React.useEffect(() => {
    get()
    if (id) getSingleCategory(id)
  }, [get, getSingleCategory, id])

  return {
    categories,
    category,
  }
}