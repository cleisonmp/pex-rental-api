import { categoriesDB } from '.'

export const getAll = () => {
  return categoriesDB
}
export const getByName = (name: string) => {
  return categoriesDB.find((category) => category.name === name)
}
/*export const getById = (id: string) => {
  return categoriesDB.find((category) => category.id === id)
}*/
