import { createApi } from '@reduxjs/toolkit/query/react'
import type {
  DeleteLikeResponse,
  Product,
  ProductRequest,
  ProductsData,
  SetLikeResponse,
} from 'entities/product/model/types'
import { customBaseQuery } from 'shared/store/api/config'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsData, ProductRequest>({
      query: ({ searchText: searchTerm, sort, page, perPage }) => ({
        url: '/products',
        params: {
          sort,
          searchTerm: searchTerm.length ? searchTerm : undefined,
          perPage: perPage ? page * perPage : undefined,
        },
      }),
      providesTags: [{ type: 'Products', id: 'list' }],
    }),
    getProduct: builder.query<Product, Pick<Product, 'id'>>({
      query: ({ id }) => ({ url: `/products/${id}` }),
      providesTags: (productFromBE) => [{ type: 'Products', id: productFromBE?.id ?? -1 }],
    }),

    createProduct: builder.mutation<Product, Product>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: [{ type: 'Products', id: 'list' }],
    }),

    deleteProduct: builder.mutation<Product, Pick<Product, 'id'>>({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (productFromBE) => [
        { type: 'Products', id: 'list' },
        { type: 'Products', id: productFromBE?.id ?? -1 },
      ],
    }),
    setLikeProduct: builder.mutation<SetLikeResponse, Pick<Product, 'id'>>({
      query: ({ id }) => ({
        url: `/products/${id}/likes`,
        method: 'PUT',
      }),
      invalidatesTags: (productFromBE) => [
        { type: 'Products', id: 'list' },
        { type: 'Products', id: productFromBE?.like.productId ?? -1 },
      ],
    }),
    deleteLikeProduct: builder.mutation<DeleteLikeResponse, Pick<Product, 'id'>>({
      query: ({ id }) => ({
        url: `/products/${id}/likes`,
        method: 'DELETE',
      }),
      invalidatesTags: (productFromBE) => [
        { type: 'Products', id: 'list' },
        { type: 'Products', id: productFromBE?.product.productId ?? -1 },
      ],
    }),
  }),
})

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useSetLikeProductMutation,
  useDeleteLikeProductMutation,
} = productsApi
