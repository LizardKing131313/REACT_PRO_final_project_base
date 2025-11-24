import type { Product } from 'entities/product'
import { useProducts } from 'features/product/hooks/useProducts'
import { userSelectors } from 'features/user/slice/user'
import { lazy, Suspense, useMemo } from 'react'
import { useAppSelector } from 'shared/store'
import { WithQuery } from 'shared/store/HOCs/WithQuery'

import styles from './ProductCardList.module.css'

type ProductCardListProps = {
  title: string
  products: Product[]
}

const ProductCardWidgetLazy = lazy(async () => {
  const module = await import('../../ProductCardWidget/ui/ProductCardWidget')
  return { default: module.ProductCardWidget }
})

function ProductCardListComponent({ title, products }: ProductCardListProps) {
  const productCards = useMemo(() => {
    if (!products.length) {
      return null
    }

    return products.map((product) => (
      <ProductCardWidgetLazy
        key={product.id}
        product={product}
      />
    ))
  }, [products])

  if (!products.length) {
    return <h1 className="header_title">Товар не найден</h1>
  }

  return (
    <div className={styles.card_list}>
      <div className={styles.card_list_header}>
        <h2 className={styles.card_list_title}>{title}</h2>
      </div>

      <div className={styles.card_list_items}>
        <Suspense fallback={<p>Загрузка товаров...</p>}>
          {productCards}
        </Suspense>
      </div>
    </div>
  )
}

const ProductCardListWithQuery =
  WithQuery(ProductCardListComponent)

type ProductCardListWithQueryProps = {
  title: string
}

export function ProductCardList({ title }: ProductCardListWithQueryProps) {
  const user = useAppSelector(userSelectors.getUser)
  const { products, isLoading, isError, error } = useProducts(user)

  return (
    <ProductCardListWithQuery
      title={title}
      isLoading={isLoading}
      isError={isError}
      products={products}
      error={error}
    />
  )
}
