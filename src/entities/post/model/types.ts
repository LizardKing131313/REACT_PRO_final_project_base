import type { BaseDates } from 'shared/types/base'

export type Post = BaseDates & {
  id: string
  userId: string
  title: string
  slug: string
  description: string
  body: string
  images: string
  tags: string[]
  isPublished: boolean
  favoritesCount: number
}

export type FavoritePost = {
  id: string
  userId: string
  postId: string
  post: Post
}
