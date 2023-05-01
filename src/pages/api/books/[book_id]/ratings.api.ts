import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const bookId = String(req.query.book_id)

  if (!bookId) {
    return res.status(400).json({ message: 'Book not provided.' })
  }

  const prismaRatings = await prisma.rating.findMany({
    where: {
      book_id: bookId,
    },
    include: {
      user: true,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  const ratings = prismaRatings.map((rating) => {
    return {
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      createdAtAsString: rating.created_at.toISOString(),
      user: {
        id: rating.user.id,
        name: rating.user.name,
        avatarUrl: rating.user.avatar_url,
        createdAtAsString: rating.user.created_at.toISOString(),
      },
    }
  })

  return res.json({ ratings })
}
