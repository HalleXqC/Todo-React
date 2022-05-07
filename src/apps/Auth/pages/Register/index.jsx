import React from 'react'
import cls from './Register.module.scss'
import { useForm } from 'react-hook-form'
import {
  usernameRules,
  birthdayRules,
  directionRules,
  emailRules,
  groupRules,
  nameRules,
  passwordRules,
} from '../../Tools/forms'
import { calculateAge } from '../../Tools/calculateAge'
import { useRegister } from '../../Hooks/useRegister'
import { Forms } from '../../../../components/Forms'
import { Link } from 'react-router-dom'

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = useForm()

  const { actions, loaded, regErrors } = useRegister()

  const onSubmit = React.useCallback(data => {
    actions.post({ ...data, age: calculateAge(data.birthday) })
    reset({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      alias: '',
      group: '',
      direction: '1',
      birthday: '',
    })
  }, [actions, reset])

  return (
    <div className={cls.root}>
      <h1 className={cls.formTitle}>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>

        <Forms.TextField
          label="Email"
          type="email"
          key={'1'}
          placeholder="example@email.com"
          error={
            formState.errors?.email?.message
              ? formState.errors.email.message
              : regErrors?.email
                ? regErrors.email.toString()
                : ''
          }
          {...register('email', emailRules)}
        />

        <Forms.Password
          label="Password"
          key={'2'}
          placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          error={formState.errors?.password?.message}
          id={cls.formPassword}
          {...register('password', passwordRules)}
        />

        <Forms.TextField
          label="First name"
          key={'3'}
          placeholder="Ivan"
          error={formState.errors?.firstName?.message}
          {...register('firstName', nameRules)}
        />

        <Forms.TextField
          label="Last name"
          key={'4'}
          placeholder="Ivanov"
          error={formState.errors?.lastName?.message}
          {...register('lastName', nameRules)}
        />

        <Forms.TextField
          label="Username"
          key={'5'}
          placeholder="example123"
          error={
            formState.errors?.alias?.message
              ? formState.errors.alias.message
              : regErrors?.username
                ? regErrors.username.toString()
                : ''
          }
          {...register('alias', usernameRules)}
        />

        <Forms.TextField
          label="Group"
          key={'6'}
          placeholder="A-100; F-200"
          error={formState.errors?.group?.message}
          {...register('group', groupRules)}
        />

        <Forms.Select
          label="Direction"
          key={'7'}
          error={formState.errors?.direction?.message}
          {...register('direction', directionRules)}
        >
          {
            ['Android', 'Backend', 'Frontend'].map((item, i) => (
              <option value={i + 1 + ''} key={i} >
                {item}
              </option>
            ))
          }
        </Forms.Select>

        <Forms.Date
          label="Date of Birth"
          key={'8'}
          error={formState.errors?.birthday?.message}
          {...register('birthday', birthdayRules)}
        />

        <Forms.SubmitButton
          disabled={loaded}
        />

        <div className={cls.bottomText}>
          <p>
            Already have account? &nbsp;
            <Link
              to="/auth/login"
              className={cls.link}
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
