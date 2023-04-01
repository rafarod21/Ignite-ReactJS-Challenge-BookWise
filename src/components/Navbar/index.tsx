import Image from 'next/image'
import { ChartLineUp, Binoculars, User, SignOut } from '@phosphor-icons/react'

import {
  NavbarButton,
  NavbarContainer,
  NavbarWrapper,
  NavbarFooter,
} from './styles'

import logoImg from '../../assets/book-wise-logo.svg'
import avatarImg from '../../assets/books-img/arquitetura-limpa.png'

export function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <Image src={logoImg} height={32} width={128} alt="BookWise Logo" />

        <NavbarWrapper>
          <NavbarButton href="#" isSelected>
            <ChartLineUp /> Início
          </NavbarButton>
          <NavbarButton href="#">
            <Binoculars /> Explorar
          </NavbarButton>
          <NavbarButton href="#">
            <User /> Perfil
          </NavbarButton>
        </NavbarWrapper>
      </div>

      <NavbarFooter>
        <div>
          <Image src={avatarImg} height={32} width={32} alt="Rafael" />
        </div>
        <span>Rafael</span>
        <SignOut />
      </NavbarFooter>
    </NavbarContainer>
  )
}
