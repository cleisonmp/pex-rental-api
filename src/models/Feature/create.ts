import { v4 as uuidV4 } from 'uuid'

import { featuresDB } from '.'

interface CreateFeatureProps {
  name: string
  description: string
}

export const create = ({ name, description }: CreateFeatureProps) => {
  featuresDB.push({
    id: uuidV4(),
    name,
    description,
    created_at: new Date(),
  })
}
