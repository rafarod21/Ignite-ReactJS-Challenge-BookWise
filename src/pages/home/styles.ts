import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  height: '100vh',
  width: '100vw',

  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  padding: '$5',

  '@media (max-width: 1200px)': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@media (max-width: 1000px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const ImageCover = styled('div', {
  height: '100%',
  borderRadius: '$md',
  overflow: 'hidden',
  position: 'relative',

  '@media (max-width: 1000px)': {
    height: 100,
  },

  'img:first-child': {
    width: '100%',
    objectFit: 'cover',

    '@media (max-width: 1000px)': {
      display: 'none',
    },
  },

  'img:last-child': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

export const LoginContainer = styled('div', {
  margin: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  span: {
    fontSize: '$md',
    lineHeight: '160%',
    color: '$gray200',
  },
})

export const LoginWrapper = styled('div', {
  marginTop: '$10',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
})

export const LoginButton = styled('button', {
  all: 'unset',

  width: '23.25rem',
  display: 'flex',
  alignItems: 'center',
  padding: '$5 $6',
  gap: '$5',

  background: '$gray600',
  border: '2px solid $gray600',
  borderRadius: '$md',

  color: '$gray200',
  fontSize: '$lg',

  cursor: 'pointer',

  transition: 'all 0.2s',

  '&:hover': {
    border: '2px solid $gray500',
  },
})
