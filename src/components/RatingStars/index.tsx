import { Star } from '@phosphor-icons/react'
import { RatingStarsContainer } from './styles'

interface RatingStarsProps {
  rating: 0 | 1 | 2 | 3 | 4 | 5
  size?: 'sm' | 'md' | 'lg'
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
