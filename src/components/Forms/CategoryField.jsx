import React from 'react'
import cls from './Forms.module.scss'
import { AiOutlineArrowRight as ArrowRight } from 'react-icons/ai'

export const CategoryField = React.forwardRef(({
  type = 'text',
  className = '',
  label,
  error,
  onClick,
  disabled,
  ...rest
}, ref) => {
  return (
    <label className={`${cls.formLabel} ${cls.formCategory}`}>
      <div>
        <input
          type={type}
          className={cls.formInput}
          ref={ref}
          disabled={disabled}
          {...rest}
        />
        <button className={cls.submit} onClick={onClick} disabled={disabled}>
          <ArrowRight className={cls.icon}/>
        </button>
        {error && 
          <span className={cls.error}>
            {error.message}
          </span>
        }
      </div>
    </label>
  )
})