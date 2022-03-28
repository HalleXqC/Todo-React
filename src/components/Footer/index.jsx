import React from 'react'
import { Link } from 'react-router-dom'
import cls from './Footer.module.scss'

const Footer = ({ content, to }) => {
  return (
    <div className={cls.bottomText}>
      <p>
        {content[0]} &nbsp;
        <Link 
          to={to}
          className={cls.link}
        >{content[1]}</Link>
      </p>
    </div>
  )
}

export default Footer