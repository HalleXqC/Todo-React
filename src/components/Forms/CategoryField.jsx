import React from 'react'
import cls from './Forms.module.scss'
import { AiOutlineArrowRight as ArrowRight } from 'react-icons/ai'

export const CategoryField = React.forwardRef(({
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
          type="text"
          className={cls.formInput}
          ref={ref}
          {...rest}
        />
        
        <button 
          className={cls.submit} 
          onClick={onClick} 
          disabled={disabled}
        >
          <ArrowRight className={cls.icon}/>
        </button>
        {error && 
          <span className={cls.error}>
            {error}
          </span>
        }
      </div>
    </label>
  )
})