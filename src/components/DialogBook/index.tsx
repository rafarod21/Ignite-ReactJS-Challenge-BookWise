import { BookmarkSimple, BookOpen, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { DialogLogin } from '../DialogLogin'
import { RatingStars } from '../RatingStars'
import { Avatar } from '../Avatar'

import bookImg from '../../assets/books-img/arquitetura-limpa.png'

import {
  BookAbout,
  BookComment,
  BookDetail,
  BookInfo,
  CardComment,
  CardCommentHeader,
  DialogClose,
  DialogContent,
  DialogOverlay,
} from './styles'

export function DialogBook() {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogClose>
          <X size={24} weight="bold" aria-label="Fechar" />
        </DialogClose>

        <BookDetail>
          <div>
            <Image src={bookImg} height={242} width={172} alt="Nome do livro" />
            <BookInfo>
              <div>
                <h4>Arquitetura limpa</h4>
                <span>Robert C. Martin</span>
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
                <strong>Computação, educação</strong>
              </div>
            </div>
            <div>
              <BookOpen />
              <div>
                <span>Páginas</span>
                <strong>160</strong>
              </div>
            </div>
          </BookAbout>
        </BookDetail>

        <BookComment>
          <div>
            Avaliações
            <button>Avaliar</button>
          </div>
          <div>
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

        {/* <Dialog.Root>
          <Dialog.Trigger>abrir modal login</Dialog.Trigger>

          <DialogLogin />
        </Dialog.Root> */}
      </DialogContent>
    </Dialog.Portal>
  )
}
