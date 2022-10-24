import { getRepository } from 'typeorm'
import { Feature } from '.'

export const getAll = async () => {
  const repository = getRepository(Feature)
  return await repository.find({ order: { name: 'ASC' } })
}
export const getByName = async (name: string) => {
  const repository = getRepository(Feature)
  return await repository.findOne({ name })
}
