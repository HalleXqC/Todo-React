import React from 'react'

export const TextField = React.forwardRef(({
  type = 'text',
  className = '',
  label,
  error,
  disabled,
  placeholder,
  ...rest
}, ref) => {
  return (
    <div>
      <label className={className[0]}>
        <p>{label}:</p>
        <div>
          <input
            type={type}
            className={className[1]}
            ref={ref}
            disabled={disabled}
            placeholder={placeholder}
            {...rest}
          />
          {error && 
            <span className={className[2]}>
              {error.message ? error.message : error}
            </span>
          }
        </div>
      </label>
    </div>
  )
})