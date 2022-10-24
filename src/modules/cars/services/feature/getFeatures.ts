import { ApiError } from '../../../../errors/ApiError'
import { getAll, getByName } from '../../models/Feature'

export const getAllFeatures = async () => {
  const features = await getAll()

  if (!features || features.length <= 0) {
    throw new ApiError(`No feature was found`, 404)
  }

  return features
}
export const getFeatureByName = async (name: string) => {
  const feature = await getByName(name)

  if (!feature) {
    throw new ApiError(`Feature ${name} not found`, 404)
  }

  return feature
}
