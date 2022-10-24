import { getRepository } from 'typeorm'
import { User } from '.'

export const getAll = async () => {
  const repository = getRepository(User)
  return await repository.find()
}
export const getByEmail = async (email: string) => {
  const repository = getRepository(User)
  return await repository.findOne({ email })
}
