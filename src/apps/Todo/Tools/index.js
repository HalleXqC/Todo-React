export const getCategoryName = (categories, categorynName) => {
  return categories.find(x => x.id === categorynName)?.name
}