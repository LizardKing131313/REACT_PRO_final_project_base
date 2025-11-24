import type { FavoritePost } from 'entities/post'
import type { ReviewUserLike } from 'entities/review'
import type { BaseDates } from 'shared/types/base'

export type Role = 'USER'

export type BaseUser = {
  id: string
  roles: Role[]
  name: string
  email: string
  phone: string
  avatarPath: string
  about: string
}

export type User = BaseUser & {
  likes: ReviewUserLike[]
  favoritesPost: FavoritePost[]
}

export type LikeUser = BaseDates & BaseUser & {
  provider: null
  isAdmin: boolean
  isBlocked: boolean
  password: string
}

export type UserState = {
  user: Partial<User> | null
  accessToken: string
}
