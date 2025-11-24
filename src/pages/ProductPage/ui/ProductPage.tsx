import classNames from 'classnames'
import { ProductDescription } from 'entities/product'
import { useGetProductQuery } from 'features/product'
import { useLocation } from 'react-router-dom'
import { ButtonBack } from 'shared/ui/ButtonBack'
import { WithProtection } from 'widgets/auth'
import { ProductPageCard } from 'widgets/product'
import { ReviewList } from 'widgets/review'

import styles from './ProductPage.module.css'

export const ProductPage = WithProtection(() => {
  const location = useLocation()
  const { pathname } = location
  const productId = pathname.split('/').at(-1) ?? ''

  const { data: product } = useGetProductQuery({ id: productId })

  if (!product) {
    return <h1 className={classNames(styles.header_title)}>Не удалось получить товар</h1>
  }

  return (
    <>
      <ButtonBack />

      <ProductPageCard product={product} />

      <ProductDescription />

      <ReviewList product={product} />
    </>
  )
})
