import { v4 as uuidV4 } from 'uuid'

import { categoriesDB, getCategoryByName } from '.'

interface CreateCategoryProps {
  name: string
  description: string
}

export const createCategory = ({ name, description }: CreateCategoryProps) => {
  if (!getCategoryByName(name)) {
    categoriesDB.push({
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    })
  } else {
    throw new Error('Category already exists')
  }
}
