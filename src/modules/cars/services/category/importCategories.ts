import { loadCsvFile } from '../../../../utils/loadCsvFile'
import { createCategory } from './createCategory'

export const importCategories = async (file: Express.Multer.File) => {
  const newCategories = await loadCsvFile(file)
  const errorList: string[] = []

  await Promise.all(
    newCategories.map(async (category) => {
      const [name, description] = category
      //import does not stop for errors
      //errors are logged at the end of the import
      try {
        await createCategory({ name, description })
      } catch (error) {
        const { message } = error as Error
        errorList.push(message)
      }
    }),
  )
  return errorList
}
