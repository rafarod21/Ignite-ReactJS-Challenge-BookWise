import { styled } from '@/styles/stitches.config'

export const BookCardContainer = styled('div', {
  width: '20.25rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '$4 $5',
  gap: '$6',

  background: '$gray700',
  borderRadius: '$md',
  border: '2px solid $gray700',

  '&:hover': {
    border: '2px solid $gray600',
  },

  '> div': {
    display: 'flex',
    gap: '$5',

    img: {
      width: '5rem',
      height: 'auto',
    },
  },

  variants: {
    hasSummary: {
      false: {
        maxWidth: 324,
      },
      true: {
        maxWidth: 624,
      },
    },
  },
})

export const BookCardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  lineHeight: '$base',

  h4: {
    lineHeight: '$short',

    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  span: {
    color: '$gray400',
  },
})
