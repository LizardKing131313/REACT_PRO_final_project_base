import { createContext } from 'react'

import type { ShowConfirmDialog } from './types'

export const ConfirmDialogContext =
  createContext<ShowConfirmDialog | null>(null)
