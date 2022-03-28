import React from 'react'
import cls from './Create.module.scss'
import { useForm } from 'react-hook-form'
import { Forms } from '../../../../components/Forms'
import { textRules, titleRules, } from '../../Tools/forms'
import { useCreate } from '../../Hooks/useCreate'
import Footer from '../../../../components/Footer'

export const Create = () => {

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    reset,
    watch,
  } = useForm()

  const category = watch('category')

  const { actions, loaded } = useCreate()

  const onSubmit = React.useCallback(data => {
    console.log(data)
    // actions.post(data)
    // reset({
    //   title: '',
    //   text: '',
    // })
  })

  React.useEffect(() => {
    setValue('category', '1')
    register('category')
  }, [])

  return (
    <section className={cls.root}>
      <h1 className={cls.title}>Create new todo</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
        <Forms.TextField 
          label="Title"
          placeholder="Cleaning"
          error={formState.errors.title}
          className={[cls.formLabel, cls.formInput, cls.error]}
          { ...register('title', titleRules)}
        />

        <Forms.Select
          label="Category"
          className={[cls.formLabel, cls.formInput, cls.error]}
          onChange={e => {
            reset({
              new_category: '',
            })

            const value = e.currentTarget.value
            setValue('category', value)
          }}
        >
          <option defaultChecked value="1">Без категории</option>
          <option value="0">Добавить категорию</option>
        </Forms.Select>

        {
          category === '0' && (
            <Forms.TextField
              label="Category title"
              placeholder="Input category title"
              error={formState.errors.new_category}
              className={[cls.formLabel, cls.formInput, cls.error]}
              {...register('new_category', { required: 'Required' })}
            />
          )
        }

        <Forms.TextArea
          label="Description"
          placeholder="Clean up the room"
          error={formState.errors.text}
          className={[cls.formLabel, cls.formInput, cls.error]}
          id={cls.formArea}
          { ...register('text', textRules)}
        />

        <Forms.SubmitButton 
          className={cls.formSubmit}
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