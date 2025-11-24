import classNames from 'classnames'
import { instagram, telegram, viber, vk, whatsapp } from 'shared/assets'
import { Logo } from 'shared/ui/Logo'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__col}>
            <Logo />
            <p className={styles.footer__copyright}>© «Интернет-магазин DogFood.ru»</p>
          </div>
          <div className={styles.footer__col}>
            <nav className={styles.menu_bottom}>
              <a href="/catalogue" className={styles.menu_bottom_item}>
                Каталог
              </a>
              <a href="/catalogue" className={styles.menu_bottom_item}>
                Акции
              </a>
              <a href="/catalogue" className={styles.menu_bottom_item}>
                Новости
              </a>
              <a href="/catalogue" className={styles.menu_bottom_item}>
                Отзывы
              </a>
            </nav>
          </div>
          <div className={styles.footer__col}>
            <nav className={styles.menu_bottom}>
              <a href="/catalogue" className={styles.menu_bottom_item}>
                Оплата и доставка
              </a>
              <a href="/catalogue" className={styles.menu_bottom_item}>
                Часто спрашивают
              </a>
              <a href="/catalogue" className={styles.menu_bottom_item}>
                Обратная связь
              </a>
              <a href="/catalogue" className={styles.menu_bottom_item}>
                Контакты
              </a>
            </nav>
          </div>
          <div className={styles.footer__col}>
            <div className={styles.contacts}>
              <p className={styles.contacts__title}>Мы на связи</p>
              <a className={classNames(styles.contacts__tel, styles.contacts__link)}
                 href="tel:89177172179">
                8 (999) 00-00-00
              </a>
              <a className={classNames(styles.contacts__mail, styles.contacts__link)}
                 href="mailto:hordog.ru@gmail.com">
                dogfood.ru@gmail.com
              </a>
              <ul className={classNames(styles.socials)}>
                <li>
                  <a className={styles.socials__link} href="/#">
                    <img src={telegram} alt="telegram" />
                  </a>
                </li>
                <li>
                  <a className={styles.socials__link} href="/#">
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                </li>
                <li>
                  <a className={styles.socials__link} href="/#">
                    <img src={viber} alt="viber" />
                  </a>
                </li>
                <li>
                  <a className={styles.socials__link} href="/#">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a className={styles.socials__link} href="/#">
                    <img src={vk} alt="vk" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
