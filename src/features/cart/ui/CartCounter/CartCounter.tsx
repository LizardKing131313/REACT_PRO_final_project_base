import classNames from 'classnames'
import { memo } from 'react'

import { useCount } from '../../hooks/useCount'

import styles from './CartCounter.module.css'

type CartCounterProps = {
  productId: string
}

function CartCounterComponent({ productId }: CartCounterProps) {
  const { count, stock, handleSetCount, handleIncrement, handleDecrement } = useCount(productId)

  return (
    <div className={classNames(styles.button_count)}
         role="group"
         aria-label="Количество товара в корзине">
      <button type="button"
              onClick={handleDecrement}
              className={classNames(styles.button_count_minus)}>
        -
      </button>

      <input onChange={handleSetCount}
             type="number"
             className={classNames(styles.button_count_num)}
             value={count} />

      <button type="button"
              onClick={handleIncrement}
              className={classNames(styles.button_count_plus)}
              disabled={count >= stock}>
        +
      </button>
    </div>
  )
}

export const CartCounter = memo(CartCounterComponent)
CartCounter.displayName = 'CartCounter'
