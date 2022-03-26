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

        <Forms.TextField
          label="Email"
          type="email"
          key={'4'}
          placeholder="example@email.com"
          error={formState.errors?.email ? formState.errors.email : regErrors?.email ? regErrors.email.toString() : ''}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('email', emailRules) }
        />

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

        <Forms.TextField
          label="Username"
          key={'4'}
          placeholder="example123"
          error={formState.errors?.username ? formState.errors.username : regErrors?.alias ? regErrors.alias.toString() : ''}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('username', usernameRules) }
        />
        
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

        <Forms.SubmitButton
          className={cls.formSubmit}
          disabled={loaded}
        />

        <Forms.Footer 
          content={['Already have account?', 'Sign in']}
          className={[cls.bottomText, cls.link]}
          to="/auth/login"
        />
        
      </form>
    </div>
  )
}