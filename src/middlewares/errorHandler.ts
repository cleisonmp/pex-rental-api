import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../errors/ApiError'

export const errorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  console.log('=======errorHandler=======')
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      message: error.message,
    })
  }
  return res.status(500).json({
    message: `Internal Server Error: ${error.message}`,
  })
}
