import { Router } from 'express'
import multer from 'multer'

import {
  createCategoryController,
  getCategoriesController,
} from '../../controllers/category'
import { importCategoriesController } from '../../controllers/category/importCategories'

export const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp',
})

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

    return res.status(404).json({ error: message })
    //next(error)
  }
})

categoriesRoutes.post('/import', upload.single('file'), async (req, res) => {
  try {
    const result = await importCategoriesController(req)

    return res.status(201).json(result)
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
