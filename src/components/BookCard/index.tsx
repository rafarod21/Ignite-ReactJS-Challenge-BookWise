import { ReactNode } from 'react'
import Image from 'next/image'

import { RatingStars } from '../RatingStars'

import bookImg from '../../assets/books-img/arquitetura-limpa.png'

import { BookCardContainer, BookCardInfo } from './styles'

interface BookCardProps {
  children?: ReactNode
}

export function BookCard({ children }: BookCardProps) {
  return (
    <BookCardContainer hasSummary={!!children}>
      <div>
        <Image src={bookImg} height={94} width={64} alt="Nome do livro" />
        <BookCardInfo>
          <div>
            <h4>Arquitetura limpa</h4>
            <span>Robert C. Martin</span>
          </div>
          <RatingStars rating={4} />
        </BookCardInfo>
      </div>
      {!!children && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt
          distinctio totam, omnis sunt aut ducimus laboriosam dolores quisquam
          voluptates earum nobis laborum? Labore, unde maxime eius nulla non
          iusto.
        </p>
      )}
    </BookCardContainer>
  )
}
