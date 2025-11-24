import classNames from 'classnames'
import type { CartProduct } from 'entities/cart'
import { lazy, Suspense, useMemo } from 'react'

import styles from './CartList.module.css'

type CartListProps = {
  products: CartProduct[]
}

const CartItemLazy = lazy(async () => {
  const module = await import('../../CartItem/ui/CartItem')
  return { default: module.CartItem }
})

export function CartList({ products }: CartListProps) {
  const productsContent = useMemo(() => {
    if (!products.length) {
      return <p>Корзина пуста</p>
    }

    return products.map((product) => (
      <CartItemLazy key={product.id} product={product} />
    ))
  }, [products])

  return (
    <Suspense fallback={<p>Загрузка корзины…</p>}>
      <div className={classNames(styles.cart_list)}>
        {productsContent}
      </div>
    </Suspense>
  )
}

