import React from 'react'
import cls from './Category.module.scss'
import { AiOutlineDelete as Delete, AiOutlineEdit as Edit } from 'react-icons/ai'
import { Forms } from '../Forms'
import { useForm } from 'react-hook-form'

const Category = ({ category, onDelete, onEdit, id, loaded, categoryError }) => {

  const [isEdit, setIsEdit] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState,
  } = useForm()

  const onSubmit = React.useCallback(data => {
    onEdit(id, data)
    reset({
      name: ''
    })
  }, [id, onEdit, reset])

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
        isEdit &&
          <Forms.CategoryField
            placeholder="New category title"
            disabled={loaded}
            onClick={handleSubmit(onSubmit)}
            error={
              formState.errors?.name
                ? formState.errors.name.message
                : categoryError
                  ? 'Такая категория уже существует!'
                  : ''
            }
            {...register('name', { required: 'Обязательное поле' })}
          />
      }

    </div>
  )
}

export default Category