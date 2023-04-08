import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import {
  ChartLineUp,
  Binoculars,
  User,
  SignOut,
  SignIn,
} from '@phosphor-icons/react'

import { Avatar } from '../Avatar'
import { DialogLogin } from '../DialogLogin'

import logoImg from '../../assets/book-wise-logo.svg'

import {
  NavbarButton,
  NavbarContainer,
  NavbarWrapper,
  NavbarFooter,
} from './styles'

export function Navbar() {
  const router = useRouter()
  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <NavbarContainer>
      <div>
        <Image src={logoImg} height={32} width={128} alt="BookWise Logo" />

        <NavbarWrapper>
          <NavbarButton href="/" isSelected={router.asPath === '/'}>
            <ChartLineUp /> Início
          </NavbarButton>
          <NavbarButton
            href="/explore"
            isSelected={router.asPath.startsWith('/explore')}
          >
            <Binoculars /> Explorar
          </NavbarButton>
          {session && (
            <NavbarButton
              href="/profile"
              isSelected={router.asPath.startsWith('/profile')}
            >
              <User /> Perfil
            </NavbarButton>
          )}
        </NavbarWrapper>
      </div>

      <NavbarFooter isLogged={!!session}>
        {session ? (
          <button onClick={handleSignOut}>
            <Avatar size="sm" src={session.user.avatar_url} />
            <span>{session.user.name.split(' ')[0]}</span>
            <SignOut />
          </button>
        ) : (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <strong>Fazer login</strong>
                <SignIn />
              </button>
            </Dialog.Trigger>

            <DialogLogin />
          </Dialog.Root>
        )}
      </NavbarFooter>
    </NavbarContainer>
  )
}
