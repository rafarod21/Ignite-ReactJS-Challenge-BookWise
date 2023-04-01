import { ReactNode } from 'react'

import { Navbar } from '../Navbar'

import { LayoutContainer } from './styles'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <div>
        <Navbar />
      </div>
      <main>{children}</main>
    </LayoutContainer>
  )
}
