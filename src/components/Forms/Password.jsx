import React from 'react'
import { AiOutlineEyeInvisible as EyeClosed, AiOutlineEye as EyeOpened } from 'react-icons/ai'
import cls from './Forms.module.scss'

export const Password = React.forwardRef(({
  label,
  error,
  placeholder,
  ...rest
}, ref) => {
  const [isClosed, setIsClosed] = React.useState(true)

  return (
    <label className={cls.formLabel}>
      <p>{label}:</p>
      <div>
        <input
          type={isClosed ? 'password' : 'text'}
          className={cls.formInput}
          ref={ref}
          placeholder={isClosed ? placeholder : 'Example123'}
          id={cls.formPassword}
          {...rest}
        />
        <EyeClosed
          className={cls.formEye}
          style={isClosed ? { display: 'block' } : { display: 'none' }}
          onClick={() => setIsClosed(false)}
        />
        <EyeOpened
          className={cls.formEye}
          style={isClosed ? { display: 'none' } : { display: 'block' }}
          onClick={() => setIsClosed(true)}
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
