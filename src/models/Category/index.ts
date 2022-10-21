export interface Category {
  id: string
  name: string
  description: string
  created_at: Date
}

export const categoriesDB: Category[] = []

export * from './create'
export * from './get'
