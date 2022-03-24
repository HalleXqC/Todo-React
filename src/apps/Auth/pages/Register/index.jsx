import React from 'react'
import cls from './Register.module.scss'
import { useForm } from 'react-hook-form'
import { usernameRules, birthdayRules, directionRules, emailRules, groupRules, nameRules, passwordRules } from '../../Tools/forms'
import { Link } from 'react-router-dom'
import { calculateAge } from '../../Tools/calculateAge';
import { signUp } from '../../API/index';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm()

  const onSubmit = React.useCallback((data) => {
    signUp({...data, age: calculateAge(data.birthday)})
    .then(res => res.json())
    .then(r => {
      console.log(r)
    })
  }, [])

  return (
    <div className={cls.root}>
      <h1 className={cls.formTitle}>Sign up</h1>
      <div className={cls.form}>
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
              formState.errors.email && <span className={cls.error}>{formState.errors.email.message}</span>
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
              formState.errors.password && <span className={cls.error}>{formState.errors.password.message}</span>
            }
          </div>
        </label>
        <label className={cls.formLabel}>
          <p>First name:</p>
          <div>
            <input
              type="text"
              placeholder="Ivan"
              className={cls.formInput}
              { ...register('firstName', nameRules)}
            />
            {
              formState.errors.firstName && <span className={cls.error}>{formState.errors.firstName.message}</span>
            }
          </div>
        </label>
        <label className={cls.formLabel}>
          <p>Last name:</p>
          <div>
            <input
              type="text"
              placeholder="Ivanov"
              className={cls.formInput}
              { ...register('lastName', nameRules)}
            />
            {
              formState.errors.lastName && <span className={cls.error}>{formState.errors.lastName.message}</span>
            }
          </div>
        </label>
        <label className={cls.formLabel}>
          <p>Username:</p>
          <div>
            <input
              type="text"
              placeholder="example123"
              className={cls.formInput}
              { ...register('username', usernameRules)}
            />
            {
              formState.errors.username && <span className={cls.error}>{formState.errors.username.message}</span>
            }
          </div>
        </label>
        <label className={cls.formLabel}>
          <p>Group:</p>
          <div>
            <input
              type="text"
              placeholder="A-100; F-200"
              className={cls.formInput}
              { ...register('group', groupRules)}
            />
            {
              formState.errors.group && <span className={cls.error}>{formState.errors.group.message}</span>
            }
          </div>
        </label>
        <label className={cls.formLabel}>
          <p>Direction:</p>
          <div>
            <select {...register('direction', directionRules)} className={cls.formInput} >
              <option value="F">Frontend</option>
              <option value="B">Backend</option>
              <option value="A">Android</option>
            </select>
            {
              formState.errors.direction && <span className={cls.error}>{formState.errors.direction.message}</span>
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
              formState.errors.birthday && <span className={cls.error}>{formState.errors.birthday.message}</span>
            }
          </div>
        </label>
        <button 
          onClick={handleSubmit(onSubmit)}
          className={cls.formSubmit}
        >
          Submit
        </button>

        <span className={cls.bottomText}>
          <p>
            Already have account? &nbsp;
            <Link to="/auth/login" className={cls.link}>Sign in</Link>
          </p>
        </span>
      </div>
    </div>
  )
}