import { getRepository } from 'typeorm'

import { getByEmail, User } from '.'

export const updateAvatar = async (email: string, avatar: string) => {
  const repository = getRepository(User)
  const currentUser = await getByEmail(email)
  const updatedUser = repository.create({
    ...currentUser,
    avatar,
  })

  await repository.save(updatedUser)
}
