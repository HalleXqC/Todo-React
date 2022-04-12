import React from 'react'
import cls from './Category.module.scss'
import { AiOutlineDelete as Delete, AiOutlineEdit as Edit} from 'react-icons/ai'

const Category = ({category, onDelete, onEdit, id, loaded}) => {
  return (
    <div className={cls.card}>
      <div className={cls.header}>
        {category}
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
          id={cls.edit}
          to={`/category/${id}`}
          disabled={loaded}
        >
          <Edit className={cls.icon} />
        </button>
      </div>
    </div>
  )
}

export default Category