import React from 'react'
import cls from './Forms.module.scss'

export const SubmitButton = ({disabled, className}) => {
  return (
    <button 
      type="submit"
      className={cls.formSubmit}
      disabled={disabled}
    >
      Submit
    </button>
  )
}