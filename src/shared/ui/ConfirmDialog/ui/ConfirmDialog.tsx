import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

import styles from './ConfirmDialog.module.css'

type Props = {
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmDialog({
                                title,
                                description,
                                confirmText = 'Подтвердить',
                                cancelText = 'Отмена',
                                onConfirm,
                                onCancel,
                              }: Props) {
  const root = document.getElementById('dialog-root')

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onCancel()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onCancel])

  if (!root) {
    return null
  }

  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onCancel()
    }
  }

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.dialog}>
        <div className={styles.headerStripe} />
        <div className={styles.content}>
          <div className={styles.title}>
            {title ?? 'Подтвердить действие?'}
          </div>
          <div className={styles.description}>
            {description ?? 'Это действие необратимо.'}
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.cancelButton} onClick={onCancel}>
              {cancelText}
            </button>
            <button type="button" className={styles.confirmButton} onClick={onConfirm}>
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>,
    root,
  )
}
