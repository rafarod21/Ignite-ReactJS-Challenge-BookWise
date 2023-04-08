import { useSession } from 'next-auth/react'
import {
  BookmarkSimple,
  BookOpen,
  Books,
  MagnifyingGlass,
  User,
  UserList,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { Layout } from '@/components/Layout'
import { Avatar } from '@/components/Avatar'
import { BookCard } from '@/components/BookCard'

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

const BOOK: Book = {
  id: 'c8176d86-896a-4c21-9219-6bb28cccaa5f',
  name: '14 Hábitos de Desenvolvedores Altamente Produtivos',
  author: 'Zeno Rocha',
  summary:
    'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
  cover_url:
    '/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png',
  total_pages: 160,
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

export default function Profile() {
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
              <HowLongBlock>
                <span>Há 2 dias</span>
                <BookCard book={BOOK} hasSummary />
                <BookCard book={BOOK} hasSummary />
              </HowLongBlock>
              <HowLongBlock>
                <span>Há 4 meses</span>
                <BookCard book={BOOK} hasSummary />
                <BookCard book={BOOK} hasSummary />
              </HowLongBlock>
            </BooksList>
            <UserDetails>
              <header>
                <Avatar size="lg" src="https://github.com/rafarod21.png" />
                <h2>Rafael Rodrigues</h2>
                <span>membro desde 2019</span>
              </header>
              <div />
              <div>
                <div>
                  <BookOpen />
                  <div>
                    <strong>3853</strong>
                    <span>Páginas lidas</span>
                  </div>
                </div>

                <div>
                  <Books />
                  <div>
                    <strong>10</strong>
                    <span>Livros avaliados</span>
                  </div>
                </div>

                <div>
                  <UserList />
                  <div>
                    <strong>8</strong>
                    <span>Autores lidos</span>
                  </div>
                </div>

                <div>
                  <BookmarkSimple />
                  <div>
                    <strong>Computação</strong>
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
