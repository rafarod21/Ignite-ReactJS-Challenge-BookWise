import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  height: '100vh',
  width: '100vw',
  padding: '$5',

  display: 'flex',

  '@media (max-width: 1000px)': {},
})

export const HomeContent = styled('main', {
  flex: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
