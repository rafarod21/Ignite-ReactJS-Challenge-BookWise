import React from 'react'
import { BookmarkSimple, BookOpen, Check, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { DialogLogin } from '../DialogLogin'
import { RatingStars } from '../RatingStars'
import { Avatar } from '../Avatar'

import { Book } from '@/@types/Book'

import {
  BookAbout,
  BookComment,
  BookDetail,
  BookInfo,
  CardComment,
  CardCommentHeader,
  CardNewComment,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles'

interface DialogBookProps {
  book: Book
}

export function DialogBook({ book }: DialogBookProps) {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogClose>
          <X size={24} weight="bold" aria-label="Fechar" />
        </DialogClose>

        <BookDetail>
          <div>
            <Image
              src={book.cover_url}
              height={242}
              width={172}
              alt="Nome do livro"
            />
            <BookInfo>
              <div>
                <h4>{book.name}</h4>
                <span>{book.author}</span>
              </div>
              <div>
                <RatingStars rating={4} size="md" />
                <span>3 avaliações</span>
              </div>
            </BookInfo>
          </div>
          <BookAbout>
            <div>
              <BookmarkSimple />
              <div>
                <span>Categoria</span>
                <strong>
                  {book.categories.map((category, index) => (
                    <React.Fragment key={category.id}>
                      {index === book.categories.length - 1
                        ? category.name
                        : `${category.name}, `}
                    </React.Fragment>
                  ))}
                </strong>
              </div>
            </div>
            <div>
              <BookOpen />
              <div>
                <span>Páginas</span>
                <strong>{book.total_pages}</strong>
              </div>
            </div>
          </BookAbout>
        </BookDetail>

        <BookComment>
          <div>
            Avaliações
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Avaliar</button>
              </Dialog.Trigger>

              <DialogLogin />
            </Dialog.Root>
          </div>
          <div>
            <CardNewComment>
              <header>
                <div>
                  <Avatar src="https://github.com/rafarod21.png" size="md" />
                  Rafael
                </div>
                <RatingStars rating={4} size="lg" />
              </header>
              <div>
                <textarea maxLength={450} placeholder="Escreva sua avaliação" />
                <span>{'0/450'}</span>
              </div>
              <footer>
                <button>
                  <X weight="bold" />
                </button>
                <button>
                  <Check weight="bold" />
                </button>
              </footer>
            </CardNewComment>
            <CardComment>
              <CardCommentHeader>
                <div>
                  <Avatar src="https://github.com/rafarod21.png" size="md" />
                </div>
                <div>
                  Rafael
                  <span>Há 2 dias</span>
                </div>
                <RatingStars rating={4} />
              </CardCommentHeader>
              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectus leo. Sit porta eget nec vitae sit vulputate eget
              </p>
            </CardComment>
            <CardComment>
              <CardCommentHeader>
                <div>
                  <Avatar src="https://github.com/rafarod21.png" size="md" />
                </div>
                <div>
                  Rafael
                  <span>Há 2 dias</span>
                </div>
                <RatingStars rating={4} />
              </CardCommentHeader>
              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectus leo. Sit porta eget nec vitae sit vulputate eget
              </p>
            </CardComment>
            <CardComment>
              <CardCommentHeader>
                <div>
                  <Avatar src="https://github.com/rafarod21.png" size="md" />
                </div>
                <div>
                  Rafael
                  <span>Há 2 dias</span>
                </div>
                <RatingStars rating={4} />
              </CardCommentHeader>
              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectus leo. Sit porta eget nec vitae sit vulputate eget
              </p>
            </CardComment>
            <CardComment>
              <CardCommentHeader>
                <div>
                  <Avatar src="https://github.com/rafarod21.png" size="md" />
                </div>
                <div>
                  Rafael
                  <span>Há 2 dias</span>
                </div>
                <RatingStars rating={4} />
              </CardCommentHeader>
              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectus leo. Sit porta eget nec vitae sit vulputate eget
              </p>
            </CardComment>
          </div>
        </BookComment>
      </DialogContent>
    </Dialog.Portal>
  )
}
