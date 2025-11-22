import classNames from 'classnames'

import * as styles from './Spinner.module.css'

const s = ((styles as any).default ?? styles) as Record<string, string>

export const Spinner = () => (
  <div className={classNames(s['wrapper'])}>
    <div className={classNames(s['loader'])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)
