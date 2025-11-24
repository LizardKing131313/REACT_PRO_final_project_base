import { useProducts } from 'features/product/hooks/useProducts'
import { productsActions, productsSelectors } from 'features/product/slice/products'
import { userSelectors } from 'features/user/slice/user'
import type { RefObject } from 'react'
import { useCallback, useLayoutEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/store'

type UseLoadMoreParams = {
  ref: RefObject<HTMLElement | null>
}

export const useLoadMore = ({ ref }: UseLoadMoreParams) => {
  const dispatch = useAppDispatch()

  const user = useAppSelector(userSelectors.getUser)

  const { products, isFetching, productsCount } = useProducts(user)

  const page = useAppSelector(productsSelectors.getPage)

  const isEndOfList = products.length >= productsCount

  const fetchMoreProducts = useCallback(() => {
    if (!isEndOfList && !isFetching) {
      dispatch(productsActions.setPage(page + 1))
    }
  }, [isEndOfList, isFetching, page, dispatch])

  useLayoutEffect(() => {
    let observer: IntersectionObserver | undefined

    if (!isEndOfList && products.length) {
      const options: IntersectionObserverInit = { threshold: 0.5 }
      const callback: IntersectionObserverCallback = (entries) => {
        if (entries[0]?.isIntersecting) {
          fetchMoreProducts()
        }
      }
      observer = new IntersectionObserver(callback, options)
      if (ref.current) {
        observer.observe(ref.current)
      }
    }

    return () => {
      observer?.disconnect()
    }
  }, [fetchMoreProducts, isEndOfList, products.length, ref])

  return { isEndOfList, isFetching }
}
