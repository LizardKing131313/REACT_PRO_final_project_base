import classNames from 'classnames'
import { ButtonBack } from 'shared/ui/ButtonBack'
import { WithProtection } from 'widgets/auth'

import styles from './ProfilePage.module.css'

export const ProfilePage = WithProtection(() => (
  <>
    <ButtonBack />
    <h1 className={styles.form__title}>Мои данные</h1>
    <form className={classNames(styles.form, styles.form)}>
      <div className={styles.form__row}>
        <label className={styles.form__label} htmlFor="name">
          {''}
          <input
            className={styles.input}
            name="name"
            id="name"
            type="text"
            placeholder="Введите ваше имя"
          />
        </label>
        <label className={styles.form__label}>
          {''}
          <input
            className={styles.input}
            name="about"
            id="about"
            type="text"
            placeholder="Описание профессии"
          />
        </label>
      </div>
      <div className={styles.form__row}>
        <label className={styles.form__label}>
          {''}
          <input
            className={styles.input}
            name="avatar"
            id="avatar"
            type="url"
            placeholder="Введите ссылку на аватарку"
          />
        </label>
        <label className={styles.form__label}>
          {''}
          <input className={styles.input} name="email" id="email" type="text" placeholder="email" />
        </label>
      </div>

      <button type="submit" className={classNames(styles.form__btn, styles.secondary, styles.max_content)}>
        Сохранить
      </button>
    </form>
    <h2 className={styles.form__title}>Изменить пароль</h2>
    <form className={classNames(styles.form, styles.form)}>
      <div className={classNames(styles.form__row, styles.form__row_min)}>
        <label className={styles.form__label}>
          {''}
          <input
            className={styles.input}
            name="password"
            id="password"
            type="password"
            placeholder="Пароль"
          />
        </label>
      </div>
      <button type="submit" className={classNames(styles.form__btn, styles.secondary, styles.max_content)}>
        Сохранить
      </button>
    </form>
  </>
))
