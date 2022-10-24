import { ApiError } from '../../../../errors/ApiError'
import { create, CreateFeatureProps, getByName } from '../../models/Feature'

export const createFeature = async ({
  name,
  description,
}: CreateFeatureProps) => {
  if (!(await getByName(name))) {
    await create({ name, description })
  } else {
    throw new ApiError(`Feature ${name} already exists`, 409)
  }
}
