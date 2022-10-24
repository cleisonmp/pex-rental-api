import fs from 'fs'
import { parse } from 'csv-parse'
import { ApiError } from '../errors/ApiError'

export const loadCsvFile = (file: Express.Multer.File): Promise<string[][]> => {
  if (file.mimetype !== 'text/csv') {
    throw new ApiError(
      `Wrong file type, a csv file is required, received:${file.mimetype}`,
      415,
    )
  }

  return new Promise((resolve, reject) => {
    const contentArray: string[][] = []

    const stream = fs.createReadStream(file.path)

    const fileParser = parse({
      delimiter: ';',
    })

    fileParser
      .on('data', async (line: string[]) => {
        contentArray.push(line)
      })
      .on('end', () => {
        fs.promises.unlink(file.path)
        resolve(contentArray)
      })
      .on('error', (error) => {
        reject(error)
      })

    stream.pipe(fileParser)
  })
}
