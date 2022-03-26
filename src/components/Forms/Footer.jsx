import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = ({content, to, className,}) => {
  return (
    <div className={className[0]}>
      <p>
        {content[0]} &nbsp;
        <Link 
          to={to}
          className={className[1]}
        >{content[1]}</Link>
      </p>
    </div>
  )
}