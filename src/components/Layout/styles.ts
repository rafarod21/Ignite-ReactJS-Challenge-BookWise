import { styled } from '@/styles/stitches.config'

export const LayoutContainer = styled('div', {
  height: '100vh',
  width: '100vw',

  display: 'flex',
  overflowX: 'hidden',

  '> div': {
    height: '100%',
    padding: '$5',
    paddingRight: 0,

    position: 'sticky',
    top: 0,
  },

  '> main': {
    width: '100%',

    padding: '4.5rem 6rem 0',
  },

  '@media (max-width: 1000px)': {},
})