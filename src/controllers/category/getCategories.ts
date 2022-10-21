import { Request } from 'express'

import { getAllCategories, getCategoryByName } from '../../services/category'

export const getCategoriesController = (req: Request) => {
  if (req.params.name) {
    return getCategoryByName(req.params.name)
  } else {
    return getAllCategories()
  }
}
