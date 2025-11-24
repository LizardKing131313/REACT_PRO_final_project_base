import type { Product } from 'entities/product'
import { memo, startTransition, useActionState } from 'react'
import { PrimaryButton } from 'shared/ui/PrimaryButton'

import { useAddToCart } from '../../hooks/useAddToCart'

type AddToCartButtonProps = {
  product: Product
}

function AddToCartButtonComponent({ product }: AddToCartButtonProps) {
  const { addProductToCart } = useAddToCart()

  const [, addToCartAction, isAddToCartPending] = useActionState(
    async (previousState: null, _payload: unknown) => {
      await new Promise(resolve => setTimeout(resolve, 500))
      addProductToCart({ ...product, count: 1 })
      return previousState
    },
    null,
  )

  const handleAddToCartClick = () => {
    startTransition(() => {
      void addToCartAction({})
    })
  }

  return (
    <PrimaryButton onClick={handleAddToCartClick} disabled={isAddToCartPending}>
      {isAddToCartPending ? 'Добавляем…' : 'В корзину'}
    </PrimaryButton>
  )
}

export const AddToCartButton = memo(
  AddToCartButtonComponent,
  (previousProps, nextProps) =>
    previousProps.product.id === nextProps.product.id,
)
AddToCartButton.displayName = 'AddToCartButton'
