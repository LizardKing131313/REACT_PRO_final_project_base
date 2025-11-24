import classNames from 'classnames'
import { memo } from 'react'
import { quality, truck } from 'shared/assets'

import styles from './ProductDelivery.module.css'

function ProductDeliveryComponent() {
  return (
    <>
      <div className={classNames(styles.product__delivery)}>
        <img src={truck} alt="truck" />
        <div className={classNames(styles.product__right)}>
          <h3 className={classNames(styles.product__name)}>Доставка по всему Миру!</h3>
          <p className={classNames(styles.product__text)}>
            Доставка курьером — <span className="bold"> от 399 ₽</span>
          </p>
          <p className={classNames(styles.product__text)}>
            Доставка в пункт выдачи —
            <span className={classNames(styles.product__bold)}> от 199 ₽</span>
          </p>
        </div>
      </div>
      <div className={classNames(styles.product__delivery)}>
        <img src={quality} alt="quality" />
        <div className={classNames(styles.product__right)}>
          <h3 className={classNames(styles.product__name)}>Гарантия качества</h3>
          <p className={classNames(styles.product__text)}>
            Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все
            возможное, чтобы удовлетворить ваши нужды.
          </p>
        </div>
      </div>
    </>
  )
}


export const ProductDelivery = memo(ProductDeliveryComponent)
ProductDelivery.displayName = 'ProductDelivery'
