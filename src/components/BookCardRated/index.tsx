import dayjs from 'dayjs'
import Image from 'next/image'

import { Avatar } from '../Avatar'
import { RatingStars } from '../RatingStars'

import { Book } from '@/@types/book'
import { User } from '@/@types/user'

import {
  BookCardRatedContainer,
  BookCardRatedContent,
  BookCardRatedHeader,
} from './styles'

interface BookCardRatedProps {
  book: Book
  user: User
  rating: {
    rate: number
    createdAtAsString: string
  }
}

export function BookCardRated({ book, user, rating }: BookCardRatedProps) {
  return (
    <BookCardRatedContainer>
      <BookCardRatedHeader>
        <Avatar src={user.avatarUrl} size="md" />
        <div>
          {user.name}
          <span>{dayjs(rating.createdAtAsString).fromNow()}</span>
        </div>
        <RatingStars rating={rating.rate} />
      </BookCardRatedHeader>
      <BookCardRatedContent>
        <Image src={book.coverUrl} height={150} width={110} alt={book.name} />
        <div>
          <div>
            <h4>{book.name}</h4>
            <span>{book.author}</span>
          </div>
          <p>{book.summary}</p>
        </div>
      </BookCardRatedContent>
      <p>{book.summary}</p>
    </BookCardRatedContainer>
  )
}
