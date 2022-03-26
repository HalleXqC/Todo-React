import React from 'react'
import cls from './Create.module.scss'
import { useForm } from 'react-hook-form'
import { Forms } from '../../../../components/Forms'
import { textRules, titleRules, } from '../../Tools/forms'
import { useCreate } from '../../Hooks/useCreate';

export const Create = () => {

  const {
    register,
    handleSubmit,
    formState,
    reset,
  } = useForm()

  const { actions, loaded } = useCreate()

  const onSubmit = React.useCallback(data => {
    actions.post(data)
    reset({
      title: '',
      text: '',
    })
  })

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

        <Forms.Footer 
          content={['', 'Go back']}
          to="/"
          className={[cls.bottomText, cls.link]}
        />

      </form>
    </section>
  )
}