import { v4 as uuidV4 } from 'uuid'

import { categoriesDB } from '.'

interface CreateCategoryProps {
  name: string
  description: string
}

export const create = ({ name, description }: CreateCategoryProps) => {
  categoriesDB.push({
    id: uuidV4(),
    name,
    description,
    created_at: new Date(),
  })
}
