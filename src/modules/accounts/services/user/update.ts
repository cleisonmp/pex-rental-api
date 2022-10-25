import { ApiError } from '../../../../errors/ApiError'
import { getByEmail, updateAvatar } from '../../models/user'

interface UpdateAvatarProps {
  email: string
  avatarFileName: string
}

export const updateAvatarService = async ({
  email,
  avatarFileName,
}: UpdateAvatarProps) => {
  const user = await getByEmail(email)

  if (!user) {
    throw new ApiError(`User with email ${email} not found`, 404)
  }
  await updateAvatar(email, avatarFileName)
}
