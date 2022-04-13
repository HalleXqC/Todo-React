import React from 'react'
import cls from './Category.module.scss'
import { AiOutlineDelete as Delete, AiOutlineEdit as Edit} from 'react-icons/ai'
import { Forms } from '../Forms'

const Category = ({category, onDelete, onEdit, id, loaded}) => {

  const [isEdit, setIsEdit] = React.useState(false)

  return (
    <div className={cls.card}>

      <div className={cls.title}>
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
          onClick={() => setIsEdit(!isEdit)}
          disabled={loaded}
        >
          <Edit className={cls.icon} />
        </button>
      </div>

      {
        isEdit && <Forms.CategoryField placeholder="New category title" disabled={loaded} onClick={() => onEdit(id)} />
      }
      
    </div>
  )
}

export default Category