import { Router } from 'express'
import {
  createCategoryController,
  getCategoriesController,
} from '../../controllers/category'

export const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) => {
  try {
    createCategoryController(req)

    return res.status(201).send()
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
categoriesRoutes.get('/:name?', (req, res) => {
  try {
    const result = getCategoriesController(req)

    return res.status(200).json(result)
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
