import express from 'express'
import { categoriesRoute } from './routes/categories'

const app = express()

app.use(express.json())

app.use(categoriesRoute)

app.listen(3333, () => {
  console.log('Server is running')
})
