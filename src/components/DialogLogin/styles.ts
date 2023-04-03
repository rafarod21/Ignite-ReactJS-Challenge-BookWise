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
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: '$gray800',
  width: '32.25rem',
  height: '21rem',
  maxWidth: '41.25rem',

  boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
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

export const DialogTitle = styled(Dialog.Title, {
  fontSize: '$md',
  lineHeight: '$short',
  color: '$gray200',
  textAlign: 'center',
})

export const LoginWrapper = styled('div', {
  marginTop: '$10',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
})

export const LoginButton = styled('button', {
  all: 'unset',

  width: '23.25rem',
  display: 'flex',
  alignItems: 'center',
  padding: '$5 $6',
  gap: '$5',

  background: '$gray600',
  border: '2px solid $gray600',
  borderRadius: '$md',

  color: '$gray200',
  fontSize: '$lg',

  cursor: 'pointer',

  transition: 'all 0.2s',

  '&:hover': {
    border: '2px solid $gray500',
  },
})
