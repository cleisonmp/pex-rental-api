import { Router } from 'express'

export const categoriesRoute = Router()

const categories = []

categoriesRoute.post('/categories', (req, res) => {
  const { name, description } = req.body

  categories.push({
    name,
    description,
  })

  return res.status(201).send()
})
