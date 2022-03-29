import React from 'react'
import cls from './Forms.module.scss'

export const Select = React.forwardRef(({
  className = '',
  label,
  error,
  disabled,
  children,
  ...rest
}, ref) => {

  return (
    <label className={cls.formLabel}>
      <p>{label}:</p>
      <div>
        <select
          className={cls.formInput}
          ref={ref}
          disabled={disabled}
          {...rest}
        >
          {children}
        </select>

        {error && 
          <span className={cls.error}>
            {error.message}
          </span>
        }
      </div>
    </label>
  )
})