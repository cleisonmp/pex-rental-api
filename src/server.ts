import express from 'express'
import 'express-async-errors'
import { routes } from './routes'
import swaggerUi from 'swagger-ui-express'

import swaggerFile from '../swagger-api-docs.json'
import './database'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(express.json())

app.use(routes)

app.use(errorHandler)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3333, () => {
  console.log('Server is running.')
})
