import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@/styles/stitches.config'

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'absolute',
  top: 0,
  right: 0,

  backgroundColor: '$gray800',
  height: '100%',
  width: '30rem',
  maxWidth: '30rem',

  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.5)',
})

export const DialogClose = styled(Dialog.Close, {
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',

  color: '$gray500',

  transition: 'all 0.2s',

  '&:hover': {
    color: '$gray400',
  },
})
