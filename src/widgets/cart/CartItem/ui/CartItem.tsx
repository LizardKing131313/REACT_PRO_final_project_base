import classNames from 'classnames'
import type { CartProduct } from 'entities/cart'
import { CartCounter } from 'features/cart'
import { cartActions } from 'features/cart/slice/cart'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { TrashIcon } from 'shared/assets'
import { useAppDispatch } from 'shared/store/utils'

import styles from './CartItem.module.css'

type CartItemProps = {
  product: Pick<CartProduct, 'id' | 'name' | 'images' | 'price' | 'discount'>
}

function CartItemComponent({ product: { id, name, images, price, discount } }: CartItemProps) {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    dispatch(cartActions.deleteCartProduct(id))
  }
  const link = `/products/${id}`

  return (
    <div className={classNames(styles.cart_item)}>
      <div className={classNames(styles.cart_item_desc)}>
        <img src={images} alt={name} className={classNames(styles.cart_item_image)} />

        <div className={classNames(styles.cart_item_body)}>
          <div className={classNames(styles.cart_item_header)}>
            <Link className={classNames(styles.cart_item_title)} to={link}>
              <h2 className={classNames(styles.cart_item_name)}>{name}</h2>
            </Link>

            <div className={classNames(styles.cart_item_controls)}>
              <CartCounter productId={id} />

              <div className={classNames(styles.cart_item_price)}>
                <div className={classNames(styles.price_big, styles.price_wrap)}>
                  <span className={classNames(styles.price_old, styles.price_right)}>{price}</span>
                  <span className={classNames(styles.price_discount, styles.price)}>
                    {price - discount}
                  </span>
                </div>
              </div>
            </div>

            <button type="button"
                    className={classNames(styles.cart_item_bnt_trash)}
                    onClick={handleDelete}>
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const CartItem = memo(CartItemComponent)
CartItem.displayName = 'CartItem'
