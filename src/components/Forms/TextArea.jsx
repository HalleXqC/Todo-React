import React from 'react'
import cls from './Forms.module.scss'

export const TextArea = React.forwardRef(({
  label,
  error,
  placeholder,
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
          placeholder={placeholder}
          {...rest}
        ></textarea>
        {error &&
          <span className={cls.error}>
            {error}
          </span>
        }
      </div>
    </label>
  )
})
