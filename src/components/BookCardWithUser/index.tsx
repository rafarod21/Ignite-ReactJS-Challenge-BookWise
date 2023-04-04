import Image from 'next/image'

import { Avatar } from '../Avatar'
import { RatingStars } from '../RatingStars'

import { Book } from '@/@types/Book'

import {
  BookCardWithUserContainer,
  BookCardWithUserContent,
  BookCardWithUserHeader,
} from './styles'

interface BookCardWithUserProps {
  book: Book
}

export function BookCardWithUser({ book }: BookCardWithUserProps) {
  return (
    <BookCardWithUserContainer>
      <BookCardWithUserHeader>
        <Avatar src="https://github.com/rafarod21.png" size="md" />
        <div>
          Rafael
          <span>Hoje</span>
        </div>
        <RatingStars rating={4} />
      </BookCardWithUserHeader>
      <BookCardWithUserContent>
        <Image
          src={book.cover_url}
          height={150}
          width={110}
          alt="Nome do livro"
        />
        <div>
          <div>
            <h4>{book.name}</h4>
            <span>{book.author}</span>
          </div>
          <p>{book.summary}</p>
        </div>
      </BookCardWithUserContent>
    </BookCardWithUserContainer>
  )
}
