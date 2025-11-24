import classNames from 'classnames'
import { memo, useCallback } from 'react'
import type { MouseEvent } from 'react'

import { StarIcon } from '../../../assets'

import styles from './Rating.module.css'

type RatingProps = {
  rating?: number
  isEdit?: boolean
  onChange?: (value: number) => void
}

function RatingComponent({ rating = 0, isEdit = false, onChange }: RatingProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (!isEdit || !onChange) {
        return
      }

      const valueAttribute = event.currentTarget.getAttribute('data-value')
      if (!valueAttribute) {
        return
      }

      const nextValue = Number(valueAttribute)
      if (Number.isNaN(nextValue)) {
        return
      }

      onChange(nextValue)
    },
    [isEdit, onChange]
  )

  return (
    <div className={styles.wrapper} aria-label="Rating">
      {Array.from({ length: 5 }).map((_, starIndex) => {
        const starValue = starIndex + 1
        const isActive = starValue <= rating

        return (
          <button key={starValue}
                  type="button"
                  className={classNames(styles.star_button, isEdit && styles.star_button_editable)}
                  data-value={starValue}
                  onClick={handleClick}
                  disabled={!isEdit}
                  aria-label={`Оценка ${starValue}`}>
            <StarIcon className={styles.star_icon} fill={isActive ? 'gold' : 'gray'} />
          </button>
        )
      })}
    </div>
  )
}

export const Rating = memo(RatingComponent)
Rating.displayName = 'Rating'
