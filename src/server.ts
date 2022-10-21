import express from 'express'
import { categoriesRoutes } from './routes/category'

const app = express()

app.use(express.json())

app.use('/api/categories', categoriesRoutes)

app.listen(3333, () => {
  console.log('Server is running')
})
