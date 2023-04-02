import Image from 'next/image'

import { Avatar } from '../Avatar'
import { RatingStars } from '../RatingStars'

import bookImg from '../../assets/books-img/arquitetura-limpa.png'

import {
  BookCardWithUserContainer,
  BookCardWithUserContent,
  BookCardWithUserHeader,
} from './styles'

export function BookCardWithUser() {
  return (
    <BookCardWithUserContainer>
      <BookCardWithUserHeader>
        <Avatar src="https://github.com/rafarod21.png" size="md" />
        <div>
          Rafael
          <span>Hoje</span>
        </div>
        <RatingStars rating={4} />
      </BookCardWithUserHeader>
      <BookCardWithUserContent>
        <Image src={bookImg} height={150} width={110} alt="Nome do livro" />
        <div>
          <div>
            <h4>Arquitetura limpa</h4>
            <span>Robert C. Martin</span>
          </div>
          <p>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit
            porta eget nec vitae sit vulputate eget
          </p>
        </div>
      </BookCardWithUserContent>
    </BookCardWithUserContainer>
  )
}
