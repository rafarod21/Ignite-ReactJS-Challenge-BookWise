import Image from 'next/image'
import { ChartLineUp, Binoculars, User, SignOut } from '@phosphor-icons/react'

import { Avatar } from '../Avatar'

import logoImg from '../../assets/book-wise-logo.svg'

import {
  NavbarButton,
  NavbarContainer,
  NavbarWrapper,
  NavbarFooter,
} from './styles'

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
        <Avatar size="sm" src="https://github.com/rafarod21.png" />
        <span>Rafael</span>
        <SignOut />
      </NavbarFooter>
    </NavbarContainer>
  )
}
