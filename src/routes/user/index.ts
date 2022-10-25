import { Router } from 'express'
import multer from 'multer'
import { uploadTo } from '../../config/upload'
import { checkAuthentication } from '../../middlewares'
import {
  createUserController,
  getUsersController,
} from '../../modules/accounts/controllers/user'
import { updateAvatarController } from '../../modules/accounts/controllers/user/updateAvatar'

export const usersRoutes = Router()

const uploadAvatar = multer(uploadTo('./_files/avatar'))

usersRoutes.use(checkAuthentication)

usersRoutes.post('/', async (req, res) => {
  await createUserController(req)

  return res.status(201).send()
})
usersRoutes.get('/', async (req, res) => {
  const result = await getUsersController(req)

  return res.status(200).json(result)
})
usersRoutes.patch(
  '/avatar',
  uploadAvatar.single('avatar'),
  async (req, res) => {
    const result = await updateAvatarController(req)

    return res.status(201).json(result)
  },
)
