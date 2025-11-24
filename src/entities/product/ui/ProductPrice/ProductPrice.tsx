import classNames from 'classnames'
import { memo } from 'react'
import { Position, Tooltip } from 'shared/ui/Tooltip'

import styles from './ProductPrice.module.css'

type ProductPriceProps = {
  price: number
  discountPrice: number
}

function ProductPriceComponent({ price, discountPrice }: ProductPriceProps) {
  const hasDiscount = discountPrice > 0 && discountPrice < price
  const discount = price - discountPrice

  const component = (
    <div className={classNames(styles.price_small, styles.price_wrap)}>
      <span className={classNames(styles.price_old, styles.price_left)}>
        {`${discount}₽`}
      </span>
      <span className={classNames(styles.price_discount, styles.price)}>
        {`${price}₽`}
      </span>
    </div>
  )

  if (!hasDiscount) {
    return component
  }

  const text = `Скидка ${discountPrice}₽`

  return (
    <Tooltip content={text} position={Position.Bottom}>
      {component}
    </Tooltip>
  )
}

export const ProductPrice = memo(ProductPriceComponent)
ProductPrice.displayName = 'ProductPrice'
