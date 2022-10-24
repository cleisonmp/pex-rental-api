import { Router } from 'express'
import { authController } from '../../modules/auth/controllers'

export const authRoutes = Router()

authRoutes.post('/', async (req, res) => {
  const userSessionInfo = await authController(req)

  return res.status(200).json(userSessionInfo)
})
