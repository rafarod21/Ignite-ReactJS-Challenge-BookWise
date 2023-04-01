import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '@/styles/stitches.config'

// export const AvatarContainer = styled('div', {
//   lineHeight: 0,
//   borderRadius: '$full',
//   overflow: 'hidden',
//   background: '$gradient-vertical',
//   padding: 1,

//   img: {
//     objectFit: 'cover',
//     borderRadius: '$full',
//   },
// })

export const AvatarContainer = styled(Avatar.Root, {
  lineHeight: 0,
  borderRadius: '$full',
  overflow: 'hidden',
  background: '$gradient-vertical',
  padding: 1,

  variants: {
    size: {
      sm: {
        width: '2rem',
        height: '2rem',
      },
      md: {
        width: '2.5rem',
        height: '2.5rem',
      },
      lg: {
        width: '4.5rem',
        height: '4.5rem',
      },
    },
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '$full',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray700',
  borderRadius: '$full',

  svg: {
    width: '80%',
    height: '80%',
  },
})
