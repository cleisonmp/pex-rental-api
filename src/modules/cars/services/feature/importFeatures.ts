import fs from 'fs'
import { parse } from 'csv-parse'
import { createFeature } from '.'
import { CreateFeatureProps } from '../../models/Feature'

const loadFeatures = (
  file: Express.Multer.File,
): Promise<CreateFeatureProps[]> => {
  return new Promise((resolve, reject) => {
    const newFeatures: CreateFeatureProps[] = []

    const stream = fs.createReadStream(file.path)

    const fileParser = parse({
      delimiter: ';',
    })
    fileParser
      .on('data', async (line: string[]) => {
        const [name, description] = line
        newFeatures.push({ name, description })
      })
      .on('end', () => {
        fs.promises.unlink(file.path)
        resolve(newFeatures)
      })
      .on('error', (error) => {
        reject(error)
      })

    stream.pipe(fileParser)
  })
}

export const importFeatures = async (file: Express.Multer.File) => {
  const newFeatures = await loadFeatures(file)
  const errorList: string[] = []

  await Promise.all(
    newFeatures.map(async ({ name, description }) => {
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
