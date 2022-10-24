import { hash } from 'bcryptjs'

export const getHash = async (content: string, saltRounds = 10) => {
  return await hash(content, saltRounds)
}
