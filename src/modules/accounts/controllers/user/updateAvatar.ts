import { Request } from 'express'
import { ApiError } from '../../../../errors/ApiError'
import { updateAvatarService } from '../../services/user/update'

export const updateAvatarController = async (req: Request) => {
  const { email } = req.body
  const avatarFileName = req.file?.filename

  if (!avatarFileName) {
    throw new ApiError('Avatar file is required', 400)
  }
  console.log('avatarFileName', avatarFileName)

  await updateAvatarService({ email, avatarFileName })
}
