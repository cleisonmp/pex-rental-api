import { create, getByName } from '../../models/Category'

export interface CreateCategoryProps {
  name: string
  description: string
}

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
