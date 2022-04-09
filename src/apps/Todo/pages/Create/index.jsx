import React from 'react'
import cls from './Create.module.scss'
import { useForm } from 'react-hook-form'
import { Forms } from '../../../../components/Forms'
import { textRules, titleRules, } from '../../Tools/forms'
import Footer from '../../../../components/Footer'
import { useCategories } from '../../Hooks/useCategories'
import { useCreate } from '../../Hooks/useCreate'

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

  const { categories, post } = useCategories()

  const onSubmit = React.useCallback(data => {

    if (newCategory) {
      post({name: data.category})
      .then(res => {
        actions.post({...data, category: res.id})
        reset({
          title: '',
          category: '0',
          text: '',
        })
      })
    } else {
      actions.post(data)
      reset({
        title: '',
        category: '0',
        text: '',
      })
    }
    
    
  }, [actions, reset, post, newCategory])

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

        <Footer
          content={['', 'Go back']}
          to="/"
        />
      </form>
    </section>
  )
}