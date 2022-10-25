import fs from 'fs'
import { ApiError } from '../errors/ApiError'

export const deleFile = async (folder: string, fileName: string) => {
  const filePath = folder + fileName

  try {
    await fs.promises.stat(filePath)
  } catch (error) {
    //file not found just skip it
    return
  }

  try {
    await fs.promises.unlink(filePath)
  } catch (error) {
    throw new ApiError(`Unable to remove file:${fileName}`, 500)
  }
}
