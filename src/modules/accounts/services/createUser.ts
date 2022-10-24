import { create, CreateUserProps, getByEmail } from '../models'

export const createUser = async (user: CreateUserProps) => {
  if (!(await getByEmail(user.email))) {
    await create(user)
  } else {
    throw new Error(`Email ${user.email} already exists`)
  }
}
