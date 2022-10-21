import { Router } from 'express'
import { categoriesRoutes } from './category'
import { featuresRoutes } from './feature'

const routes = Router()

routes.use('/api/categories', categoriesRoutes)
routes.use('/api/features', featuresRoutes)

export { routes }
