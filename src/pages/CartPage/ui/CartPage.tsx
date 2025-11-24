import classNames from 'classnames'
import { cartSelectors } from 'features/cart/slice/cart'
import { useAppSelector } from 'shared/store/utils'
import { ButtonBack } from 'shared/ui/ButtonBack'
import { CartAmount, CartList } from 'widgets/cart'

import styles from './CartPage.module.css'

export const CartPage = () => {
  const products = useAppSelector(cartSelectors.getCartProducts)

  if (!products.length) {
    return (
      <>
        <ButtonBack />
        <h1 className="header_title">Товаров нет корзине</h1>
      </>
    )
  }

  return (
    <>
      <ButtonBack />
      <div className={classNames(styles.content, styles.container)}>
        <div className={classNames(styles.content_cart)}>
          <div className={classNames(styles.cart_title)}>
            <span>{products.length}</span> в корзине
          </div>
          <CartList products={products} />
          <CartAmount products={products} />
        </div>
      </div>
    </>
  )
}
