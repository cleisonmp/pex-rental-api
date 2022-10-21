import { Request } from 'express'

import { getAllFeatures, getFeatureByName } from '../../services/feature'

export const getFeaturesController = (req: Request) => {
  if (req.params.name) {
    return getFeatureByName(req.params.name)
  } else {
    return getAllFeatures()
  }
}
