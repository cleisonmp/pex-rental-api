export interface Feature {
  id: string
  name: string
  description: string
  created_at: Date
}

export const featuresDB: Feature[] = []

export * from './create'
export * from './get'
