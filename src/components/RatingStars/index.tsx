import { Star } from '@phosphor-icons/react'
import { RatingStarsContainer } from './styles'

interface RatingStarsProps {
  rating: number
  size?: 'sm' | 'md'
}

export function RatingStars({ rating, size = 'sm' }: RatingStarsProps) {
  return (
    <RatingStarsContainer size={size}>
      <Star weight={rating >= 1 ? 'fill' : 'regular'} />
      <Star weight={rating >= 2 ? 'fill' : 'regular'} />
      <Star weight={rating >= 3 ? 'fill' : 'regular'} />
      <Star weight={rating >= 4 ? 'fill' : 'regular'} />
      <Star weight={rating >= 5 ? 'fill' : 'regular'} />
    </RatingStarsContainer>
  )
}
