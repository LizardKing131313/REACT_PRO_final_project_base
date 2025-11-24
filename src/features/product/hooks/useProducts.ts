import type { User } from 'entities/user'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from 'shared/store/utils'

import { useGetProductsQuery } from '../api/productsApi'
import { productsSelectors } from '../slice/products'
import { isLiked } from './isLiked'

export const useProducts = (user: Partial<User> | null) => {
  const { pathname } = useLocation()

  const { searchText, page, perPage, sort } = useAppSelector(productsSelectors.getProductsState)

  const isFavoritesPage = pathname === '/favorites'
  const { isLoading, isError, error, data, isFetching } = useGetProductsQuery({
    searchText,
    sort,
    page,
    perPage: isFavoritesPage ? undefined : perPage,
  })

  let products = data?.products ?? []

  if (isFavoritesPage) {
    products = products.filter((product) => isLiked(product.likes, user?.id))
  }

  const productsCount = data?.length ?? 0

  return {
    products,
    isLoading,
    isError,
    isFetching,
    error,
    productsCount,
  }
}
