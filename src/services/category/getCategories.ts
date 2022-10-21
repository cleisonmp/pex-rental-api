import { getAll, getByName } from '../../models/Category'

export const getAllCategories = () => {
  const categories = getAll()

  if (!categories || categories.length <= 0) {
    throw new Error(`No category was found`)
  }

  return categories
}
export const getCategoryByName = (name: string) => {
  const category = getByName(name)

  if (!category) {
    throw new Error(`Category ${name} not found`)
  }

  return category
}
/*export const getCategoryById = (id: string) => {
  return getById(id)
}*/
