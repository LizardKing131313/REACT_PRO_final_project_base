import classNames from 'classnames'

import { useAddToCart } from '../../../hooks/useAddToCart'
import { useCount } from '../hooks/useCount'

import * as styles from './ProductCartCounter.module.css'

const s = ((styles as any).default ?? styles) as Record<string, string>

type ProductCartCounterProps = {
  product: Product
}
export const ProductCartCounter = ({ product }: ProductCartCounterProps) => {
  const { count, handleCount, handleCountMinus, handleCountPlus } = useCount()
  const { addProductToCart } = useAddToCart()

  return (
    <div className={classNames('product__btn-wrap')}>
      <div className={s['button-count']}>
        <button className={s['button-count__minus']} onClick={handleCountMinus}>
          -
        </button>
        <input
          type="number"
          className={s['button-count__num']}
          value={count}
          onChange={handleCount}
        />
        <button className={s['button-count__plus']} onClick={handleCountPlus}>
          +
        </button>
      </div>
      <button
        onClick={() => addProductToCart({ ...product, count })}
        className={classNames(s['button'], s['button_type_primary'])}
      >
        В корзину
      </button>
    </div>
  )
}
