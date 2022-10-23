import { Request } from 'express'
import { createCategory } from '../../services/category'

export const createCategoryController = async (req: Request) => {
  const { name, description } = req.body

  await createCategory({ name, description })
}
