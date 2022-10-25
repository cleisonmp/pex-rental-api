declare namespace Express {
  export interface Request {
    userInfo: {
      id: string
      name: string
      email: string
      password: string
      drivers_license: string
      isAdmin: boolean
      created_at: Date
      avatar?: string
    }
  }
}
