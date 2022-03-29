import React from 'react'
import cls from './Forms.module.scss'

export const TextField = React.forwardRef(({
  type = 'text',
  className = '',
  label,
  error,
  disabled,
  placeholder,
  ...rest
}, ref) => {
  return (
    <label className={cls.formLabel}>
      <p>{label}:</p>
      <div>
        <input
          type={type}
          className={cls.formInput}
          ref={ref}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
        />
        {error && 
          <span className={cls.error}>
            {error.message ? error.message : error}
          </span>
        }
      </div>
    </label>
  )
})