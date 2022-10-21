import { Request } from 'express'
import { createFeature } from '../../services/feature'

export const createFeatureController = (req: Request) => {
  const { name, description } = req.body

  createFeature({ name, description })
}
