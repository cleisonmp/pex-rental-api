import { createFeature } from '.'
import { loadCsvFile } from '../../../../utils/loadCsvFile'

export const importFeatures = async (file: Express.Multer.File) => {
  const newFeatures = await loadCsvFile(file)
  const errorList: string[] = []

  await Promise.all(
    newFeatures.map(async (feature) => {
      const [name, description] = feature
      //import does not stop for errors
      //errors are logged at the end of the import
      try {
        await createFeature({ name, description })
      } catch (error) {
        const { message } = error as Error
        errorList.push(message)
      }
    }),
  )
  return errorList
}
