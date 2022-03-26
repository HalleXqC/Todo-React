import React from "react";
import { signUp } from "../API";

export const useRegister = () => {
  const [loaded, setLoaded] = React.useState(false)
  const [regErrors, setRegErrors] = React.useState(null)

  const post = React.useCallback(data => {
    setLoaded(true)

    signUp(data)
      .then(res => {
        res.status === 201 && alert('Success')
      })
      .catch(err => {
        setRegErrors(err.response.data)
      })
      .finally(() => {
        setLoaded(false)
      })
  }, [])

  return {
    regErrors,
    loaded,
    actions: {
      post,
    },
  }
}