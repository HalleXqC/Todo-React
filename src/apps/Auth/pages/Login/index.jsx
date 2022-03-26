import React from 'react'
import cls from './Login.module.scss'
import { useForm } from 'react-hook-form'
import { requiredRule } from '../../Tools/forms'
import { useLogin } from '../../Hooks/useLogin';
import { Forms } from '../../../../components/Forms'

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = useForm()

  const { actions, loaded, authError, } = useLogin()

  const onSubmit = React.useCallback(data => {
    actions.post(data)
    reset({
      email: '',
      password: '',
    })
  }, [actions, reset])

  return (
    <div className={cls.root}>
      <h1 className={cls.formTitle}>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>

        <Forms.TextField
          label="Email"
          key={'123'}
          placeholder="example@gmail.com"
          error={formState.errors?.email}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('email', requiredRule) }
        />

        <Forms.Password
          label="Password"
          key={'321'}
          placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          error={formState.errors?.password}
          className={[cls.formLabel, cls.formInput, cls.error, cls.formEye]}
          id={cls.formPassword}
          { ...register('password', requiredRule) }
        />

        <p className={cls.error}>{authError && authError}</p>

        <Forms.SubmitButton 
          className={cls.formSubmit}
          disabled={loaded}
        />

        <Forms.Footer 
          content={["Don't have account yet?", 'Sign up']}
          className={[cls.bottomText, cls.link]}
          to="/auth/register"
        />
        
      </form>
    </div>
  )
}