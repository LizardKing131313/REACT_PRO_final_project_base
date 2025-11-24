import classNames from 'classnames'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { PrimaryButton } from 'shared/ui/PrimaryButton'
import { Rating } from 'shared/ui/Rating'

import styles from './ReviewForm.module.css'

export const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(0)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // eslint-disable-next-line no-console
    console.log('Отправка: ', { reviewText, rating })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Rating isEdit rating={rating} onChange={setRating} />

      <textarea className={classNames(styles.input, styles.textarea)}
                name="text"
                id="text"
                placeholder="Напишите текст отзыва"
                value={reviewText}
                onChange={handleChange} />

      <PrimaryButton type="submit">
        Отправить отзыв
      </PrimaryButton>
    </form>
  )
}
