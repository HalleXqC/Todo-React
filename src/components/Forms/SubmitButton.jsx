import React from 'react'

export const SubmitButton = ({loaded = false, className}) => {
  return (
    <button 
      type="submit"
      className={className}
      disabled={loaded}
    >
      Submit
    </button>
  )
}