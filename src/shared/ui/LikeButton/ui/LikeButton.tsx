import classNames from 'classnames'
import { toast } from 'react-toastify'

import { LikeIcon } from '../../../assets'
import type { IErrorResponse } from '../../../store/api/productsApi'
import {
  useSetLikeProductMutation,
  useDeleteLikeProductMutation,
} from '../../../store/api/productsApi'
import { userSelectors } from '../../../store/slices/user'
import { useAppSelector } from '../../../store/utils'

import * as styles from './LikeButton.module.css'

const s = ((styles as any).default ?? styles) as Record<string, string>

type TLikeButtonProps = {
  product: Product
}
export const LikeButton = ({ product }: TLikeButtonProps) => {
  const accessToken = useAppSelector(userSelectors.getAccessToken)
  const user = useAppSelector(userSelectors.getUser)

  const [setLike] = useSetLikeProductMutation()
  const [deleteLike] = useDeleteLikeProductMutation()

  const isLike = product?.likes.some((l) => l.userId === user?.id)

  const toggleLike = async () => {
    if (!accessToken) {
      toast.warning('Вы не авторизованы')
      return
    }
    let response
    if (isLike) {
      response = await deleteLike({ id: `${product.id}` })
    } else {
      response = await setLike({ id: `${product.id}` })
    }

    if (response.error) {
      const error = response.error as IErrorResponse
      toast.error(error.data.message)
    }
  }

  return (
    <button
      className={classNames(s['card__favorite'], {
        [s['card__favorite_is-active'] ?? '']: isLike,
      })}
      onClick={toggleLike}
    >
      <LikeIcon />
    </button>
  )
}
