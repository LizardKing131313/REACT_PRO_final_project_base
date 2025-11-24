import type { Product } from 'entities/product'
import { ReviewForm } from 'features/review'
import { lazy, memo, Suspense, useMemo } from 'react'

import styles from './ReviewList.module.css'

type ReviewListProps = {
  product: Product
}

const ReviewItemLazy = lazy(async () => {
  const module = await import('entities/review/ui/ReviewItem')
  return { default: module.ReviewItem }
})

function ReviewListComponent({ product }: ReviewListProps) {
  const reviewItems = useMemo(() => {
    if (!product.reviews.length) {
      return (
        <p className={styles.review__empty}>
          Отзывов пока нет
        </p>
      )
    }

    return product.reviews.map((review) => (
      <ReviewItemLazy key={review.id} review={review} />
    ))
  }, [product.reviews])

  return (
    <Suspense fallback={<p>Загрузка отзывов…</p>}>
      {reviewItems}

      <h2 className={styles.review__form}>
        Отзыв о товаре {product.name}
      </h2>

      <ReviewForm />
    </Suspense>
  )
}

export const ReviewList = memo(ReviewListComponent)
