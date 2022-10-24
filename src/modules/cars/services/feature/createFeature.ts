import { create, getByName } from '../../models/Feature'

export interface CreateFeatureProps {
  name: string
  description: string
}

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
