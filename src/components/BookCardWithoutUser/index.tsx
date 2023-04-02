import Image from 'next/image'

import { RatingStars } from '../RatingStars'

import bookImg from '../../assets/books-img/arquitetura-limpa.png'

import {
  BookCardWithoutUserContainer,
  BookCardWithoutUserContent,
  BookCardWithoutUserHeader,
} from './styles'

export function BookCardWithoutUser() {
  return (
    <BookCardWithoutUserContainer>
      <Image src={bookImg} height={160} width={110} alt="Nome do livro" />
      <BookCardWithoutUserContent>
        <BookCardWithoutUserHeader>
          <span>Há 2 dias</span>
          <RatingStars rating={4} />
        </BookCardWithoutUserHeader>
        <h4>Arquitetura limpa</h4>
        <span>Robert C. Martin</span>
        <p>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
          eget nec vitae sit vulputate eget
        </p>
      </BookCardWithoutUserContent>
    </BookCardWithoutUserContainer>
  )
}
