import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'

import { RatingStars } from '../RatingStars'

import { Book } from '@/@types/book'

import { BookCardContainer, BookCardInfo } from './styles'

interface BookCardProps {
  book: Book
  rating: number
  hasSummary?: boolean
}

export function BookCard({ book, rating, hasSummary = false }: BookCardProps) {
  return (
    <Dialog.Trigger asChild>
      <BookCardContainer hasSummary={hasSummary}>
        <div>
          <Image
            src={book.cover_url}
            height={94}
            width={64}
            alt="Nome do livro"
          />
          <BookCardInfo>
            <div>
              <h4>{book.name}</h4>
              <span>{book.author}</span>
            </div>
            <RatingStars rating={rating} />
          </BookCardInfo>
        </div>
        {hasSummary && <p>{book.summary}</p>}
      </BookCardContainer>
    </Dialog.Trigger>
  )
}
