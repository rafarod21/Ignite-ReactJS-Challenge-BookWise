import { ComponentProps } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import { RatingStars } from '../RatingStars'

import { Book } from '@/@types/book'

import { BookCardContainer, BookCardInfo } from './styles'

interface BookCardProps extends ComponentProps<typeof Dialog.Trigger> {
  book: Book
  rating?: number
  hasSummary?: boolean
}

export function BookCard({
  book,
  rating = -1,
  hasSummary = false,
  ...props
}: BookCardProps) {
  return (
    <Dialog.Trigger {...props}>
      <BookCardContainer hasSummary={hasSummary}>
        <div>
          <Image src={book.coverUrl} height={94} width={64} alt={book.name} />
          <BookCardInfo>
            <div>
              <h4>{book.name}</h4>
              <span>{book.author}</span>
            </div>
            <RatingStars rating={rating === -1 ? book.rate : rating} />
          </BookCardInfo>
        </div>
        {hasSummary && <p>{book.summary}</p>}
      </BookCardContainer>
    </Dialog.Trigger>
  )
}
