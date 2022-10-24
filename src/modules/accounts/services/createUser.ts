import { getHash } from '../../../utils/hashGenerator'
import { create, CreateUserProps, getByEmail } from '../models'

export const createUser = async (user: CreateUserProps) => {
  if (!(await getByEmail(user.email))) {
    const userWithPassHash = { ...user, password: await getHash(user.password) }
    await create(userWithPassHash)
  } else {
    throw new Error(`Email ${user.email} already exists`)
  }
}
