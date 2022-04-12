import React from 'react'
import cls from './Page.module.scss'
import { usePage } from '../../Hooks/usePage'
import Loader from '../../../../components/Loader/index'
import { useForm } from 'react-hook-form'
import { Forms } from '../../../../components/Forms'
import { textRules, titleRules, } from '../../Tools/forms'
import { useCategories } from '../../../Categories/Hooks/useCategories'
import { Link } from 'react-router-dom'

export const Page = () => {


  const [newCategory, setCategory] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    reset,
  } = useForm()
  
  const { categories } = useCategories()

  const { singleTodo, loaded, actions, categoryError } = usePage()

  const onSubmit = React.useCallback(data => {
    if (newCategory) {
      actions.editWithNewCategory({name: data.category}, data)
    } else {
      actions.edit(data)
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

  React.useEffect(() => {
    reset({
      title: singleTodo?.title,
      category: singleTodo?.category,
      text: singleTodo?.text,
    })
  }, [reset, singleTodo])

  if (!singleTodo) return <Loader/>
  if (!categories) return null
  return (
    <section className={cls.root}>
      <h1 className={cls.title}>Edit todo</h1>
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
          defaultValue={singleTodo.category}
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
          {
            [...categories, {id: 0, name: 'Новая категория'}].map(item => (
              <option 
                value={item.id}
                key={item.id}
              >{item.name}</option>
            ))
          }
        </Forms.Select>

        {
          newCategory && (
            <Forms.TextField
              label="Category title"
              placeholder="Input category title"
              error={categoryError.category}
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