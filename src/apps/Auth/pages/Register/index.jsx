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
} from "../../Tools/forms"
import { Link } from 'react-router-dom'
import { calculateAge } from '../../Tools/calculateAge';
import { useRegister } from '../../Hooks/useRegister'
import { Forms } from '../../../../components/Forms'

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = useForm()
  
  const { actions, loaded, regErrors } = useRegister()

  const onSubmit = React.useCallback(data => {
    actions.post({...data, age: calculateAge(data.birthday)})
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
        <label className={cls.formLabel}>
          <p>Email:</p>
          <div>
            <input
              type="email"
              placeholder="example@gmail.com"
              className={cls.formInput}
              { ...register('email', emailRules) }
            />
            {
              formState.errors.email && (
                <span className={cls.error}>
                  {formState.errors.email.message}
                </span>
              )
            }
            {
              regErrors?.email && (
                <span className={cls.error}>
                  {regErrors.email.join('')}
                </span>
              )
            }
          </div>
        </label>

        <Forms.Password 
          label="Password"
          key={'2'}
          placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          error={formState.errors?.password}
          className={[cls.formLabel, cls.formInput, cls.error, cls.formEye]}
          id={cls.formPassword}
          { ...register('password', passwordRules) }
        />

        <Forms.TextField
          label="First name"
          key={'3'}
          placeholder="Ivan"
          error={formState.errors?.firstName}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('firstName', nameRules) }
        />

        <Forms.TextField
          label="Last name"
          key={'4'}
          placeholder="Ivanov"
          error={formState.errors?.lastName}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('lastName', nameRules) }
        /> 

        <label className={cls.formLabel}>
          <p>Username:</p>
          <div>
            <input
              type="text"
              placeholder="example123"
              className={cls.formInput}
              { ...register('alias', usernameRules)}
            />
            {
              formState.errors.alias && (
                <span className={cls.error}>
                  {formState.errors.alias.message}
                </span>
              )
            }
            {
              regErrors?.alias && (
                <span className={cls.error}>
                  {regErrors.alias.join('')}
                </span>
              )
            }
          </div>
        </label>
        
        <Forms.TextField
          label="Group"
          key={'6'}
          placeholder="A-100; F-200"
          error={formState.errors?.group}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('group', groupRules) }
        />

        <Forms.Select
          label="Direction"
          key={'7'}
          error={formState.errors?.direction}
          className={[cls.formLabel, cls.formInput, cls.error]}
          options={['Android', 'Backend', 'Frontend']}
          { ...register('direction', directionRules) }
        />

        <Forms.Date
          label="Date of Birth"
          key={'8'}
          error={formState.errors?.birthday}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('birthday', birthdayRules)}
        />

        <p className={cls.error}>{regErrors && regErrors}</p>

        <button
          type="submit"
          className={cls.formSubmit}
          disabled={loaded}
        >
          Submit
        </button>

        <span className={cls.bottomText}>
          <p>
            Already have account? &nbsp;
            <Link 
              to="/auth/login" 
              className={cls.link}
            >Sign in</Link>
          </p>
        </span>
      </form>
    </div>
  )
}