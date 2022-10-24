import { ApiError } from '../../../../errors/ApiError'
import { create, CreateCategoryProps, getByName } from '../../models/Category'

export const createCategory = async ({
  name,
  description,
}: CreateCategoryProps) => {
  if (!(await getByName(name))) {
    await create({ name, description })
  } else {
    throw new ApiError(`Category ${name} already exists`, 409)
  }
}
