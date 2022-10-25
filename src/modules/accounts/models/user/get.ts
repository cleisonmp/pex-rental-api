import { getRepository } from 'typeorm'
import { User } from '.'

export const getAll = async () => {
  const repository = getRepository(User)

  return await repository.find({
    order: { name: 'ASC' },
    select: [
      'id',
      'name',
      'email',
      'drivers_license',
      'avatar',
      'isAdmin',
      'created_at',
    ],
  })
}
export const getByEmail = async (email: string) => {
  const repository = getRepository(User)
  return await repository.findOne({ email })
}
