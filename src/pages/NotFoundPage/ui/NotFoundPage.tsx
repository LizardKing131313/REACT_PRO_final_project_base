import { Link } from 'react-router-dom'

import * as styles from './NotFoudPage.module.css'

const s = styles as unknown as Record<string, string>

export const NotFoundPage = () => (
  <div className={s.notFoundPage}>
    <h1>Страница на найдена</h1>
    <Link to="/">
      <button>Перейти на главную</button>
    </Link>
  </div>
)
