import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  width: '100%',
})

export const HomeHeader = styled('header', {
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

export const HomeContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateAreas: "'last-read popular-books' 'recent-reviews popular-books'",
  columnGap: '4rem',
  paddingBottom: '$10',

  '@bplg': {
    gridTemplateColumns: '1fr',
    gridTemplateAreas: "'last-read' 'popular-books' 'recent-reviews'",
  },
})

export const HomeLastRead = styled('section', {
  gridArea: 'last-read',
  marginBottom: '$10',

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
})

export const HomeRecentReviews = styled('section', {
  gridArea: 'recent-reviews',

  '> span': {
    fontSize: '$sm',
  },

  '> div': {
    marginTop: '$4',
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

export const HomePopularBooks = styled('section', {
  gridArea: 'popular-books',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // marginLeft: '8rem',

  position: 'sticky',
  top: '$5',
  alignSelf: 'start',

  '> div': {
    '> div:first-child': {
      width: '100%',
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
      alignItems: 'center',
      gap: '$3',
    },
  },

  '@bplg': {
    position: 'relative',
    top: 0,
    marginBottom: '$10',

    '> div': {
      width: '100%',

      '> div:last-child': {
        width: '100%',
        flexDirection: 'unset',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },
  },
})
