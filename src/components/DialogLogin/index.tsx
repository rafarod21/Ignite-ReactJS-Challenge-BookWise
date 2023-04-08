import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import iconGoogle from '../../assets/icon-google.svg'
import iconGitHub from '../../assets/icon-github.svg'

import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  LoginButton,
  LoginWrapper,
} from './styles'

export function DialogLogin() {
  const session = useSession()
  const isLoggingIn = session.status === 'loading'

  async function handleConnectGoogle() {
    await signIn('google')
  }

  async function handleConnectGithub() {
    await signIn('github')
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogClose>
          <X size={24} weight="bold" aria-label="Fechar" />
        </DialogClose>
        <DialogTitle>Faça login para continuar</DialogTitle>

        <LoginWrapper>
          <LoginButton onClick={handleConnectGoogle} disabled={isLoggingIn}>
            <Image src={iconGoogle} height={32} width={32} alt="Google" />{' '}
            Entrar com Google
          </LoginButton>
          <LoginButton onClick={handleConnectGithub} disabled={isLoggingIn}>
            <Image src={iconGitHub} height={32} width={32} alt="Google" />{' '}
            Entrar com GitHub
          </LoginButton>
        </LoginWrapper>
      </DialogContent>
    </Dialog.Portal>
  )
}
