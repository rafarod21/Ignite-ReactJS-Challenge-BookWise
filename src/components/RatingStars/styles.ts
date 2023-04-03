import { styled } from '@/styles/stitches.config'

export const RatingStarsContainer = styled('div', {
  display: 'flex',
  gap: '$1',
  color: '$purple100',

  variants: {
    size: {
      sm: {
        svg: {
          width: '1rem',
          height: '1rem',
        },
      },
      md: {
        svg: {
          width: '1.25rem',
          height: '1.25rem',
        },
      },
      lg: {
        svg: {
          width: '1.75rem',
          height: '1.75rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})
