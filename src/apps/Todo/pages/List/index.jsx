import React from 'react'
import cls from './List.module.scss'
import { useGet } from '../../Hooks/useGet';

export const List = () => {

  const database = useGet()

  console.log(database)

  return (
    <section className={cls.root}>
      <div className={cls.todos}>
        
      </div>
    </section>
  )
}