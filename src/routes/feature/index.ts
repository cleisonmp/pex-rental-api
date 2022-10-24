import { Router } from 'express'
import multer from 'multer'
import { checkAuthentication } from '../../middlewares'
import {
  createFeatureController,
  getFeaturesController,
  importFeaturesController,
} from '../../modules/cars/controllers/feature'

export const featuresRoutes = Router()
const upload = multer({
  dest: './tmp',
})

featuresRoutes.use(checkAuthentication)

featuresRoutes.post('/', async (req, res) => {
  await createFeatureController(req)

  return res.status(201).send()
})
featuresRoutes.get('/:name?', async (req, res) => {
  const result = await getFeaturesController(req)

  return res.status(200).json(result)
})
featuresRoutes.post('/import', upload.single('file'), async (req, res) => {
  const result = await importFeaturesController(req)

  if (result.errors) {
    return res.status(409).json(result)
  }

  return res.status(201).json()
})
