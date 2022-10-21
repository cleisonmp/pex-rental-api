import { create, getByName } from '../../models/Category'

export interface CreateCategoryProps {
  name: string
  description: string
}

export const createCategory = ({ name, description }: CreateCategoryProps) => {
  if (!getByName(name)) {
    create({ name, description })
  } else {
    throw new Error(`Category ${name} already exists`)
  }
}
