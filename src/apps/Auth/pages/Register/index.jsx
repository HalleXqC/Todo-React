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
        <label className={cls.formLabel}>
          <p>Password:</p>
          <div>
            <input
              type="password"
              placeholder="123456"
              className={cls.formInput}
              { ...register('password', passwordRules) }
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
        <Forms.TextField
          label="First name"
          key={'1'}
          placeholder="Ivan"
          error={formState.errors?.firstName}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('firstName', nameRules) }
        />

        <Forms.TextField
          label="Last name"
          key={'2'}
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
              formState.errors.username && (
                <span className={cls.error}>
                  {formState.errors.username.message}
                </span>
              )
            }
            {
              regErrors?.username && (
                <span className={cls.error}>
                  {regErrors.username.join('')}
                </span>
              )
            }
          </div>
        </label>
        
        <Forms.TextField
          label="Group"
          key={'3'}
          placeholder="A-100; F-200"
          error={formState.errors?.group}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('group', groupRules) }
        />

        <label className={cls.formLabel}>
          <p>Direction:</p>
          <div>
            <select 
              {...register('direction', directionRules)} 
              className={cls.formInput} 
            >
              <option value="1">Android</option>
              <option value="2">Backend</option>
              <option value="3">Frontend</option>
            </select>
            {
              formState.errors.direction && (
                <span className={cls.error}>
                  {formState.errors.direction.message}
                </span>
              )
            }
          </div>
        </label>
        <label className={cls.formLabel}>
          <p>Date of Birth:</p>
          <div>
            <input
              type="date"
              className={cls.formInput}
              { ...register('birthday', birthdayRules)}
            />
            {
              formState.errors.birthday && (
                <span className={cls.error}>
                  {formState.errors.birthday.message}
                </span>
              )
            }
          </div>
        </label>
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