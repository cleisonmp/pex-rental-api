import { create, getByName } from '../../models/Feature'

interface CreateFeatureProps {
  name: string
  description: string
}

export const createFeature = ({ name, description }: CreateFeatureProps) => {
  if (!getByName(name)) {
    create({ name, description })
  } else {
    throw new Error(`Feature ${name} already exists`)
  }
}
