import classNames from 'classnames'
import type { CartProduct } from 'entities/cart'
import { useConfirmDialog } from 'shared/ui/ConfirmDialog'
import { PrimaryButton } from 'shared/ui/PrimaryButton'

import styles from './CartAmount.module.css'

type CartAmountProps = {
  products: Pick<CartProduct, 'id' | 'count' | 'price' | 'discount'>[]
}

export function CartAmount({ products }: CartAmountProps) {
  const allPrice = products.reduce((accumulator, product) =>
    product.price * product.count + accumulator, 0)

  const allDiscount = products.reduce((accumulator, product) =>
    product.discount * product.count + accumulator, 0)

  const showConfirmDialog = useConfirmDialog()

  async function handleSubmitCart() {
    const confirmed = await showConfirmDialog({
      title: 'Оформить заказ?',
      description: 'Вы уверенны, что хотите оформить заказ на сумму ' + (allPrice - allDiscount) + '₽?',
    })

    if (confirmed) {
      const order = products.map((product) => ({
        id: product.id,
        count: product.count
      }))
      alert('Отправка заказа на сервер: ' + JSON.stringify(order, null, 2))
    } else {
      alert('Заказ отменен')
    }
  }

  return (
    <div className={classNames(styles.cart_amount)}>
      <h1 className={classNames(styles.cart_amount_title)}>Ваша корзина</h1>
      <div className={classNames(styles.cart_amount_table)}>
        <div className={classNames(styles.cart_amount_table_row)}>
          <span className={classNames(styles.cart_amount_table_title)}>
            {`Товары (${products.length})`}
          </span>
          <span className={classNames(styles.cart_amount_table_value)}>{`${allPrice} ₽`}</span>
        </div>

        <div className={classNames(styles.cart_amount_table_row)}>
          <span className={classNames(styles.cart_amount_table_title)}>Скидка</span>
          <span
            className={classNames(
              styles.cart_amount_table_value,
              styles.cart_amount_table_value_discount
            )}
          >
            {`${allDiscount} ₽`}
          </span>
        </div>
      </div>

      <div className={classNames(styles.cart_amount_total_cost)}>
        <h2 className={classNames(styles.cart_amount_total_cost_title)}>Общая стоимость</h2>
        <span className={classNames(styles.cart_amount_total_cost_value)}>
          {`${allPrice - allDiscount} ₽`}
        </span>
      </div>

      <PrimaryButton type="button" onClick={handleSubmitCart}>
        Оформить заказ
      </PrimaryButton>
    </div>
  )
}
