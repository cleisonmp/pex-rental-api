import { getRepository } from 'typeorm'
import { Category } from '.'

export const getAll = async () => {
  const repository = getRepository(Category)
  return await repository.find({ order: { name: 'ASC' } })
}
export const getByName = async (name: string) => {
  const repository = getRepository(Category)
  return await repository.findOne({ name })
}
