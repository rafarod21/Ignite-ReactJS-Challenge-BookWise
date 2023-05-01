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

  const filteredBooksByTags =
    selectedTags.length > 0
      ? books.filter((book) => {
          const haveAllTags = selectedTags.reduce(
            (accumulator, currentValue) => {
              if (!accumulator) return false
              return book.categories.includes(currentValue)
            },
            true,
          )

          return haveAllTags
        })
      : []

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
          {selectedTags.length
            ? filteredBooksByTags.map((book) => (
                <Dialog.Root key={book.id}>
                  <BookCard book={book} />

                  <DialogBook book={book} />
                </Dialog.Root>
              ))
            : books.map((book) => (
                <Dialog.Root key={book.id}>
                  <BookCard key={book.id} book={book} />

                  <DialogBook book={book} />
                </Dialog.Root>
              ))}
        </BooksList>
      </ExploreContainer>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const booksResponse = await prisma.book.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  const books = booksResponse.map((book) => {
    return {
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      coverUrl: book.cover_url,
      totalPages: book.total_pages,
      rate: book.rate,
      categories: book.categories.map((category) => category.category.name),
    }
  })

  return {
    props: {
      books,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
