import { Request } from 'express'
import { createFeature } from '../../services/feature'

export const createFeatureController = async (req: Request) => {
  const { name, description } = req.body

  await createFeature({ name, description })
}
