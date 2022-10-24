import { Router } from 'express'
import { authController } from '../../modules/auth/controllers'

export const authRoutes = Router()

authRoutes.post('/', async (req, res) => {
  try {
    const userSessionInfo = await authController(req)

    return res.status(200).json(userSessionInfo)
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
