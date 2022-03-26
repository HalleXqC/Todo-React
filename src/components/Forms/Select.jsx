import React from 'react'

export const Select = React.forwardRef(({
  className = '',
  label,
  error,
  disabled,
  options,
  ...rest
}, ref) => {

  return (
    <div>
      <label className={className[0]}>
        <p>{label}:</p>
        <div>
          <select
            className={className[1]}
            ref={ref}
            disabled={disabled}
            {...rest}
          >
            {options.map((item, i) => (
              <option value={i + 1 + ''} key={i} >
                {item}
              </option>
            ))}
          </select>

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