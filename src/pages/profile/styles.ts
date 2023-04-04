import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  width: '100%',
})

export const ProfileHeader = styled('header', {
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
})

export const ProfileContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateAreas: "'last-read popular-books' 'recent-reviews popular-books'",
  columnGap: '4rem',
})

export const BooksList = styled('section', {})

export const SearchBook = styled('div', {
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

export const ProfileDetails = styled('section', {})
