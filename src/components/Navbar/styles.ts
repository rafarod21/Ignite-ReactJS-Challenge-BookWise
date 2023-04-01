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
})

export const NavbarContent = styled('main', {
  marginTop: '4rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const NavbarButton = styled(Link, {
  all: 'unset',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  padding: '$2 0',
  gap: '$3',
  cursor: 'pointer',

  fontSize: '$md',

  transition: 'color 0.2s',

  '&:hover': {
    color: '$gray100',
  },

  svg: {
    fontSize: '$2xl',
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
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontSize: '$sm',

  div: {
    lineHeight: 0,
    borderRadius: '$full',
    overflow: 'hidden',
    background: '$gradient-vertical',
    padding: 1,
  },

  img: {
    objectFit: 'cover',
    borderRadius: '$full',
  },

  svg: {
    fontSize: '$xl',
    color: '#F75A68',
  },
})
