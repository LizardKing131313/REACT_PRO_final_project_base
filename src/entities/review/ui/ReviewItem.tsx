import { memo } from 'react'
import { Rating } from 'shared/ui/Rating'

import type { Review } from '../model/types'

import styles from './ReviewItem.module.css'

type ReviewItemProps = {
  review: Review
}

function ReviewItemComponent({ review }: ReviewItemProps) {
  const date = new Date(review.createdAt).toLocaleDateString('ru-RU')

  return (
    <div className={styles.review}>
      <div className={styles.review__header}>
        <div className={styles.review__name}>
          {review.user.name}
        </div>
        <div className={styles.review__date}>
          {date}
        </div>
      </div>

      <Rating rating={review.rating} />

      <p className={styles.review__text}>{review.text}</p>
    </div>
  )
}

export const ReviewItem = memo(ReviewItemComponent)
ReviewItem.displayName = 'ReviewItem'
