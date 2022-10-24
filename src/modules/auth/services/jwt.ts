import jwt from 'jsonwebtoken'
import jwtDecode from 'jwt-decode'
import { v4 as uuidV4 } from 'uuid'

export interface GenerateJwtAndRefreshTokenProps {
  email: string
  payload: { isAdmin: boolean }
  userRefreshToken: string
}

export interface DecodedToken {
  permissions: string[]
  role: string
  iat: number
  exp: number
  sub: string
}

export interface TokenContent {
  email: string
  permissions?: string[]
  role?: string
}

//TODO: refreshToken

export const getTokenEmail = (authorizationToken: string): TokenContent => {
  try {
    const tokenData = jwtDecode(authorizationToken) as DecodedToken

    return { email: tokenData.sub }
  } catch (error) {
    throw new Error('Invalid token format.')
  }
}

export const verifyToken = (authorizationToken: string): TokenContent => {
  try {
    const tokenData = jwt.verify(
      authorizationToken as string,
      'process.env.AUTH_SECRET',
    ) as DecodedToken

    return {
      permissions: tokenData.permissions,
      role: tokenData.role,
      email: tokenData.sub,
    }
  } catch (error) {
    throw new Error('Token expired.')
  }
}

const getUserRefreshTokens = async (email: string) => {
  try {
    const storedRefreshTokens = [email + ' get from DB']

    return storedRefreshTokens
  } catch (error) {
    return []
  }
}

const setUserRefreshTokens = async (email: string, refreshTokens: string[]) => {
  console.log('update db with:', email, refreshTokens)
}

export const checkRefreshTokenIsValid = async (
  email: string,
  refreshToken: string,
) => {
  try {
    const isRefreshTokenValid =
      'token exists on DB of user?' === email + refreshToken

    return isRefreshTokenValid
  } catch (error) {
    throw new Error('Refresh token is invalid.')
  }
}

/*const invalidateRefreshToken = async (email: string, refreshToken: string) => {
  const storedRefreshTokens = (await getUserRefreshTokens(email)) ?? []
  console.log('storedRefreshTokens', storedRefreshTokens)

  setUserRefreshTokens(
    email,
    storedRefreshTokens.filter((token) => token !== refreshToken),
  )
}*/

export const createRefreshToken = async (
  email: string,
  userRefreshToken: string,
) => {
  const storedRefreshTokens = (await getUserRefreshTokens(email)) ?? []
  const refreshToken = uuidV4()

  const newRefreshTokens = storedRefreshTokens.filter(
    (token) => token !== userRefreshToken,
  )

  setUserRefreshTokens(email, [...newRefreshTokens, refreshToken])

  return refreshToken
}

export const generateJwtAndRefreshToken = async ({
  email,
  payload,
  userRefreshToken,
}: GenerateJwtAndRefreshTokenProps) => {
  const token = jwt.sign(payload, 'process.env.AUTH_SECRET', {
    subject: email,
    expiresIn: '7d',
  })

  const refreshToken = await createRefreshToken(email, userRefreshToken)

  return {
    token,
    refreshToken,
  }
}
