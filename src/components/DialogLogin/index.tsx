import Image from 'next/image'
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
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogClose>
          <X size={24} weight="bold" aria-label="Fechar" />
        </DialogClose>
        <DialogTitle>Faça login para continuar</DialogTitle>

        <LoginWrapper>
          <LoginButton>
            <Image src={iconGoogle} height={32} width={32} alt="Google" />{' '}
            Entrar com Google
          </LoginButton>
          <LoginButton>
            <Image src={iconGitHub} height={32} width={32} alt="Google" />{' '}
            Entrar com GitHub
          </LoginButton>
        </LoginWrapper>
      </DialogContent>
    </Dialog.Portal>
  )
}
