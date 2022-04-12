const token = localStorage.getItem('userToken')

export const headers = {
  'Authorization': `Token ${token}`
}