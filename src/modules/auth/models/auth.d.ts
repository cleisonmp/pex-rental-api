import { Request } from 'express'

export type ApiUserInfo = {
  user: {
    email: string
    role: string
    permissions: string[]
  }
}

export type RequestWithUser = Request & ApiUserInfo
