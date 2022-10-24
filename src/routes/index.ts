import { Router } from 'express'
import { authRoutes } from './auth'
import { categoriesRoutes } from './category'
import { featuresRoutes } from './feature'
import { usersRoutes } from './user'

const routes = Router()

routes.use('/api/categories', categoriesRoutes)
routes.use('/api/features', featuresRoutes)
routes.use('/api/users/', usersRoutes)
routes.use('/api/auth/', authRoutes)

export { routes }
