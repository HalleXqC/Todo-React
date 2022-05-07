import React from 'react'
import cls from './Forms.module.scss'

export const Select = React.forwardRef(({
  label,
  error,
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
          {...rest}
        >
          {children}
        </select>

        {error &&
          <span className={cls.error}>
            {error}
          </span>
        }
      </div>
    </label>
  )
})
