import { getRepository } from 'typeorm'

import { Feature } from '.'

export type CreateFeatureProps = Omit<Feature, 'id' | 'created_at'>

export const create = async ({ name, description }: CreateFeatureProps) => {
  const repository = getRepository(Feature)
  const feature = repository.create({ name, description })

  await repository.save(feature)
}
