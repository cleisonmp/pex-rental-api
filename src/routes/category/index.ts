import { Router } from 'express'
import { createCategory, getAllCategories } from '../../repositories/category'

export const categoriesRoutes = Router()

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  try {
    createCategory({ name, description })

    return res.status(201).json(getAllCategories())
  } catch (error) {
    const { message } = error as Error
    return res.status(400).json({ error: message })
    //next(error)
  }
})
categoriesRoutes.get('/', (req, res) => {
  return res.status(200).json(getAllCategories())
})
