import classNames from 'classnames'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { memo } from 'react'

import styles from './PrimaryButton.module.css'

type ButtonProps = {
  children: ReactNode
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

function PrimaryButtonComponent({ children, className, type = 'button', ...restProps }: ButtonProps) {
  return (
    <button type={type}
            className={classNames(styles.button, styles.button_type_primary, className)}
            {...restProps}>
      {children}
    </button>
  )
}

export const PrimaryButton = memo(PrimaryButtonComponent)
PrimaryButton.displayName = 'PrimaryButton'
