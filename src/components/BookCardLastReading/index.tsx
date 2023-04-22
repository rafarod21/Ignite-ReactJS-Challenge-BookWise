import dayjs from 'dayjs'
import Image from 'next/image'

import { RatingStars } from '../RatingStars'

import { Book } from '@/@types/book'

import {
  BookCardLastReadingContainer,
  BookCardLastReadingContainer2,
  BookCardLastReadingContent,
  BookCardLastReadingHeader,
} from './styles'

interface BookCardLastReadingProps {
  book: Book
  rating: {
    rate: number
    createdAtAsString: string
  }
}

export function BookCardLastReading({
  book,
  rating,
}: BookCardLastReadingProps) {
  return (
    <>
      {/* Version lg */}
      <BookCardLastReadingContainer>
        <Image
          src={book.coverUrl}
          height={160}
          width={110}
          alt="Nome do livro"
        />
        <BookCardLastReadingContent>
          <div>
            <BookCardLastReadingHeader>
              <span>{dayjs(rating.createdAtAsString).fromNow()}</span>
              <RatingStars rating={rating.rate} />
            </BookCardLastReadingHeader>
            <h4>{book.name}</h4>
            <span>{book.author}</span>
          </div>
          <p>{book.summary}</p>
        </BookCardLastReadingContent>
      </BookCardLastReadingContainer>

      {/* Version md and sm */}
      <BookCardLastReadingContainer2>
        <BookCardLastReadingHeader>
          <span>{dayjs(rating.createdAtAsString).fromNow()}</span>
          <RatingStars rating={rating.rate} />
        </BookCardLastReadingHeader>
        <div>
          <Image
            src={book.coverUrl}
            height={160}
            width={110}
            alt="Nome do livro"
          />
          <BookCardLastReadingContent>
            <h4>{book.name}</h4>
            <span>{book.author}</span>
          </BookCardLastReadingContent>
        </div>
        <p>{book.summary}</p>
      </BookCardLastReadingContainer2>
    </>
  )
}
