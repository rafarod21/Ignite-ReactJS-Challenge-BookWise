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

  const prismaCategories = await prisma.categoriesOnBooks.findMany({
    where: {
      book_id: bookId,
    },
    include: {
      category: true,
    },
  })

  const categories = prismaCategories.map((category) => category.category.name)

  return res.json({ categories })
}
