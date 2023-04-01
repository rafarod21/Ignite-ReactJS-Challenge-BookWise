import { ChartLineUp, MagnifyingGlass } from '@phosphor-icons/react'

import { Layout } from '@/components/Layout'
import { BookCardWithUser } from '@/components/BookCardWithUser'

import {
  HomeContainer,
  HomeContent,
  HomeHeader,
  HomeLastRead,
  HomePopularBooks,
  HomeRecentReviews,
  SearchBookOrAuthor,
} from './styles'

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <HomeHeader>
          <h1>
            <ChartLineUp /> Início
          </h1>
          <SearchBookOrAuthor>
            <input type="text" placeholder="Buscar livro ou autor" />
            <MagnifyingGlass />
          </SearchBookOrAuthor>
        </HomeHeader>
        <HomeContent>
          <HomeLastRead>
            HomeLastRead HomeLastRead HomeLastRead HomeLastRead
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
            HomePopularBooks HomePopularBooks HomePopularBooks HomePopularBooks
          </HomePopularBooks>
        </HomeContent>
      </HomeContainer>
    </Layout>
  )
}
