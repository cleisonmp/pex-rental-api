import { getAll, getByEmail } from '../models'

export const getAllUsers = async () => {
  const users = await getAll()

  if (!users || users.length <= 0) {
    throw new Error(`No user was found`)
  }

  return users
}
export const getUserByEmail = async (email: string) => {
  const user = await getByEmail(email)

  if (!user) {
    throw new Error(`User with email ${email} not found`)
  }

  return user
}
