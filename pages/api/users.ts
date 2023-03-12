import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../interfaces'
import { runMiddleware } from '../../utils/cors'

// Fake users data
const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  await runMiddleware(req, res)
  // Get data from your database
  res.status(200).json(users)
}
