import classNames from 'classnames'

import * as styles from './Price.module.css'

const s = ((styles as any).default ?? styles) as Record<string, string>

type TPriceProps = {
  price: number
  discountPrice: number
}

export const Price = ({ price, discountPrice }: TPriceProps) => (
  <div className={classNames(s['price-small'], s['price-wrap'])}>
    <span className={classNames(s['price_old'], s['price_left'])}>{`${price}₽`}</span>
    <span className={classNames(s['price_discount'], s['price'])}>
      {`${price - discountPrice}₽`}
    </span>
  </div>
)
