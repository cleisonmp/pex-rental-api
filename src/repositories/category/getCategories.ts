import { categoriesDB } from '.'

export const getAllCategories = () => {
  return categoriesDB
}
export const getCategoryByName = (name: string) => {
  return categoriesDB.find((category) => category.name === name)
}
export const getCategoryById = (id: string) => {
  return categoriesDB.find((category) => category.id === id)
}
