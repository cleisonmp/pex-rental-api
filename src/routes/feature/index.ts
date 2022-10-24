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
  try {
    await createFeatureController(req)

    return res.status(201).send()
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
featuresRoutes.get('/:name?', async (req, res) => {
  try {
    const result = await getFeaturesController(req)

    return res.status(200).json(result)
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
featuresRoutes.post('/import', upload.single('file'), async (req, res) => {
  try {
    const result = await importFeaturesController(req)

    return res.status(201).json(result)
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
