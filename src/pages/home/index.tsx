import { ChartLineUp, MagnifyingGlass } from '@phosphor-icons/react'

import {
  HomeContainer,
  HomeContent,
  HomeHeader,
  SearchBookOrAuthor,
} from './styles'
import Layout from '@/components/Layout'

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
        <HomeContent></HomeContent>
      </HomeContainer>
    </Layout>
  )
}
