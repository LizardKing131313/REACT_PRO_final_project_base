export type ConfirmDialogOptions = {
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
}

export type ShowConfirmDialog = (options?: ConfirmDialogOptions) => Promise<boolean>

export type DialogState = {
  isOpen: boolean
  options: ConfirmDialogOptions | null
  resolve: ((result: boolean) => void) | null
}
