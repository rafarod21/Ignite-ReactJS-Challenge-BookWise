import dayjs from 'dayjs'
import { useSession } from 'next-auth/react'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  MagnifyingGlass,
  User as UserIcon,
  UserList,
} from '@phosphor-icons/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import * as Dialog from '@radix-ui/react-dialog'

import { Layout } from '@/components/Layout'
import { Avatar } from '@/components/Avatar'
import { BookCard } from '@/components/BookCard'

import { prisma } from '@/lib/prisma'

import { User } from '@/@types/user'
import { Book } from '@/@types/book'

import {
  BooksList,
  ProfileContainer,
  ProfileContent,
  UserDetails,
  ProfileHeader,
  SearchBook,
  HowLongBlock,
} from './styles'

interface ProfileProps {
  user: User
  readBooks: {
    book: Book
    rating: {
      rate: number
      createdAtAsString: string
    }
  }[]
  pagesRead: number
  ratedBooks: number
  amountAuthorsRead: number
  mostReadCategory: string
}

export default function Profile({
  user,
  readBooks,
  pagesRead,
  ratedBooks,
  amountAuthorsRead,
  mostReadCategory,
}: ProfileProps) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  })

  if (status === 'loading') {
    return 'Loading or not authenticated...'
  }

  return (
    <Layout>
      <Dialog.Root>
        <ProfileContainer>
          <ProfileHeader>
            <h1>
              <UserIcon /> Perfil
            </h1>
          </ProfileHeader>
          <ProfileContent>
            <BooksList>
              <SearchBook>
                <input type="text" placeholder="Buscar livro avaliado" />
                <MagnifyingGlass />
              </SearchBook>
              {readBooks.map((readBook) => (
                <HowLongBlock key={readBook.book.id}>
                  <span>
                    {dayjs(readBook.rating.createdAtAsString).fromNow()}
                  </span>
                  <BookCard
                    book={readBook.book}
                    hasSummary
                    rating={readBook.rating.rate}
                  />
                </HowLongBlock>
              ))}
            </BooksList>
            <UserDetails>
              <header>
                <Avatar size="lg" src={user.avatarUrl} />
                <h2>{user.name}</h2>
                <span>{`membro desde ${user.createdAtAsString}`}</span>
              </header>
              <div />
              <div>
                <div>
                  <BookOpen />
                  <div>
                    <strong>{pagesRead}</strong>
                    <span>Páginas lidas</span>
                  </div>
                </div>

                <div>
                  <Books />
                  <div>
                    <strong>{ratedBooks}</strong>
                    <span>Livros avaliados</span>
                  </div>
                </div>

                <div>
                  <UserList />
                  <div>
                    <strong>{amountAuthorsRead}</strong>
                    <span>Autores lidos</span>
                  </div>
                </div>

                <div>
                  <BookmarkSimple />
                  <div>
                    <strong>{mostReadCategory}</strong>
                    <span>Categoria mais lida</span>
                  </div>
                </div>
              </div>
            </UserDetails>
          </ProfileContent>
        </ProfileContainer>
      </Dialog.Root>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const userId = String(params?.userid)

  const userResponse = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!userResponse) {
    return {
      notFound: true,
    }
  }

  const user = {
    id: userResponse.id,
    name: userResponse.name,
    avatarUrl: userResponse.avatar_url,
    createdAtAsString: userResponse.created_at.toISOString(),
  }

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    include: {
      user: true,
      book: {
        include: {
          categories: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  })

  const ratedBooks = ratings.length

  const readBooks = ratings.map((rating) => {
    return {
      book: {
        id: rating.book.id,
        name: rating.book.name,
        author: rating.book.author,
        summary: rating.book.summary,
        coverUrl: rating.book.cover_url,
        totalPages: rating.book.total_pages,
        rate: rating.book.rate,
        categories: rating.book.categories.map(
          (categoriesOnBook) => categoriesOnBook.category,
        ),
      },
      rating: {
        rate: rating.rate,
        createdAtAsString: rating.created_at.toISOString(),
      },
    }
  })

  const { pagesRead, authorsRead } = readBooks.reduce(
    (accumulator, book) => {
      return {
        pagesRead: (accumulator.pagesRead += book.book.totalPages),
        authorsRead: accumulator.authorsRead.includes(book.book.author)
          ? accumulator.authorsRead
          : [...accumulator.authorsRead, book.book.author],
      }
    },
    {
      pagesRead: 0,
      authorsRead: [] as string[],
    },
  )
  const amountAuthorsRead = authorsRead.length

  const { arrayCategoryNames, arrayAmountCategories } = readBooks.reduce(
    (accumulator, book) => {
      book.book.categories.forEach((category) => {
        const indexArray = accumulator.arrayCategoryNames.indexOf(category.name)

        if (indexArray !== -1) {
          accumulator.arrayAmountCategories[indexArray] += 1
        } else {
          accumulator.arrayCategoryNames = [
            ...accumulator.arrayCategoryNames,
            category.name,
          ]
          accumulator.arrayAmountCategories = [
            ...accumulator.arrayAmountCategories,
            1,
          ]
        }
      })

      return accumulator
    },
    {
      arrayCategoryNames: [] as string[],
      arrayAmountCategories: [] as number[],
    },
  )

  const maxValueInArrayAmountCategories = Math.max(...arrayAmountCategories)
  const mostReadCategory =
    arrayCategoryNames[
      arrayAmountCategories.indexOf(maxValueInArrayAmountCategories)
    ]

  return {
    props: {
      user,
      readBooks,
      pagesRead,
      ratedBooks,
      amountAuthorsRead,
      mostReadCategory,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
