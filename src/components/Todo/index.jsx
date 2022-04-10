import React from 'react'
import cls from './Todos.module.scss'
import { AiOutlineDelete as Delete, AiOutlineEdit as Edit} from 'react-icons/ai'
import { BsCheckLg as Complete} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Todo = ({ title, text, category, id, is_done, onDelete, onComplete, loaded }) => {

  const complete = () => {
    onComplete(
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
          onClick={() => onDelete(id)}
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

        <Link
          className={cls.button} 
          id={cls.edit}
          to={`/todo/${id}`}
        >
          <Edit className={cls.icon} />
        </Link>
      </div>
    </div>
  )
}

export default Todo