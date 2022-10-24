import { getRepository } from 'typeorm'
import { User } from '.'

export const getAll = async () => {
  const repository = getRepository(User)
  return await repository.find({ order: { name: 'ASC' } })
}
export const getByEmail = async (email: string) => {
  const repository = getRepository(User)
  return await repository.findOne({ email })
}
