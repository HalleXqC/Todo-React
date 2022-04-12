import React from 'react'
import cls from './Create.module.scss'
import { useForm } from 'react-hook-form'
import { Forms } from '../../../../components/Forms'
import { textRules, titleRules, } from '../../Tools/forms'
import { useCreate } from '../../Hooks/useCreate'
import { Link } from 'react-router-dom'
import { useCategories } from '../../../Categories/Hooks/useCategories'

export const Create = () => {
  const [newCategory, setCategory] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    reset,
  } = useForm()
  
  const { actions, loaded, createError } = useCreate()

  const { categories } = useCategories()

  const onSubmit = React.useCallback(data => {
    if (newCategory) {
      actions.postWithCategory({name: data.category}, data)
    } else {
      actions.post(data)
    }
  }, [actions, newCategory])

  React.useEffect(() => {
    register('category', {
      required: 'Обязательное поле',
    })
  }, [register, setValue])

  React.useEffect(() => {
    setValue('category', '')
  }, [setValue])

  return (
    <section className={cls.root}>
      <h1 className={cls.title}>Create new todo</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
        <Forms.TextField 
          label="Title"
          placeholder="Cleaning"
          error={formState.errors.title}
          { ...register('title', titleRules)}
        />
        <Forms.Select
          label="Category"
          error={formState.errors.category}
          onChange={e => {
            const value = e.currentTarget.value
            setValue('category', value)

            if (value !== '0') return setCategory(false)

            setCategory(true)
            reset({
              category: '',
            })
          }}
        >
          <option defaultChecked value="">Выберите категорию</option>
          {
            categories && categories.map(item => (
              <option value={item.id} key={item.id} >{item.name}</option>
            ))
          }
          <option value="0">Добавить категорию</option>
        </Forms.Select>

        {
          newCategory && (
            <Forms.TextField
              label="Category title"
              placeholder="Input category title"
              error={createError.category}
              onChange={e => {
                const value = e.currentTarget.value
                setValue('category', value)
              }}
            />
          )
        }

        <Forms.TextArea
          label="Description"
          placeholder="Clean up the room"
          error={formState.errors.text}
          id={cls.formArea}
          { ...register('text', textRules)}
        />

        <Forms.SubmitButton 
          disabled={loaded}
        />

        <div className={cls.bottomText}>
          <Link 
            to="/"
            className={cls.link}
          >Go back</Link>
        </div>
      </form>
    </section>
  )
}