const initialState = {
  userToken: !!localStorage.getItem('userToken'),
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case 'SET_USER_TOKEN':
    return {
      ...state,
      userToken: payload,
    }
  default: return state
  }
}
