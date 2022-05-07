import React from 'react'
import cls from './List.module.scss'
import { useList } from '../../Hooks/useList'
import Todo from '../../../../components/Todo'
import { useCategories } from '../../../Categories/Hooks/useCategories'
import Loader from '../../../../components/Loader'
import { getCategoryName } from '../../Tools'
import Sidebar from '../../../../components/Sidebar'

export const List = () => {
  const { base, actions, loaded } = useList('')
  const { categories } = useCategories()

  if (!base) return <Loader />
  if (!categories) return <Loader/>
  return (
    <section className={cls.root}>
      <Sidebar />
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
    </section>
  )
}
