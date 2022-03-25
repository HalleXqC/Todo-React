import React from 'react'

export const Select = React.forwardRef(({
  className = '',
  label,
  error,
  disabled,
  children,
  ...rest
}, ref) => {
  return (
    <div>
      {label && <label htmlFor={rest.name}></label>}
      <select
        className={className}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        {children}
      </select>

      <div>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
})