import { Request } from 'express'
import { importFeatures } from '../../services/feature'

export const importFeaturesController = async (req: Request) => {
  const { file } = req

  if (file) {
    const errorList = await importFeatures(file)

    if (errorList.length > 0) {
      return { state: 'Import finished with errors', errors: errorList }
    } else {
      return { state: 'Import finished without errors' }
    }
  } else {
    throw new Error('File not found')
  }
}
