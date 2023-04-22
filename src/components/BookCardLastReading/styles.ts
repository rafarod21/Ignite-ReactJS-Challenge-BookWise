import { styled } from '@/styles/stitches.config'

export const BookCardLastReadingContainer = styled('div', {
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

  '> img': {
    width: '10rem',
    height: 'auto',
  },

  '@bpmd': {
    display: 'none',
  },
})

export const BookCardLastReadingContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  lineHeight: '$base',

  img: {
    display: 'none',
  },

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

  '@bpmd': {
    img: {
      display: 'inline',
      margin: '0 auto',
    },
  },
})

export const BookCardLastReadingHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  // justifyContent: 'space-between',

  marginBottom: '$3',

  '> span': {
    flex: 1,
    fontSize: '$sm',
    lineHeight: '$base',

    '&::first-letter': {
      textTransform: 'capitalize',
    },
  },

  '@bpmd': {
    marginBottom: 0,
  },
})

export const BookCardLastReadingContainer2 = styled('div', {
  display: 'none',

  '@bpmd': {
    display: 'flex',
  },

  flexDirection: 'column',
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

  '> div': {
    display: 'flex',
    gap: '$6',

    img: {
      // width: 'auto',
      // height: 'auto',
    },
  },

  p: {
    fontSize: '$sm',
    color: '$gray300',

    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})
