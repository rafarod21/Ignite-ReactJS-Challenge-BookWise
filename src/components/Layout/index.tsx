import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

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
      <main>
        <Dialog.Root>{children}</Dialog.Root>
      </main>
    </LayoutContainer>
  )
}
