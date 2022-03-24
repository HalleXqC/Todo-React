import React from 'react'
import cls from './Input.module.scss'

export const Input = ({
  label,
  type = 'text',
  placeholder = '',
  className,
  error,
  ...props
}) => {
  return (
    <label className={cls.formLabel}>
      <p>{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className={`${className} ${cls.input}`}
        { ...props }
      />

      {
        error && <span>{error}</span>
      }
    </label>
  )
}