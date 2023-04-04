import { MagnifyingGlass, User } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { Layout } from '@/components/Layout'
import { BookCard } from '@/components/BookCard'

import { Book } from '@/@types/Book'

import {
  BooksList,
  ProfileContainer,
  ProfileContent,
  ProfileDetails,
  ProfileHeader,
  SearchBook,
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
  return (
    <Layout>
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
            <div>
              <Dialog.Root>
                <BookCard book={BOOK} hasSummary />
              </Dialog.Root>
            </div>
          </BooksList>
          <ProfileDetails></ProfileDetails>
        </ProfileContent>
      </ProfileContainer>
    </Layout>
  )
}
