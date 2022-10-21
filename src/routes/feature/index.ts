import { Router } from 'express'
import {
  createFeatureController,
  getFeaturesController,
} from '../../controllers/feature'

export const featuresRoutes = Router()

featuresRoutes.post('/', (req, res) => {
  try {
    createFeatureController(req)

    return res.status(201).send()
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
featuresRoutes.get('/:name?', (req, res) => {
  try {
    const result = getFeaturesController(req)

    return res.status(200).json(result)
  } catch (error) {
    const { message } = error as Error

    return res.status(400).json({ error: message })
    //next(error)
  }
})
