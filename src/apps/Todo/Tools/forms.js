const required = 'Обязательное поле'

export const titleRules = {
  required,
  maxLength: {
    value: 30,
    message: 'Не более 30 символов'
  },
}

export const textRules = {
  required,
  maxLength: {
    value: 250,
    message: 'Не более 30 символов'
  },
}