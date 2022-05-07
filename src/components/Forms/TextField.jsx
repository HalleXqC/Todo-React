import React from 'react'
import cls from './Forms.module.scss'

export const TextField = React.forwardRef(({
  label,
  error,
  placeholder,
  ...rest
}, ref) => {
  return (
    <label className={cls.formLabel}>
      <p>{label}:</p>
      <div>
        <input
          type="text"
          className={cls.formInput}
          ref={ref}
          placeholder={placeholder}
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
