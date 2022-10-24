import { create, CreateCategoryProps, getByName } from '../../models/Category'

export const createCategory = async ({
  name,
  description,
}: CreateCategoryProps) => {
  if (!(await getByName(name))) {
    await create({ name, description })
  } else {
    throw new Error(`Category ${name} already exists`)
  }
}
