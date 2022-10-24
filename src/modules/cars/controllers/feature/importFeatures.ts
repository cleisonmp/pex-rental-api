import { Request } from 'express'
import { ApiError } from '../../../../errors/ApiError'
import { importFeatures } from '../../services/feature'

export const importFeaturesController = async (req: Request) => {
  const { file } = req

  if (file) {
    const errorList = await importFeatures(file)

    if (errorList.length > 0) {
      return { message: 'Import finished with errors', errors: errorList }
    }
    return { message: 'Import finished without errors' }
  } else {
    throw new ApiError('File not found', 400)
  }
}
