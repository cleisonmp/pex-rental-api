import { getAll, getByName } from '../../models/Feature'

export const getAllFeatures = async () => {
  const features = await getAll()

  if (!features || features.length <= 0) {
    throw new Error(`No feature was found`)
  }

  return features
}
export const getFeatureByName = async (name: string) => {
  const feature = await getByName(name)

  if (!feature) {
    throw new Error(`Feature ${name} not found`)
  }

  return feature
}
