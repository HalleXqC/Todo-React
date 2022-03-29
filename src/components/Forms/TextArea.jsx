import React from 'react'
import cls from './Forms.module.scss'

export const TextArea = React.forwardRef(({
  className = '',
  label,
  error,
  disabled,
  placeholder,
  id,
  ...rest
}, ref) => {
  return (
    <label className={cls.formLabel}>
      <p>{label}:</p>
      <div>
        <textarea
          className={cls.formInput}
          ref={ref}
          id={cls.formArea}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
        ></textarea>
        {error && 
          <span className={cls.error}>
            {error.message}
          </span>
        }
      </div>
    </label>
  )
})