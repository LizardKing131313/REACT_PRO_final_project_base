import { Link } from 'react-router-dom'

import { logo } from '../../../assets'

import * as styles from './Logo.module.css'

const s = styles as unknown as Record<string, string>

export const Logo = () => (
  <Link to="/">
    <img className={s['logo__pic']} src={logo} alt="Логотип компании" />
  </Link>
)
