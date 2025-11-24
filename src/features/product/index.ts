export { ProductSort } from './ui/ProductSort/ProductSort'
export { ProductSearch } from './ui/ProductSearch/ProductSearch'
export { useProducts } from './hooks/useProducts'
export { isLiked } from './hooks/isLiked'
export { productsSlice } from './slice/products'
export {
  productsApi,
  useGetProductQuery,
  useGetProductsQuery,
  useSetLikeProductMutation,
  useDeleteLikeProductMutation,
} from './api/productsApi'
