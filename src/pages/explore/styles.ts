import { styled } from '@/styles/stitches.config'

export const ExploreContainer = styled('div', {
  width: '100%',
})

export const ExploreHeader = styled('header', {
  width: '100%',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '$10',

  h1: {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',

    fontSize: '$2xl',
    lineHeight: '140%',

    svg: {
      color: '$green100',
    },
  },

  '@bpmd': {
    flexDirection: 'column',
    gap: '$5',
  },
})

export const SearchBookOrAuthor = styled('div', {
  width: '27rem',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  padding: '$3 $5',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',

  transition: 'all 0.2s',

  input: {
    all: 'unset',
    width: '100%',
    color: '$gray200',

    '&::placeholder': {
      color: '$gray400',
    },
  },

  svg: {
    color: '$gray500',
    transition: 'color 0.2s',
  },

  '&:has(input:focus)': {
    border: '1px solid $green200',

    svg: {
      color: '$green200',
    },
  },

  '@bpmd': {
    width: '100%',
  },
})

export const BooksTags = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '3.25rem',

  flexWrap: 'wrap',

  '@bpmd': {
    justifyContent: 'center',
  },
})

export const Tag = styled('button', {
  border: '1px solid $purple100',
  borderRadius: '$full',
  padding: '$1 $4',

  transition: 'all 0.2s',

  '&:hover': {
    background: '$purple200',
    border: '1px solid $purple100',
    color: '$gray100',
  },

  variants: {
    selected: {
      true: {
        background: '$purple200',
        border: '1px solid $purple200',
        color: '$gray100',
      },
      false: {
        background: 'transparent',
        color: '$purple100',
      },
    },
  },

  defaultVariants: {
    selected: 'false',
  },
})

export const BooksList = styled('div', {
  width: '100%',
  display: 'grid',
  // gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  placeItems: 'center',

  gap: '$5',
})
