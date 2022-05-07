import React from 'react'
import { addCategory, editTodo, getSingleTodo } from '../API'
import { useNavigate, useParams } from 'react-router-dom'

export const usePage = () => {
  const { id } = useParams()

  const [singleTodo, setSingleTodo] = React.useState(null)

  const [loaded, setLoaded] = React.useState(false)

  const [categoryError, setError] = React.useState('')

  const navigate = useNavigate()

  const get = React.useCallback(id => {
    getSingleTodo(id)
      .then(res => {
        setSingleTodo(res.data)
      })
  }, [])

  const edit = React.useCallback(data => {
    setLoaded(true)

    editTodo(id, data)
      .then(() => {
        navigate('/')
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [id, navigate])

  const editWithNewCategory = React.useCallback((categoryData, editData) => {
    addCategory(categoryData)
      .then(res => {
        edit({ ...editData, category: res.data.id })
      })
      .catch(err => {
        setError(err.response.data)
      })
  }, [edit])

  React.useEffect(() => {
    get(id)
  }, [get, id])

  return {
    singleTodo,
    loaded,
    categoryError,
    actions: {
      edit,
      editWithNewCategory,
    },
  }
}
