import { Request } from 'express'
import { getAllUsers, getUserByEmail } from '../../services/user'

export const getUsersController = async (req: Request) => {
  const { email } = req.body
  if (email) {
    return await getUserByEmail(email)
  } else {
    return await getAllUsers()
  }
}
