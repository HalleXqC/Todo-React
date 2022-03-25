import React from 'react'

export const TextField = React.forwardRef(({
  type = 'text',
  className = '',
  label,
  error,
  disabled,
  ...rest
}, ref) => {
  return (
    <div>
      {label && <label htmlFor={rest.name}>{label}</label>}
      <input
        type={type}
        className={className}
        ref={ref}
        disabled={disabled}
        {...rest}
      />

      <div>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
})