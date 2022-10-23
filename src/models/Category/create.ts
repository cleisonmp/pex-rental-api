import { getRepository } from 'typeorm'

import { Category } from '.'

interface CreateCategoryProps {
  name: string
  description: string
}

export const create = async ({ name, description }: CreateCategoryProps) => {
  const repository = getRepository(Category)
  const category = repository.create({ name, description })

  await repository.save(category)
  /*categoriesDB.push({
    id: uuidV4(),
    name,
    description,
    created_at: new Date(),
  })*/
}
