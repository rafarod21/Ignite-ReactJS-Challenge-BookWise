import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

const newRatingBodySchema = z.object({
  rate: z.number().min(1).max(5),
  description: z
    .string()
    .min(3, { message: 'A avaliação deve ter ao menos 3 caracteres' })
    .max(450, { message: 'A avaliação deve ter no máximo 450 caracteres' }),
  bookId: z.string(),
  userId: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { rate, description, bookId, userId } = newRatingBodySchema.parse(
    req.body,
  )

  await prisma.rating.create({
    data: {
      rate,
      description,
      book_id: bookId,
      user_id: userId,
    },
  })

  return res.status(201).end()
}
