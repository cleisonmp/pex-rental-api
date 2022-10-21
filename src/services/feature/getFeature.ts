import { getAll, getByName } from '../../models/Feature'

export const getAllFeatures = () => {
  const features = getAll()

  if (!features || features.length <= 0) {
    throw new Error(`No feature was found`)
  }

  return features
}
export const getFeatureByName = (name: string) => {
  const feature = getByName(name)

  if (!feature) {
    throw new Error(`Feature ${name} not found`)
  }

  return feature
}
