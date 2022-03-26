import React from 'react'
import { AiOutlineEyeInvisible as EyeClosed, AiOutlineEye as EyeOpened} from 'react-icons/ai'

export const Password = React.forwardRef(({
  className = '',
  label,
  error,
  disabled,
  placeholder,
  id = '',
  ...rest
}, ref) => {

  const [isClosed, setIsClosed] = React.useState(true)

  return (
    <div>
      <label className={className[0]}>
        <p>{label}:</p>
        <div>
          <input
            type={isClosed ? 'password' : 'text'}
            className={className[1]}
            ref={ref}
            disabled={disabled}
            placeholder={isClosed ? placeholder : 'Example123'}
            id={id}
            {...rest}
          />
          <EyeClosed className={className[3]} style={isClosed ? {display: 'block'} : {display: 'none'}} onClick={() => setIsClosed(false)} />
          <EyeOpened className={className[3]} style={isClosed ? {display: 'none'} : {display: 'block'}} onClick={() => setIsClosed(true)} />
          {error && 
            <span className={className[2]}>
              {error.message}
            </span>
          }
        </div>
      </label>
    </div>
  )
})