import { type Product, ProductCard } from 'entities/product'
import { AddToCartButton, CartCounter } from 'features/cart'
import { cartSelectors } from 'features/cart/slice/cart'
import { memo } from 'react'
import { useAppSelector } from 'shared/store/utils'

import { ProductLikeButton } from '../../ProductLikeButton/ui/ProductLikeButton'

type CardWidgetProps = {
  product: Product
}

function ProductCardWidgetComponent({ product }: CardWidgetProps) {
  const cartProducts = useAppSelector(cartSelectors.getCartProducts)
  const isProductInCart = cartProducts
    .some((cartProduct) => cartProduct.id === product.id)

  return (
    <ProductCard product={product}
                 topRightSlot={<ProductLikeButton productId={product.id} likes={product.likes} />}
                 bottomSlot={isProductInCart ? <CartCounter productId={product.id} />
                                             : <AddToCartButton product={product} />} />
  )
}

export const ProductCardWidget = memo(
  ProductCardWidgetComponent,
  (previousProps, nextProps) =>
    previousProps.product.id === nextProps.product.id &&
    previousProps.product.likes === nextProps.product.likes,
)
ProductCardWidget.displayName = 'ProductCardWidget'
