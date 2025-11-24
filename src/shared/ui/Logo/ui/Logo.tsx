import { memo } from 'react'
import { Link } from 'react-router-dom'

import { logo } from '../../../assets'

import styles from './Logo.module.css'

function LogoComponent () {
  return (
    <Link to="/">
      <img className={styles.logo__pic} src={logo} alt="Логотип компании" />
    </Link>
  )
}

export const Logo = memo(LogoComponent)
Logo.displayName = 'Logo'
