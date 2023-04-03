import { styled } from '@/styles/stitches.config'

export const BookCardWithUserContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$8',

  // maxWidth: 608,

  background: '$gray700',
  borderRadius: '$md',
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

  img: {
    width: '10rem',
    height: 'auto',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    h4: {
      lineHeight: '$short',
    },

    span: {
      color: '$gray400',
    },

    p: {
      marginTop: '$5',
      fontSize: '$sm',
      color: '$gray300',

      display: '-webkit-box',
      '-webkit-line-clamp': 4,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
})
