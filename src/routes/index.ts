import { Router } from 'express'
import { categoriesRoutes } from './category'

const routes = Router()

routes.use('/api/categories', categoriesRoutes)

export { routes }
