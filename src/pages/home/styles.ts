import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  width: '100%',
})

export const HomeHeader = styled('header', {
  width: '100%',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

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
})

export const HomeContent = styled('div', {})
