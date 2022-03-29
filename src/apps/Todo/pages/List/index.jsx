import React from 'react'
import { Link } from 'react-router-dom'
import cls from './List.module.scss'
import { useGet } from '../../Hooks/useGet'
import Todo from '../../../../components/Todo'

export const List = () => {

  const token = localStorage.getItem('userToken')
  const database = useGet(token)

  return (
    <section className={cls.root}>
      <div className={cls.todos}>
        {
          database && database.map(({title, text, category, id, is_done}, index) => (
            <Todo
              title={title}
              text={text}
              category={category}
              id={id}
              is_done={is_done}
              key={index}
            />
          ))
        }
      </div>

      <Link to="/create" className={cls.addBtn}>
        <img src="/img/addTodoLogo.png" alt="logo" />
      </Link>
    </section>
  )
}