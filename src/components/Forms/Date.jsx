import React from 'react'

export const Date = React.forwardRef(({
  type = 'date',
  className = '',
  label,
  error,
  disabled,
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
            {...rest}
          />
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