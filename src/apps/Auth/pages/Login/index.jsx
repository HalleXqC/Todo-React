import React, { useState } from 'react'
import cls from './Login.module.scss'
import { useForm } from 'react-hook-form'
import { requiredRule } from '../../Tools/forms'
import { Link } from 'react-router-dom'
import { signIn } from '../../API'

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm()

  const [authError, setAuthError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = React.useCallback((data) => {
    setLoading(true)
    signIn(data)
    .then(res => res.json())
    .then(r => {
      r?.auth_token 
        ? localStorage.setItem('userToken', JSON.stringify(r))
        : setAuthError('Invalid username or password')
      setLoading(false)
    })
  }, [])

  return (
    <div className={cls.root}>
      <h1 className={cls.formTitle}>Sign in</h1>
      <div className={cls.form}>
        <label className={cls.formLabel}>
          <p>Username:</p>
          <div>
            <input
              type="text"
              placeholder="example"
              className={cls.formInput}
              { ...register('username', requiredRule)}
            />
            {
              formState.errors.username && (
                <span className={cls.error}>
                  {formState.errors.username.message}
                </span>
              )
            }
          </div>
        </label>

        <label className={cls.formLabel}>
          <p>Password:</p>
          <div>
            <input
              type="password"
              placeholder="123456"
              className={cls.formInput}
              { ...register('password', requiredRule )}
            />
            {
              formState.errors.password && (
                <span className={cls.error}>
                  {formState.errors.password.message}
                </span>
              )
            }
          </div>
        </label>
        <p className={cls.error}>{authError && authError}</p>
        <button 
          onClick={handleSubmit(onSubmit)}
          className={cls.formSubmit}
          disabled={loading}
        >
          Submit
        </button>

        <span className={cls.bottomText}>
          <p>
            Don't have account yet? &nbsp;
            <Link 
              to='/auth/register'
              className={cls.link}
            >Sign up</Link>
          </p>
        </span>
      </div>
    </div>
  )
}