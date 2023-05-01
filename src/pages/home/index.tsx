import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { Layout } from '@/components/Layout'
import { BookCardLastReading } from '@/components/BookCardLastReading'
import { BookCardRated } from '@/components/BookCardRated'
import { BookCard } from '@/components/BookCard'
import { DialogBook } from '@/components/DialogBook'

import { Book } from '@/@types/book'
import { User } from '@/@types/user'

import {
  HomeContainer,
  HomeContent,
  HomeHeader,
  HomeLastRead,
  HomePopularBooks,
  HomeRecentReviews,
} from './styles'

interface HomeProps {
  recentsReviews: {
    user: User
    rating: {
      rate: number
      createdAtAsString: string
    }
    book: Book
  }[]
  lastReading: {
    book: Book
    rating: {
      rate: number
      createdAtAsString: string
    }
  } | null
  popularBooks: Book[]
}

export default function Home({
  lastReading,
  recentsReviews,
  popularBooks,
}: HomeProps) {
  const { data: session } = useSession()

  const [chosenBook, setChosenBook] = useState<Book | null>(null)

  function handleModalOpening(book: Book) {
    setChosenBook(book)
  }

  return (
    <Layout>
      <HomeContainer>
        <HomeHeader>
          <h1>
            <ChartLineUp /> Início
          </h1>
        </HomeHeader>
        <HomeContent>
          {session && (
            <HomeLastRead>
              <div>
                Sua última leitura
                {lastReading && (
                  <Link href={`/profile/${session.user.id}`}>
                    Ver todas <CaretRight weight="bold" />
                  </Link>
                )}
              </div>
              {lastReading ? (
                <BookCardLastReading
                  book={lastReading.book}
                  rating={lastReading.rating}
                />
              ) : (
                'Você ainda não leu nenhum livro...'
              )}
            </HomeLastRead>
          )}
          <HomeRecentReviews>
            <span>Avalizações mais recentes</span>
            <div>
              {recentsReviews.map((review, index) => (
                <BookCardRated
                  key={`${review.rating.createdAtAsString}-${index}`}
                  book={review.book}
                  user={review.user}
                  rating={review.rating}
                />
              ))}
            </div>
          </HomeRecentReviews>
          <HomePopularBooks>
            <div>
              <div>
                Livros populares
                <Link href="/explore">
                  Ver todos <CaretRight weight="bold" />
                </Link>
              </div>
              <div>
                <Dialog.Root>
                  {popularBooks.map((book, index) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      onClick={() => handleModalOpening(book)}
                    />
                  ))}
                  <DialogBook book={chosenBook} />
                </Dialog.Root>
              </div>
            </div>
          </HomePopularBooks>
        </HomeContent>
      </HomeContainer>
    </Layout>
  )
}
