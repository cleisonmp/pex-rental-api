import { Request } from 'express'
import { createUser } from '../../services/user'

export const createUserController = async (req: Request) => {
  const { name, password, email, drivers_license } = req.body

  await createUser({ name, password, email, drivers_license })
}
