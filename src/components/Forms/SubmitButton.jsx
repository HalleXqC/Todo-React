import React from 'react'

export const SubmitButton = ({disabled, className}) => {
  return (
    <button 
      type="submit"
      className={className}
      disabled={disabled}
    >
      Submit
    </button>
  )
}