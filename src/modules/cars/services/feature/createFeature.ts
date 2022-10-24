import { create, CreateFeatureProps, getByName } from '../../models/Feature'

export const createFeature = async ({
  name,
  description,
}: CreateFeatureProps) => {
  if (!(await getByName(name))) {
    await create({ name, description })
  } else {
    throw new Error(`Feature ${name} already exists`)
  }
}
