import type { ReviewProduct } from 'entities/product'
import type { User, LikeUser } from 'entities/user'
import type { BaseDates } from 'shared/types/base'

export type BaseLike = {
  id: string
  userId: string
  productId: string
}

export type Like = BaseLike & {
  user: LikeUser
}

export type ReviewUserLike = BaseLike & {
  product: ReviewProduct
}

export type Review = BaseDates & {
  id: string
  user: User
  text: string
  rating: number
  product: ReviewProduct
}
