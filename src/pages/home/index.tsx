import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { Layout } from '@/components/Layout'
import { BookCardWithoutUser } from '@/components/BookCardWithoutUser'
import { BookCardWithUser } from '@/components/BookCardWithUser'
import { BookCard } from '@/components/BookCard'

import {
  HomeContainer,
  HomeContent,
  HomeHeader,
  HomeLastRead,
  HomePopularBooks,
  HomeRecentReviews,
} from './styles'

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
              <BookCardWithoutUser />
            </HomeLastRead>
            <HomeRecentReviews>
              <span>Avalizações mais recentes</span>
              <div>
                <BookCardWithUser />
                <BookCardWithUser />
                <BookCardWithUser />
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
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                </div>
              </div>
            </HomePopularBooks>
          </HomeContent>
        </HomeContainer>
      </Dialog.Root>
    </Layout>
  )
}
