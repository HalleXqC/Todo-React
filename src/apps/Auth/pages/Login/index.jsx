import React from 'react'
import cls from './Login.module.scss'
import { useForm } from 'react-hook-form'
import { requiredRule } from '../../Tools/forms'
import { Link } from 'react-router-dom'
import { useLogin } from '../../Hooks/useLogin';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = useForm()

  const { actions, loaded } = useLogin()

  const onSubmit = React.useCallback((data) => {
    actions.post(data)
    reset({
      username: '',
      password: '',
    })
  }, [])

  console.log(formState.isDirty)

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

        {/* <p className={cls.error}>{authError && authError}</p> */}

        <button 
          onClick={handleSubmit(onSubmit)}
          className={cls.formSubmit}
          disabled={!formState.isDirty || loaded}
        >
          Submit
        </button>

        <span className={cls.bottomText}>
          <p>
            Don't have account yet? &nbsp;
            <Link 
              to="/auth/register"
              className={cls.link}
            >Sign up</Link>
          </p>
        </span>
      </div>
    </div>
  )
}