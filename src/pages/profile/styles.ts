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
  gridTemplateColumns: '3fr 1fr',
  columnGap: '6rem',

  paddingBottom: '$10',

  '@bpmd': {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
})

export const BooksList = styled('section', {
  width: '100%',
})

export const SearchBook = styled('div', {
  width: '100%',
  border: '1px solid $gray500',
  borderRadius: '$sm',
  padding: '$3 $5',
  marginBottom: '$8',

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

export const HowLongBlock = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '> span': {
    fontSize: '$sm',
    color: '$gray300',
  },

  '& + &': {
    marginTop: '$6',
  },
})

export const UserDetails = styled('section', {
  borderLeft: '2px solid $gray700',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',

  maxHeight: 555,

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    h2: {
      fontSize: '$xl',
      marginTop: '$5',
    },

    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },

  '> div:nth-of-type(1)': {
    background: '$gradient-horizontal',
    height: 4,
    width: '8%',
    borderRadius: '$full',
    marginBottom: '$2',
  },

  '> div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',

    '> div': {
      display: 'flex',
      alignItems: 'center',
      gap: '$4',

      svg: {
        width: '2rem',
        height: '2rem',
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
        fontSize: '$md',
      },
    },
  },

  '@bpmd': {
    borderLeft: 0,
    marginBottom: '$8',

    '> div:last-child': {
      justifyContent: 'center',
      flexDirection: 'unset',
      flexWrap: 'wrap',
    },
  },
})
