import { Request } from 'express'

import { getAllCategories, getCategoryByName } from '../../services/category'

export const getCategoriesController = async (req: Request) => {
  if (req.params.name) {
    return await getCategoryByName(req.params.name)
  } else {
    return await getAllCategories()
  }
}
