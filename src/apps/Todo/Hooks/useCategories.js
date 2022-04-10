import React from 'react'
import { getCategories } from '../API'

export const useCategories = () => {

  const [categories, setCategories] = React.useState([])

  const get = React.useCallback(() => {
    getCategories()
      .then(res => {
        setCategories(res.data)
      })
  }, [])

  React.useEffect(get, [get])

  return {
    categories,
  }
}