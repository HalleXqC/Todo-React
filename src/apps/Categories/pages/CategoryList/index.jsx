import React from 'react'
import cls from './CategoryList.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useList } from '../../../Todo/Hooks/useList'
import Loader from '../../../../components/Loader'
import Todo from '../../../../components/Todo'
import { useCategories } from '../../Hooks/useCategories'
import { BsArrowReturnLeft as ArrowLeft } from 'react-icons/bs'

export const CategoryList = () => {
  const { id } = useParams()

  const { base, actions, loaded } = useList(`?category=${id}`)

  const { category } = useCategories()

  if (!base) return <Loader/>
  if (!category) return <Loader/>
  return (
    <section className={cls.root}>
      <h1 className={cls.category}>
        Category:
        &nbsp;
        <span>{category.name}</span>
      </h1>
      <div className={cls.todos}>
        {
          !base.length && <h1 className={cls.error}>No todos yet</h1>
        }
        {
          base.map(({ title, text, id, is_done }) => (
            <Todo
              title={title}
              text={text}
              category={category}
              id={id}
              onDelete={actions.remove}
              onComplete={actions.complete}
              loaded={loaded}
              is_done={is_done}
              key={id}
            />))
        }
      </div>

      <Link to="/" className={cls.return}>
        <ArrowLeft />
      </Link>
    </section>
  )
}
