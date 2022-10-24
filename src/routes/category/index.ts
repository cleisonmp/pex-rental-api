import { Router } from 'express'
import multer from 'multer'
import { checkAuthentication } from '../../middlewares'

import {
  createCategoryController,
  getCategoriesController,
} from '../../modules/cars/controllers/category'
import { importCategoriesController } from '../../modules/cars/controllers/category/importCategories'

export const categoriesRoutes = Router()
const upload = multer({
  dest: './tmp',
})

categoriesRoutes.use(checkAuthentication)

categoriesRoutes.post('/', async (req, res) => {
  await createCategoryController(req)

  return res.status(201).send()
})

categoriesRoutes.get('/:name?', async (req, res) => {
  const result = await getCategoriesController(req)

  return res.status(200).json(result)
})

categoriesRoutes.post('/import', upload.single('file'), async (req, res) => {
  const result = await importCategoriesController(req)

  if (result.errors) {
    return res.status(409).json(result)
  }

  return res.status(201).json()
})
