import React from 'react'
import cls from './Todos.module.scss'
import { AiOutlineDelete as Delete, AiOutlineEdit as Edit} from 'react-icons/ai'
import { BsCheckLg as Complete} from 'react-icons/bs'
import { FaTimes as Uncomplete } from 'react-icons/fa'
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
    <div className={`${cls.card} ${is_done && cls.completed}`}>
      <div className={cls.cardInner}>
        <div className={cls.cardFront}>
          <div className={cls.header}>
            <div className={cls.title}>
              {title}
            </div>
            <div className={cls.category}>
              Category: <Link to={`/category/${category.id}`} className={cls.span}> {category.name} </Link>
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
              disabled={loaded}
            >
              <Edit className={cls.icon} />
            </Link>
          </div>
        </div>
        <div className={cls.cardBack}>
          <p>
            {text} 
            &nbsp;
            <span>(completed)</span>
          </p>

          <button 
            className={cls.button}
            onClick={complete}
            disabled={loaded}
          >
            <Uncomplete className={cls.icon} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo