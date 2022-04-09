import React from 'react'
import { Link } from 'react-router-dom'
import cls from './List.module.scss'
import { useList } from '../../Hooks/useList'
import Todo from '../../../../components/Todo'
import { useCategories } from '../../Hooks/useCategories';
import Loader from '../../../../components/Loader'
import { getCategoryName } from '../../Tools'

export const List = () => {
  const { base, actions, loaded } = useList()
  const { categories } = useCategories()

  if (!base) return <Loader />
  return (
    <section className={cls.root}>
      <div className={cls.todos}>
        {
          !base.length && <h1 className={cls.error}>No todos yet</h1>
        }
        {
          base.map(({ title, text, category, id, is_done }) => (
            <Todo
              title={title}
              text={text}
              category={getCategoryName(categories, category)}
              id={id}
              onDelete={actions.remove}
              onComplete={actions.complete}
              loaded={loaded}
              is_done={is_done}
              key={id}
            />))
        }
      </div>

      <Link to="/create" className={cls.addBtn}>
        <img src="/img/addTodoLogo.png" alt="logo" />
      </Link>
    </section>
  )
}