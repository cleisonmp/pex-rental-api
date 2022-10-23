import { getAll, getByName } from '../../models/Category'

export const getAllCategories = async () => {
  const categories = await getAll()

  if (!categories || categories.length <= 0) {
    throw new Error(`No category was found`)
  }

  return categories
}
export const getCategoryByName = async (name: string) => {
  const category = await getByName(name)

  if (!category) {
    throw new Error(`Category ${name} not found`)
  }

  return category
}
