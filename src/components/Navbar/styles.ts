import Link from 'next/link'

import { styled } from '@/styles/stitches.config'

import backgroundImg from '../../assets/background-image-navbar.png'

export const NavbarContainer = styled('nav', {
  height: '100%',
  width: '14.5rem',
  borderRadius: '$lg',

  backgroundImage: `url(${backgroundImg.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$10 $1 $6',

  lineHeight: '160%',

  '@bplg': {
    width: '12.5rem',
  },
})

export const NavbarWrapper = styled('div', {
  marginTop: '4rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const NavbarButton = styled(Link, {
  all: 'unset',
  position: 'relative',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  padding: '$2 0',
  gap: '$3',

  fontSize: '$md',

  cursor: 'pointer',

  transition: 'color 0.2s',

  '&:hover': {
    color: '$gray100',
  },

  svg: {
    fontSize: '$2xl',
  },

  '@bplg': {
    marginLeft: '1.5rem',
  },

  variants: {
    isSelected: {
      true: {
        color: '$gray100',

        '&:before': {
          content: '',

          position: 'absolute',
          top: '50%',
          left: '-1rem',
          transform: 'translate(0, -50%)',

          height: '50%',
          width: 4,

          background: '$gradient-vertical',
          borderRadius: '$full',
        },
      },
      false: {
        color: '$gray400',
      },
    },
  },

  defaultVariants: {
    isSelected: false,
  },
})

export const NavbarFooter = styled('footer', {
  variants: {
    isLogged: {
      true: {
        button: {
          display: 'flex',
          alignItems: 'center',
          gap: '$3',

          fontSize: '$sm',

          '> svg': {
            fontSize: '$xl',
            color: '#F75A68',
          },
        },
      },
      false: {
        button: {
          display: 'flex',
          alignItems: 'center',
          gap: '$3',

          fontSize: '$md',

          '> svg': {
            fontSize: '$xl',
            color: '$green100',
          },
        },
      },
    },
  },

  defaultVariants: {
    isLogged: 'false',
  },
})
