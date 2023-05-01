import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@/styles/stitches.config'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'absolute',
  top: 0,
  right: 0,

  backgroundColor: '$gray800',
  height: '100%',
  width: '41.25rem',
  maxWidth: '41.25rem',

  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.5)',

  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 3rem',
  gap: '$10',

  overflowY: 'scroll',
})

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.5rem',
  right: '3rem',

  color: '$gray500',

  transition: 'all 0.2s',

  '&:hover': {
    color: '$gray400',
  },
})

export const BookDetail = styled('section', {
  background: '$gray700',
  borderRadius: '$lg',
  padding: '$6 $8',

  '> div:first-child': {
    display: 'flex',
    gap: '$8',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '> div:first-child': {
    h4: {
      fontSize: '$lg',
      lineHeight: '$short',
      marginBottom: '$2',

      // display: '-webkit-box',
      // '-webkit-line-clamp': 2,
      // '-webkit-box-orient': 'vertical',
      // overflow: 'hidden',
      // textOverflow: 'ellipsis',
    },

    span: {
      color: '$gray400',
    },
  },

  '> div:last-child': {
    span: {
      fontSize: '$sm',
      color: '$gray400',

      display: 'flex',
      marginTop: '$1',
      marginBottom: '-0.5rem',
    },
  },
})

export const BookAbout = styled('div', {
  marginTop: '$10',
  borderTop: '1px solid $gray600',
  paddingTop: '$6',

  display: 'flex',
  gap: '3.5rem',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',

    svg: {
      width: '1.5rem',
      height: '1.5rem',
      color: '$green100',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
    },

    span: {
      fontSize: '$sm',
      color: '$gray300',
    },

    strong: {
      lineHeight: '$short',
    },
  },
})

export const BookComment = styled('section', {
  '> div:first-child': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '$4',

    fontSize: '$sm',
    lineHeight: '$base',

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '$1 $2',
      gap: '$2',

      color: '$purple100',
      fontWeight: '$bold',
      background: 'transparent',

      '&:hover': {
        background: 'rgba(131, 129, 217, 0.06)',
        borderRadius: '$sm',
      },
    },
  },

  '> div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

export const CardNewComment = styled('form', {
  padding: '$6',
  background: '$gray700',
  borderRadius: '$md',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '> div:first-child': {
      display: 'flex',
      alignItems: 'center',
      gap: '$4',
    },
  },

  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '$2',
    marginTop: '$3',

    button: {
      padding: '$2',
      background: '$gray600',
      borderRadius: '$sm',

      fontWeight: '$bold',
      lineHeight: 0,

      '&:first-child': {
        color: '$purple100',
      },

      '&:last-child': {
        color: '$green100',
      },

      transition: 'background 0.2s',

      '&:hover': {
        background: '$gray500',
      },
    },
  },
})

export const FormTextArea = styled('div', {
  width: '100%',
  height: '10.25rem',
  margin: '$6 0 0',

  background: '$gray800',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  padding: '$3 $5 $6 $5',

  position: 'relative',

  textarea: {
    all: 'unset',

    width: '100%',
    height: '100%',
    resize: 'none',

    fontSize: '$sm',
    color: '$gray200',

    '&::placeholder': {
      color: '$gray400',
    },

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  span: {
    position: 'absolute',
    right: '$1',
    bottom: 0,

    color: '$gray400',
    fontSize: '$xs',
  },
})

export const FormError = styled('span', {
  fontSize: '$xs',
  color: '#F75A68',
})

export const NewRatingStars = styled('div', {
  display: 'flex',
  color: '$purple100',

  'button:not(:last-child)': {
    paddingRight: '$1',
  },

  svg: {
    width: '1.75rem',
    height: '1.75rem',
  },
})

export const CardComment = styled('div', {
  padding: '$6',
  background: '$gray700',
  borderRadius: '$md',

  p: {
    marginTop: '$5',
    fontSize: '$sm',
    color: '$gray300',
  },
})

export const CardCommentHeader = styled('header', {
  display: 'flex',
  // alignItems: 'center',
  gap: '$4',

  '> div:nth-of-type(1)': {
    display: 'flex',
    alignItems: 'center',
  },

  '> div:nth-of-type(2)': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '$md',
    lineHeight: '$base',

    span: {
      fontSize: '$sm',
      color: '$gray400',

      marginTop: '-$1',
    },
  },
})
