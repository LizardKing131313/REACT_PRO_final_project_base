import type { Category } from 'entities/category'
import type { Like, Review } from 'entities/review'
import type { User } from 'entities/user'
import type { BaseDates } from 'shared/types/base'

export type BaseProduct = BaseDates & {
  id: string
  name: string
  description: string
  price: number
  images: string
  slug: string
  discount: number
  isPublished: boolean
  stock: number
  tags: string[]
}

export type Product = BaseProduct & {
  reviews: Review[]
  category: Category
  user: User
  likes: Like[]
}

export type ReviewProduct = BaseProduct & {
  categoryId: number
  userId: string
  wight: string
}

export type ProductsData = {
  products: Product[]
  length: number
}

export type IErrorResponse = {
  data: { statusCode: number; message: string; error: string }
  status: number
}

export type SetLikeResponse = {
  like: {
    id: string
    userId: string
    productId: string
  }
  message: string
}

export type DeleteLikeResponse = {
  product: {
    id: string
    userId: string
    productId: string
  }
  message: string
}

export type ProductRequest = {
  page: number
  perPage?: number | undefined
  sort: Sort
  searchText: string
}

export type Sort = 'high-price' | 'low-price' | 'newest' | 'oldest'
