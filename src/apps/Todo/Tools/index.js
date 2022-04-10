export const getCategoryName = (categories, categorynName) => {
  return categories.find(x => x.id === categorynName)?.name
}






const token = localStorage.getItem('userToken')

export const headers = {
  'Authorization': `Token ${token}`
}