import { Router } from 'express'
import {
  createUserController,
  getUsersController,
} from '../../modules/accounts/controllers/user'

export const usersRoutes = Router()

usersRoutes.post('/', async (req, res) => {
  await createUserController(req)

  return res.status(201).send()
})
usersRoutes.get('/:email?', async (req, res) => {
  const result = await getUsersController(req)

  return res.status(200).json(result)
})
