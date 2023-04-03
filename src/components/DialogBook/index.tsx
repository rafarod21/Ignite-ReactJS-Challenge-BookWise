import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import { DialogClose, DialogContent, DialogOverlay } from './styles'

export function DialogBook() {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogClose>
          <X size={24} weight="bold" aria-label="Fechar" />
        </DialogClose>

        {/* Colocar aqui o content de fato */}
      </DialogContent>
    </Dialog.Portal>
  )
}
