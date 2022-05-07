const required = 'Обязательное поле'

// const regex = {
//   withoutSpaces: /^\S*$/,
//   onlyLatin: /^[a-zA-Z]+$/,
// }

export const requiredRule = {
  required,
}

export const passwordRules = {
  required,
  minLength: {
    value: 8,
    message: 'Минимум 8 символов',
  },
  pattern: {
    value: /^\S*$/,
    message: 'Пароль не может содержать пробелы',
  },
}

export const emailRules = {
  required,
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Введите корректную почту',
  },
}

export const nameRules = {
  required,
}

export const usernameRules = {
  required,
  maxLength: {
    value: 15,
    message: 'Не более 15 символов',
  },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: 'Только латинские буквы без пробелов',
  },
}

export const groupRules = {
  required,
}

export const directionRules = {
  required,
}

export const birthdayRules = {
  required,
}
