import React from 'react'

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
    <div>
      <label className={className[0]}>
        <p>{label}:</p>
        <div>
          <textarea
            className={className[1]}
            ref={ref}
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            {...rest}
          ></textarea>
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