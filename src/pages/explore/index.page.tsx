import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

import { Layout } from '@/components/Layout'

import {
  ExploreContainer,
  ExploreContent,
  ExploreHeader,
  SearchBookOrAuthor,
} from './styles'

export default function Explore() {
  return (
    <Layout>
      <ExploreContainer>
        <ExploreHeader>
          <h1>
            <Binoculars /> Explorar
          </h1>
          <SearchBookOrAuthor>
            <input type="text" placeholder="Buscar livro ou autor" />
            <MagnifyingGlass />
          </SearchBookOrAuthor>
        </ExploreHeader>
        <ExploreContent></ExploreContent>
      </ExploreContainer>
    </Layout>
  )
}
