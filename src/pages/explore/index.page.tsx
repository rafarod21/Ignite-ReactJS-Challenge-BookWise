import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'

import { Layout } from '@/components/Layout'
import { DialogBook } from '@/components/DialogBook'
import { BookCard } from '@/components/BookCard'

import {
  ExploreContainer,
  BooksList,
  ExploreHeader,
  SearchBookOrAuthor,
  BooksTags,
  Tag,
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
        <BooksTags>
          <Tag selected>Tudo</Tag>
          <Tag>Computação</Tag>
          <Tag>Educação</Tag>
          <Tag>Fantasia</Tag>
          <Tag>Ficção científica</Tag>
          <Tag>Horror</Tag>
          <Tag>HQs</Tag>
          <Tag>Suspense</Tag>
        </BooksTags>
        <BooksList>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </BooksList>
      </ExploreContainer>

      <DialogBook />
    </Layout>
  )
}
