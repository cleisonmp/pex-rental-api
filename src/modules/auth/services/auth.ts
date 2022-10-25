import { compare } from 'bcryptjs'
import { generateJwtAndRefreshToken } from '.'
import { ApiError } from '../../../errors/ApiError'
import { getByEmail } from '../../accounts/models/user'

export const checkUserCredentials = async (email: string, password: string) => {
  const user = await getByEmail(email)
  if (!user) {
    throw new ApiError('Invalid user credentials.', 401)
  }
  const passwordIsCorrect = await compare(password, user.password)

  if (!passwordIsCorrect) {
    throw new ApiError('Invalid user credentials.', 401)
  }
  return {
    name: user.name,
    isAdmin: user.isAdmin,
  }
}

export const createUserSession = async (email: string, password: string) => {
  const user = await checkUserCredentials(email, password)
  const tokens = await generateJwtAndRefreshToken({
    email,
    payload: { isAdmin: user.isAdmin },
    userRefreshToken: '',
  })

  return { ...user, ...tokens }
}
