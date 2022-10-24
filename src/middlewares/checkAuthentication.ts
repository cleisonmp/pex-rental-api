import { Request, Response, NextFunction } from 'express'
import { getByEmail } from '../modules/accounts/models'
import { verifyToken } from '../modules/auth/services'

export const checkAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers

  if (!authorization) {
    //throw new Error('Token not present.')
    return res.status(401).json({
      message: 'Token not present.',
    })
  }

  const authorizationToken = authorization?.split(' ')[1]

  if (!authorizationToken) {
    //throw new Error('Token not present.')
    return res.status(401).json({
      message: 'Token not present.',
    })
  }

  try {
    const tokenUserInfo = verifyToken(authorizationToken)

    const user = await getByEmail(tokenUserInfo.email)

    if (!user) {
      throw new Error('Invalid token.')
    }

    //req.user = tokenUserInfo

    await next()
  } catch (err) {
    //throw new Error('Token not present.')
    return res.status(401).json({
      message: 'Token invalid or expired.',
    })
  }
}
