export const getCategoryName = (categories, categoryName) => {
  return categories?.find(x => x.id === categoryName)
}






const token = localStorage.getItem('userToken')

export const headers = token && {
  'Authorization': `Token ${token}`
}