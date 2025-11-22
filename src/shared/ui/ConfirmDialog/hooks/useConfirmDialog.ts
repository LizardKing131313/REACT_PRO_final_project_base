import { useContext } from 'react'

import { ConfirmDialogContext } from '../model/context'
import type { ShowConfirmDialog } from '../model/types'

export function useConfirmDialog(): ShowConfirmDialog {
  const api = useContext(ConfirmDialogContext)
  if (!api) {
    throw new Error('useConfirmDialog must be used within ConfirmDialogProvider')
  }
  return api
}
