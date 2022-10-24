import { compare } from 'bcryptjs'
import { generateJwtAndRefreshToken } from '.'
import { getByEmail } from '../../accounts/models'

export const checkUserCredentials = async (email: string, password: string) => {
  const user = await getByEmail(email)
  if (!user) {
    throw new Error('Invalid user credentials.')
  }
  const passwordIsCorrect = await compare(password, user.password)

  if (!passwordIsCorrect) {
    throw new Error('Invalid user credentials.')
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
