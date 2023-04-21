import { useState } from 'react'
import { GetStaticProps } from 'next'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { prisma } from '@/lib/prisma'

import { Layout } from '@/components/Layout'
import { DialogBook } from '@/components/DialogBook'
import { BookCard } from '@/components/BookCard'

import { Book } from '@/@types/book'
import { Tag } from '@/@types/Category'
import { tags } from '@/@types/tag'

import {
  ExploreContainer,
  BooksList,
  ExploreHeader,
  SearchBookOrAuthor,
  BooksTags,
  Tag as TagComponent,
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

interface ExploreProps {
  books: Book[]
}

export default function Explore({ books }: ExploreProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  function handleToogleSelectedTag(tag: Tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevState) => {
        return prevState.filter((item) => item !== tag)
      })
    } else {
      setSelectedTags((prevState) => {
        return [...prevState, tag]
      })
    }
  }

  return (
    <Layout>
      <Dialog.Root>
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
            <TagComponent
              onClick={() => setSelectedTags([])}
              selected={selectedTags.length === 0}
            >
              Tudo
            </TagComponent>
            {tags.map((tag) => (
              <TagComponent
                key={tag}
                onClick={() => handleToogleSelectedTag(tag)}
                selected={selectedTags.includes(tag)}
              >
                {tag}
              </TagComponent>
            ))}
          </BooksTags>
          <BooksList>
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </BooksList>
        </ExploreContainer>

        <DialogBook book={BOOK} />
      </Dialog.Root>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      summary: true,
      cover_url: true,
      total_pages: true,
      rate: true,
      categories: true,
    },
  })

  return {
    props: {
      books,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
