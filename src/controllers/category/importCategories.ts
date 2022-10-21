import { Request } from 'express'
import { importCategories } from '../../services/category'

export const importCategoriesController = async (req: Request) => {
  const { file } = req

  if (file) {
    const errorList = await importCategories(file)
    if (errorList.length > 0) {
      return { state: 'Import finished with errors', errors: errorList }
      //throw new Error('Import finishes with errors: '+)
    } else {
      return { state: 'Import finished without errors' }
    }
  } else {
    throw new Error('File not found')
  }
}
