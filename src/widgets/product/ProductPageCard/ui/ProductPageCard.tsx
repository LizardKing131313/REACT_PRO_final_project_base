import classNames from 'classnames'
import {
  type Product,
  ProductDelivery,
  ProductPrice,
} from 'entities/product'
import { AddToCartButton, CartCounter } from 'features/cart'
import { cartSelectors } from 'features/cart/slice/cart'
import { memo } from 'react'
import { useAppSelector } from 'shared/store'
import { Image } from 'shared/ui/Image'
import { Rating } from 'shared/ui/Rating'

import { ProductLikeButton } from '../../ProductLikeButton/ui/ProductLikeButton'

import styles from './ProductPageCard.module.css'

type ProductPageCardProps = {
  product: Product
}

function ProductPageCardComponent({ product }: ProductPageCardProps) {
  const { id, name, images, description, price, discount } = product
  const cartProducts = useAppSelector(cartSelectors.getCartProducts)
  const isProductInCart = !!cartProducts.find((cartProduct) => cartProduct.id === id)

  return (
    <>
      <h1 className={classNames(styles.header_title)}>{name}</h1>
      <p className={classNames(styles.acticul)}>
        Артикул: <b>2388907</b>
      </p>
      <p className={classNames(styles.acticul)}>
        <Rating rating={3} />
      </p>
      <div className={classNames(styles.product)}>
        <div className={classNames(styles.product_img_wrapper)}>
          <Image src={images} alt={description} />
        </div>
        <div className={classNames(styles.product__desc)}>
          <ProductPrice price={price} discountPrice={discount} />

          <div className={styles.controls}>
            {isProductInCart ? (
              <CartCounter productId={id} />
            ) : (
              <AddToCartButton product={product} />
            )}

            <ProductLikeButton productId={product.id} likes={product.likes} />
          </div>

          <ProductDelivery />
        </div>
      </div>
    </>
  )
}

export const ProductPageCard = memo(ProductPageCardComponent)
ProductPageCard.displayName = 'ProductPageCard'
