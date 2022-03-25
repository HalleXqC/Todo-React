import React from 'react'
import { signIn } from '../API'

export const useLogin = () => {
  const [loaded, setLoaded] = React.useState(false)

  const post = React.useCallback((data) => {
    setLoaded(true)

    signIn(data)
      .then(res => {
        console.log(res)
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [])

  return {
    loaded,
    actions: {
      post,
    },
  }
}