import classNames from 'classnames'

import { CartItem } from '../../CartItem'

import * as styles from '../../CartPage.module.css'

const s = ((styles as any).default ?? styles) as Record<string, string>

type CartListProps = {
  products: CartProduct[]
}
export const CartList = ({ products }: CartListProps) => (
  <div className={classNames(s['cart-list'])}>
    {products.map((p) => (
      <CartItem product={p} key={p.id} />
    ))}
  </div>
)
