import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth/next'

import { prisma } from '@/lib/prisma'
import { buildNextAuthOptions } from './api/auth/[...nextauth].api'

export { default } from './home'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  let lastReading = null

  if (session) {
    const rating = await prisma.rating.findMany({
      where: {
        user_id: session.user.id,
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 1,
    })

    if (rating.length > 0) {
      const lastReadBook = await prisma.book.findUnique({
        where: {
          id: rating[0].book_id,
        },
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

      if (lastReadBook) {
        lastReading = {
          book: {
            id: lastReadBook.id,
            name: lastReadBook.name,
            author: lastReadBook.author,
            summary: lastReadBook.summary,
            coverUrl: lastReadBook.cover_url,
            totalPages: lastReadBook.total_pages,
            rate: lastReadBook.rate,
            categories: lastReadBook.categories,
          },
          rating: {
            rate: rating[0].rate,
            createdAtAsString: rating[0].created_at.toISOString(),
          },
        }
      }
    }
  }

  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: {
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
      },
      user: true,
    },
  })

  const recentsReviews = ratings.map((rating) => {
    return {
      book: {
        id: rating.book.id,
        name: rating.book.name,
        author: rating.book.author,
        summary: rating.book.summary,
        coverUrl: rating.book.cover_url,
        totalPages: rating.book.total_pages,
        rate: rating.book.rate,
        categories: rating.book.categories,
      },
      user: {
        id: rating.user.id,
        name: rating.user.name,
        avatarUrl: rating.user.avatar_url,
        createdAtAsString: rating.user.created_at.toISOString(),
      },
      rating: {
        rate: rating.rate,
        createdAtAsString: rating.created_at.toISOString(),
      },
    }
  })

  const books = await prisma.book.findMany({
    orderBy: {
      rate: 'desc',
    },
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

  const popularBooks = books.slice(0, 5).map((book) => {
    return {
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      coverUrl: book.cover_url,
      totalPages: book.total_pages,
      rate: book.rate,
      categories: book.categories,
    }
  })

  return {
    props: {
      lastReading,
      recentsReviews,
      popularBooks,
    },
  }
}

/* 
getServerSideProps
Executa cada vez que a página é acessada. Bom para quando a página muda constantemente.

getStaticProps
Para páginas SEM pametros dinâmicos, é executado na build e gera os dados. 
Para páginas COM pametros dinâmicos, é executado na build, juntamente com getStaticPaths e gera os dados.
User "revalidate".

getStaticPaths
Define os parametros das páginas dinâmicas.
Os parametros são defenidos em "paths".
Em "fallback" é defino o comportamento:
  false:
    Se a rota com o parametro informado não estiver em "paths", retorna 404.
  true:
    Se a rota com o parametro informado não estiver em "paths", executa getStaticProps para o parametro informado
    e salva em "paths" DURANTE o carregamento da página.
    Ou seja, é importante ter um estado de loading e usar o "isFallback" do useRouter().
  blocking:
    Se a rota com o parametro informado não estiver em "paths", executa getStaticProps para o parametro informado
    e salva em "paths" ANTES do carregamento da página.
*/
