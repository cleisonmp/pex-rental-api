import { Router } from 'express'
import {
  createUserController,
  getUsersController,
} from '../../modules/accounts/controllers'

export const usersRoutes = Router()

usersRoutes.post('/', async (req, res) => {
  try {
    await createUserController(req)

    return res.status(201).send()
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
usersRoutes.get('/:email?', async (req, res) => {
  try {
    const result = await getUsersController(req)

    return res.status(200).json(result)
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
