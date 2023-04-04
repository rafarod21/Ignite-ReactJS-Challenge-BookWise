import Image from 'next/image'

import { RatingStars } from '../RatingStars'

import { Book } from '@/@types/Book'

import {
  BookCardWithoutUserContainer,
  BookCardWithoutUserContent,
  BookCardWithoutUserHeader,
} from './styles'

interface BookCardWithoutUserProps {
  book: Book
}

export function BookCardWithoutUser({ book }: BookCardWithoutUserProps) {
  return (
    <BookCardWithoutUserContainer>
      <Image
        src={book.cover_url}
        height={160}
        width={110}
        alt="Nome do livro"
      />
      <BookCardWithoutUserContent>
        <BookCardWithoutUserHeader>
          <span>Há 2 dias</span>
          <RatingStars rating={4} />
        </BookCardWithoutUserHeader>
        <h4>{book.name}</h4>
        <span>{book.author}</span>
        <p>{book.summary}</p>
      </BookCardWithoutUserContent>
    </BookCardWithoutUserContainer>
  )
}
