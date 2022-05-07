import React from 'react'
import Sidebar from '../../../../components/Sidebar'
import cls from './Settings.module.scss'
import { useCategories } from '../../Hooks/useCategories'
import Loader from '../../../../components/Loader'
import Category from '../../../../components/Category'

export const Settings = () => {
  const { categories, loaded, actions, categoryError } = useCategories()

  const newCategories = categories?.slice(1)

  if (!newCategories) return <Loader />
  return (
    <div className={cls.root}>
      <Sidebar />
      <div className={cls.categories}>
        <h1 className={cls.title}>All Categories</h1>
        {
          !newCategories.length && <h1 className={cls.error}>No categories yet</h1>
        }
        {
          newCategories.map(item => (
            <Category
              category={item.name}
              id={item.id}
              loaded={loaded}
              categoryError={categoryError}
              onDelete={actions.remove}
              onEdit={actions.edit}
              key={item.id}
            />
          ))
        }
      </div>
    </div>
  )
}
