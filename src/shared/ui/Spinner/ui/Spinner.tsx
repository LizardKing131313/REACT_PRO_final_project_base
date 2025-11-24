import classNames from 'classnames'
import { memo } from 'react'

import styles from './Spinner.module.css'

function SpinnerComponent() {
  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.loader)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export const Spinner = memo(SpinnerComponent)
Spinner.displayName = 'Spinner'
