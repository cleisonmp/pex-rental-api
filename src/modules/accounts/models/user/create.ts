import { getRepository } from 'typeorm'

import { User } from '.'

export type CreateUserProps = Omit<User, 'id' | 'isAdmin' | 'created_at'>

export const create = async (user: CreateUserProps) => {
  const repository = getRepository(User)
  const category = repository.create({
    ...user,
  })

  await repository.save(category)
}
