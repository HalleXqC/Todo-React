import React from 'react'
import cls from './Sidebar.module.scss'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  return (
    <div className={cls.root}>
      <Link 
        to="/" 
        className={`${cls.btn} ${cls.settings}`}
        title="All Todos"
      >
        <img src="/img/back.png" alt="logo" />
      </Link>
      <Link 
        to="/create" 
        className={cls.btn}
        title="Create Todo"
      >
        <img src="/img/addTodoLogo.png" alt="logo" />
      </Link>
      <Link 
        to="/category/settings" 
        className={`${cls.btn} ${cls.settings}`} 
        title="Category settings"
      >
        <img src="/img/settings.png" alt="logo" />
      </Link>
    </div>
  )
}

export default Sidebar