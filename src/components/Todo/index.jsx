import React from 'react'
import cls from './Todos.module.scss'
import { AiOutlineDelete as Delete, AiOutlineEdit as Edit} from 'react-icons/ai'
import { BsCheckLg as Complete} from 'react-icons/bs'
import { useTodos } from '../../apps/Todo/Hooks/useTodos'

const Todo = ({ title, text, category, id, is_done }) => {

  const { loaded, actions } = useTodos()

  const complete = () => {
    actions.patch(
      id,
      {
        is_done: !is_done,
      },
    )
  }

  return (
    <div className={`${cls.root} ${is_done && cls.completed}`}>
      <div className={cls.header}>
        <div className={cls.title}>
          {title}
        </div>
        <div className={cls.category}>
          Category: <span> {category} </span>
        </div>
      </div>

      <hr />

      <div className={cls.main}>
        <p>{text}</p>
      </div>

      <div className={cls.footer}>
        <button 
          className={cls.button} 
          id={cls.delete}
          onClick={() => actions.remove(id)}
          disabled={loaded}
        >
          <Delete className={cls.icon} />
        </button>

        <button 
          className={cls.button}
          id={cls.complete}
          onClick={complete}
          disabled={loaded}
        >
          <Complete className={cls.icon} />
        </button>

        <button 
          className={cls.button} 
          id={cls.edit}
        >
          <Edit className={cls.icon} />
        </button>
      </div>
    </div>
  )
}

export default Todo