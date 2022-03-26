import React from 'react'

export const SubmitButton = ({loaded, className}) => {
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