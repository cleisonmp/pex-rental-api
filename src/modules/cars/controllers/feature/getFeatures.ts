import { Request } from 'express'
import { getAllFeatures, getFeatureByName } from '../../services/feature'

export const getFeaturesController = async (req: Request) => {
  if (req.params.name) {
    return await getFeatureByName(req.params.name)
  } else {
    return await getAllFeatures()
  }
}
