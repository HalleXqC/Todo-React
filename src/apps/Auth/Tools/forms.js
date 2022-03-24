const required = 'Обязательное поле'

export const requiredRule = {
  required
}

export const passwordRules = {
  required,
  minLength: {
    value: 8,
    message: 'Минимум 8 символов',
  },
  pattern: {
    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])./,
    message: 'Пароль должен содержать '
  }
}


export const emailRules = {
  required,
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Введите корректную почту',
  },
}

export const nameRules = {
  required,
}

export const usernameRules = {
  required,
  minLength: {
    value: 3,
    message: 'Минимум 3 символа'
  }
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