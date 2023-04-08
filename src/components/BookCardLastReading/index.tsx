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
}

export function BookCardLastReading({ book }: BookCardLastReadingProps) {
  return (
    <>
      {/* Version lg */}
      <BookCardLastReadingContainer>
        <Image
          src={book.cover_url}
          height={160}
          width={110}
          alt="Nome do livro"
        />
        <BookCardLastReadingContent>
          <BookCardLastReadingHeader>
            <span>Há 2 dias</span>
            <RatingStars rating={4} />
          </BookCardLastReadingHeader>
          <h4>{book.name}</h4>
          <span>{book.author}</span>
          <p>{book.summary}</p>
        </BookCardLastReadingContent>
      </BookCardLastReadingContainer>

      {/* Version md and sm */}
      <BookCardLastReadingContainer2>
        <BookCardLastReadingHeader>
          <span>Há 2 dias</span>
          <RatingStars rating={4} />
        </BookCardLastReadingHeader>
        <div>
          <Image
            src={book.cover_url}
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
