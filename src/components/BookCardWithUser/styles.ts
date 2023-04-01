import { styled } from '@/styles/stitches.config'

export const BookCardWithUserContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$8',

  // minWidth: 608,
  // maxHeight: 280,

  background: '$gray700',
  borderRadius: '$md',

  position: 'relative',
})

export const BookCardWithUserHeader = styled('header', {
  display: 'flex',
  // alignItems: 'center',
  gap: '$4',

  '> div:nth-of-type(1)': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '$md',
    lineHeight: '$base',

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

export const BookCardWithUserContent = styled('div', {
  display: 'flex',
  gap: '$5',

  lineHeight: '$base',

  h4: {
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
  },

  p: {
    marginTop: '$5',
  },
})
