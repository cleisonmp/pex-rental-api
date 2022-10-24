import fs from 'fs'
import { parse } from 'csv-parse'
import { createCategory, CreateCategoryProps } from './createCategory'

const loadCategories = (
  file: Express.Multer.File,
): Promise<CreateCategoryProps[]> => {
  return new Promise((resolve, reject) => {
    const newCategories: CreateCategoryProps[] = []

    const stream = fs.createReadStream(file.path)

    const fileParser = parse({
      delimiter: ';',
    })
    fileParser
      .on('data', async (line: string[]) => {
        const [name, description] = line
        newCategories.push({ name, description })
      })
      .on('end', () => {
        fs.promises.unlink(file.path)
        resolve(newCategories)
      })
      .on('error', (error) => {
        reject(error)
      })

    stream.pipe(fileParser)
  })
}

export const importCategories = async (file: Express.Multer.File) => {
  const newCategories = await loadCategories(file)
  const errorList: string[] = []

  await Promise.all(
    newCategories.map(async ({ name, description }) => {
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
