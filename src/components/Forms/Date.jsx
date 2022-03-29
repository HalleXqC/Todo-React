import React from 'react'
import cls from './Forms.module.scss'

export const Date = React.forwardRef(({
  type = 'date',
  className = '',
  label,
  error,
  disabled,
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
          {...rest}
        />
        {error && 
          <span className={cls.error}>
            {error.message}
          </span>
        }
      </div>
    </label>
  )
})