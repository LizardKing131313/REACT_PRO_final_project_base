import classNames from 'classnames'
import type { IErrorResponse } from 'entities/product'
import type { Like } from 'entities/review'
import { useDeleteLikeProductMutation, useSetLikeProductMutation } from 'features/product'
import { userSelectors } from 'features/user/slice/user'
import { memo, startTransition, useEffect, useOptimistic, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { LikeIcon } from 'shared/assets'
import { useAppSelector } from 'shared/store/utils'

import styles from './ProductLikeButton.module.css'

type ProductLikeButtonProps = {
  productId: string
  likes: Array<Pick<Like, 'id' | 'userId' | 'productId'>>
}

function ProductLikeButtonComponent({ productId, likes }: ProductLikeButtonProps) {
  const accessToken = useAppSelector(userSelectors.getAccessToken)
  const user = useAppSelector(userSelectors.getUser)

  const [setLike] = useSetLikeProductMutation()
  const [deleteLike] = useDeleteLikeProductMutation()

  const isLikedFromProps =
    Boolean(user?.id) &&
    likes.some(
      (likeItem) => likeItem.userId === user?.id && String(likeItem.productId) === productId,
    )

  const [baseIsLiked, setBaseIsLiked] = useState<boolean>(isLikedFromProps)

  useEffect(() => {
    setBaseIsLiked(isLikedFromProps)
  }, [isLikedFromProps])

  const [optimisticIsLike, applyOptimisticIsLike] = useOptimistic(
    baseIsLiked,
    (_previousValue: boolean, optimisticValue: boolean) => optimisticValue,
  )

  const [locked, setLocked] = useState(false)
  const lockedRef = useRef(false)

  const handleToggleLikeClick = () => {
    if (!accessToken) {
      toast.warning('Вы не авторизованы')
      return
    }

    if (lockedRef.current) {
      return
    }

    lockedRef.current = true
    setLocked(true)

    const nextValue = !baseIsLiked

    startTransition(async () => {
      applyOptimisticIsLike(nextValue)

      try {
        if (nextValue) {
          await setLike({ id: productId }).unwrap()
        } else {
          await deleteLike({ id: productId }).unwrap()
        }

        setBaseIsLiked(nextValue)
      } catch (error) {
        const possibleError = error as IErrorResponse | unknown

        if (
          typeof possibleError === 'object' &&
          possibleError !== null &&
          'data' in possibleError &&
          (possibleError as IErrorResponse).data?.message
        ) {
          toast.error((possibleError as IErrorResponse).data.message)
        } else {
          toast.error('Не удалось изменить лайк')
        }

        applyOptimisticIsLike(baseIsLiked)
      } finally {
        lockedRef.current = false
        setLocked(false)
      }
    })
  }

  return (
    <button type="button"
            className={classNames(styles.like, {
              [styles.like_is_active ?? '']: optimisticIsLike,
            })}
            onClick={handleToggleLikeClick}
            disabled={locked}
            aria-pressed={optimisticIsLike}>
      <LikeIcon />
    </button>
  )
}

export const ProductLikeButton = memo(ProductLikeButtonComponent)
ProductLikeButton.displayName = 'ProductLikeButton'
