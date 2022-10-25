import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../errors/ApiError'
import { getByEmail } from '../modules/accounts/models/user'
import { verifyToken } from '../modules/auth/services'

export const checkAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new ApiError('Token not present.', 401)
  }

  const authorizationToken = authorization?.split(' ')[1]

  if (!authorizationToken) {
    throw new ApiError('Token not present.', 401)
  }

  const tokenUserInfo = verifyToken(authorizationToken)

  const user = await getByEmail(tokenUserInfo.email)

  if (!user) {
    throw new ApiError('Invalid token.', 401)
  }

  req.userInfo = user

  await next()
}
