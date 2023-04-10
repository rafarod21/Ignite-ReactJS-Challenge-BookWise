import { useSession } from 'next-auth/react'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from '@phosphor-icons/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import * as Dialog from '@radix-ui/react-dialog'

import { Layout } from '@/components/Layout'
import { Avatar } from '@/components/Avatar'
import { BookCard } from '@/components/BookCard'

import { Book } from '@/@types/book'

import { prisma } from '@/lib/prisma'

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
  user: {
    userId: string
    name: string
    avatarUrl: string
    createdAt: Date
  }
  books: {
    book: Book
    rate: {
      ratedAt: Date
      rating: number
    }
  }[]
  pagesRead: number
  ratedBooks: number
  authorsRead: number
  mostReadCategory: string
}

export default function Profile({
  user,
  books,
  pagesRead,
  ratedBooks,
  authorsRead,
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
              <User /> Perfil
            </h1>
          </ProfileHeader>
          <ProfileContent>
            <BooksList>
              <SearchBook>
                <input type="text" placeholder="Buscar livro avaliado" />
                <MagnifyingGlass />
              </SearchBook>
              {books.map((book) => (
                <HowLongBlock key={book.book.id}>
                  <span>{`Há ${book.rate.ratedAt} dias/semanas/meses/anos`}</span>
                  <BookCard
                    book={book.book}
                    hasSummary
                    rating={book.rate.rating}
                  />
                </HowLongBlock>
              ))}
            </BooksList>
            <UserDetails>
              <header>
                <Avatar size="lg" src="https://github.com/rafarod21.png" />
                <h2>{user.name}</h2>
                <span>{`membro desde ${user.createdAt}`}</span>
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
                    <strong>{authorsRead}</strong>
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

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return {
      notFound: true,
    }
  }

  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    where: {
      user_id: user.id,
    },
    include: {
      book: {
        include: {
          categories: {
            select: {
              category: true,
            },
          },
        },
      },
    },
  })

  if (ratings.length === 0) {
    return {
      props: {
        user: {
          name: user.name,
          avatarUrl: user.avatar_url,
          createdAt: user.created_at,
        },
        books: [],
        pagesRead: 0,
        ratedBooks: 0,
        authorsRead: 0,
        mostReadCategory: 'Não possui',
      },
      revalidate: 60 * 60 * 24, // 1 day
    }
  }

  const books = ratings.map((rating) => {
    return {
      book: rating.book,
      rate: {
        ratedAt: rating.created_at,
        rating: rating.rate,
      },
    }
  })

  const pagesRead = books.reduce(
    (totalPages, currentBook) => totalPages + currentBook.book.total_pages,
    0,
  )

  const ratedBooks = books.length

  const { arrayAuthors, arrayCategoriesNames, arrayCategoriesAmount } =
    books.reduce(
      (accumulator, currentBook) => {
        if (!accumulator.arrayAuthors.includes(currentBook.book.author)) {
          accumulator.arrayAuthors.push(currentBook.book.author)
        }

        // Para cada categoria do livro atual verificar
        // Se esta categoria já está no arrayCategoriesNames
        //   Se encontrar, quer dizer que houve um livro anterior que possuía esta categoria,
        //   então deve-se incrementar o indice dessa categoria no arrayCategoriesAmount

        //   Se não encontrar, adicionar a nova categoria lida no arrayCategoriesNames e
        //   adiconar no arrayCategoriesAmount mais uma posição com o número 1

        currentBook.book.categories.forEach((currentBookCategory) => {
          const indexInArrayCategoriesNames = arrayCategoriesNames.findIndex(
            (element) => element === currentBookCategory.category.name,
          )

          // Não encontrou a categoria
          if (indexInArrayCategoriesNames === -1) {
            accumulator.arrayCategoriesNames.push(
              currentBookCategory.category.name,
            )
            accumulator.arrayCategoriesAmount.push(1)
          } else {
            accumulator.arrayCategoriesAmount[indexInArrayCategoriesNames] += 1
          }
        })

        return accumulator
      },
      {
        arrayAuthors: [] as string[],
        arrayCategoriesNames: [] as string[],
        arrayCategoriesAmount: [] as number[],
      },
    )

  const authorsRead = arrayAuthors.length

  const { indexMostReadCategory } = arrayCategoriesAmount.reduce(
    (accumulator, currentCategoryAmount, index) => {
      if (accumulator.highestValueCategory < currentCategoryAmount) {
        accumulator.highestValueCategory = currentCategoryAmount
        accumulator.indexMostReadCategory = index
      }

      return accumulator
    },
    {
      indexMostReadCategory: 0,
      highestValueCategory: 0,
    },
  )

  const mostReadCategory = arrayCategoriesNames[indexMostReadCategory]

  return {
    props: {
      user: {
        name: user.name,
        avatarUrl: user.avatar_url,
        createdAt: user.created_at,
      },
      books,
      pagesRead,
      ratedBooks,
      authorsRead,
      mostReadCategory,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
