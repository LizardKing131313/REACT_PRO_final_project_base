import React, { useCallback, useMemo, useState } from 'react'

import { ConfirmDialogContext } from '../model/context'
import type { ConfirmDialogOptions, DialogState, ShowConfirmDialog } from '../model/types'
import { ConfirmDialog } from './ConfirmDialog'

export function ConfirmDialogProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DialogState>({
    isOpen: false,
    options: null,
    resolve: null,
  })

  const showConfirmDialog = useCallback<ShowConfirmDialog>(
    (options?: ConfirmDialogOptions) =>
      new Promise<boolean>((resolve) => {
        setState({
          isOpen: true,
          options: options ?? {},
          resolve,
        })
      }),
    [],
  )

  const handleResolve = useCallback((result: boolean) => {
    setState((previous) => {
      previous.resolve?.(result)
      return { isOpen: false, options: null, resolve: null }
    })
  }, [])

  const handleConfirm = useCallback(() => {
    handleResolve(true)
  }, [handleResolve])

  const handleCancel = useCallback(() => {
    handleResolve(false)
  }, [handleResolve])

  const contextValue =
    useMemo<ShowConfirmDialog>(() => showConfirmDialog, [showConfirmDialog])

  const safeTitle = state.options?.title ?? 'Подтвердить действие?'
  const safeDescription = state.options?.description ?? 'Это действие необратимо.'
  const safeConfirm = state.options?.confirmText ?? 'Подтвердить'
  const safeCancel = state.options?.cancelText ?? 'Отмена'

  return (
    <ConfirmDialogContext.Provider value={contextValue}>
      {children}
      {state.isOpen && (
        <ConfirmDialog title={safeTitle}
                       description={safeDescription}
                       confirmText={safeConfirm}
                       cancelText={safeCancel}
                       onConfirm={handleConfirm}
                       onCancel={handleCancel} />
      )}
    </ConfirmDialogContext.Provider>
  )
}
