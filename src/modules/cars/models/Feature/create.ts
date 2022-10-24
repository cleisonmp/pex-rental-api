import { getRepository } from 'typeorm'

import { Feature } from '.'

interface CreateFeatureProps {
  name: string
  description: string
}

export const create = async ({ name, description }: CreateFeatureProps) => {
  const repository = getRepository(Feature)
  const category = repository.create({ name, description })

  await repository.save(category)
}
