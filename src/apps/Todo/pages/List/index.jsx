import React from 'react'
import { Link } from 'react-router-dom'
import cls from './List.module.scss'
import { useGet } from '../../Hooks/useGet'

export const List = () => {

  const token = localStorage.getItem('userToken')
  const database = useGet(token)
  console.log(database)

  return (
    <section className={cls.root}>
      <div className={cls.todos}>
        
      </div>

      <Link to="/create" className={cls.addBtn}>
        <img src="/img/addTodoLogo.png" alt="logo" />
      </Link>
    </section>
  )
}