import { styled } from '@/styles/stitches.config'

export const BookCardWithoutUserContainer = styled('div', {
  display: 'flex',
  padding: '$6',
  gap: '$6',

  // maxWidth: 608,
  // maxHeight: 280,

  position: 'relative',

  background: '$gray600',
  borderRadius: '$md',
  border: '2px solid $gray600',

  '&:hover': {
    border: '2px solid $gray500',
  },

  img: {
    width: '10rem',
    height: 'auto',
  },
})

export const BookCardWithoutUserContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  lineHeight: '$base',

  h4: {
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
  },

  p: {
    marginTop: '$6',
    fontSize: '$sm',
    color: '$gray300',

    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})

export const BookCardWithoutUserHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'space-between',

  marginBottom: '$3',

  '> span': {
    flex: 1,
    fontSize: '$sm',
    lineHeight: '$base',
  },
})
