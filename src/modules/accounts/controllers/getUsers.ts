import { Request } from 'express'
import { getAllUsers, getUserByEmail } from '../services'

export const getUsersController = async (req: Request) => {
  if (req.params.email) {
    return await getUserByEmail(req.params.email)
  } else {
    return await getAllUsers()
  }
}
