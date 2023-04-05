import { useRouter } from 'next/router'
import Image from 'next/image'
import {
  ChartLineUp,
  Binoculars,
  User,
  SignOut,
  SignIn,
} from '@phosphor-icons/react'

import { Avatar } from '../Avatar'

import logoImg from '../../assets/book-wise-logo.svg'

import {
  NavbarButton,
  NavbarContainer,
  NavbarWrapper,
  NavbarFooter,
} from './styles'
import { useState } from 'react'

export function Navbar() {
  const [isLogged, setIsLogged] = useState(false)
  const router = useRouter()

  function handleSignIn() {
    setIsLogged(true)
  }

  function handleSignOut() {
    setIsLogged(false)
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
          {isLogged && (
            <NavbarButton
              href="/profile"
              isSelected={router.asPath.startsWith('/profile')}
            >
              <User /> Perfil
            </NavbarButton>
          )}
        </NavbarWrapper>
      </div>

      <NavbarFooter isLogged={isLogged}>
        {isLogged ? (
          <button onClick={handleSignOut}>
            <Avatar size="sm" src="https://github.com/rafarod21.png" />
            <span>Rafael</span>
            <SignOut />
          </button>
        ) : (
          <button onClick={handleSignIn}>
            <strong>Fazer login</strong>
            <SignIn />
          </button>
        )}
      </NavbarFooter>
    </NavbarContainer>
  )
}
