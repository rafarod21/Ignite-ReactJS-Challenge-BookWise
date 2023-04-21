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

const BOOK: Book = {
  id: 'c8176d86-896a-4c21-9219-6bb28cccaa5f',
  name: '14 Hábitos de Desenvolvedores Altamente Produtivos',
  author: 'Zeno Rocha',
  summary:
    'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
  coverUrl:
    '/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png',
  totalPages: 160,
  rate: 4,
  categories: [
    {
      name: 'Educação',
      id: 'f1a50507-0aa7-4245-8a5c-0d0de14e9d6d',
    },
    {
      name: 'Programação',
      id: 'c9f22067-4978-4a24-84a1-7d37f343dfc2',
    },
  ],
}

// const USER: User = {
//   id: 'asdadfasfasdfasdfasudhfiasfiasfpisahfuhipsuafhpiuasfigpafg',
//   name: 'Rafael Rosman Rodrigues Montrezol',
//   avatarUrl: 'https://github.com/rafarod21.png',
//   createdAtAsString: new Date().toISOString(),
// }

// const RATING = {
//   rate: 4,
//   createdAt: new Date(),
// }

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

  return (
    <Layout>
      <Dialog.Root>
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
                    <button>
                      Ver todas <CaretRight weight="bold" />
                    </button>
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
                  {popularBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            </HomePopularBooks>
          </HomeContent>
        </HomeContainer>

        <DialogBook book={BOOK} />
      </Dialog.Root>
    </Layout>
  )
}
