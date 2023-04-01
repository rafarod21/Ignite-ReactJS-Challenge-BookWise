import { styled } from '@/styles/stitches.config'

export const RatingStarsContainer = styled('div', {
  display: 'flex',
  gap: '$1',
  color: '$purple100',

  svg: {
    width: '1rem',
    height: '1rem',
  },
})
