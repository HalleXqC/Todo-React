export const getCategoryName = (categories, categoryName) => {
  return categories?.find(x => x.id === categoryName)
}






const token = localStorage.getItem('userToken')

export const headers = {
  'Authorization': `Token ${token}`
}