import { featuresDB } from '.'

export const getAll = () => {
  return featuresDB
}
export const getByName = (name: string) => {
  return featuresDB.find((category) => category.name === name)
}
