import { Request } from 'express'
import { createCategory } from '../../services/category'

export const createCategoryController = (req: Request) => {
  const { name, description } = req.body

  createCategory({ name, description })
}
