import { ApiError } from '../../../../errors/ApiError'
import { getAll, getByName } from '../../models/Category'

export const getAllCategories = async () => {
  const categories = await getAll()

  if (!categories || categories.length <= 0) {
    throw new ApiError(`No category was found`, 404)
  }

  return categories
}
export const getCategoryByName = async (name: string) => {
  const category = await getByName(name)

  if (!category) {
    throw new ApiError(`Category ${name} not found`, 404)
  }

  return category
}
