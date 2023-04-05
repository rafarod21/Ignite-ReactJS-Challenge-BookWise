import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { Layout } from '@/components/Layout'
import { BookCardLastReading } from '@/components/BookCardLastReading'
import { BookCardWithUser } from '@/components/BookCardWithUser'
import { BookCard } from '@/components/BookCard'
import { DialogBook } from '@/components/DialogBook'

import { Book } from '@/@types/Book'

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
  cover_url:
    '/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png',
  total_pages: 160,
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

export default function Home() {
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
            <HomeLastRead>
              <div>
                Sua última leitura
                <button>
                  Ver todas <CaretRight weight="bold" />
                </button>
              </div>
              <BookCardLastReading book={BOOK} />
            </HomeLastRead>
            <HomeRecentReviews>
              <span>Avalizações mais recentes</span>
              <div>
                <BookCardWithUser book={BOOK} />
                <BookCardWithUser book={BOOK} />
                <BookCardWithUser book={BOOK} />
              </div>
            </HomeRecentReviews>
            <HomePopularBooks>
              <div>
                <div>
                  Livros populares
                  <button>
                    Ver todos <CaretRight weight="bold" />
                  </button>
                </div>
                <div>
                  <BookCard book={BOOK} />
                  <BookCard book={BOOK} />
                  <BookCard book={BOOK} />
                  <BookCard book={BOOK} />
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
