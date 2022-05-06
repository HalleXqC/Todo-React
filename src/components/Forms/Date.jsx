import React from 'react'
import cls from './Forms.module.scss'

export const Date = React.forwardRef(({
  label,
  error,
  ...rest
}, ref) => {
  return (
    <label className={cls.formLabel}>
      <p>{label}:</p>
      <div>
        <input
          type="date"
          className={cls.formInput}
          ref={ref}
          {...rest}
        />
        {error && 
          <span className={cls.error}>
            {error}
          </span>
        }
      </div>
    </label>
  )
})