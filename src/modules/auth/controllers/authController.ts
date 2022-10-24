import { Request } from 'express'
import { createUserSession } from '../services/auth'

export const authController = async (req: Request) => {
  const { email, password } = req.body

  return await createUserSession(email, password)
}
