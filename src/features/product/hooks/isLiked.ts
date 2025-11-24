import type { Like } from 'entities/review'

export const isLiked =
  (likes: Like[], userId: string | undefined) =>
    likes?.some((favorite) => favorite.userId === userId)
