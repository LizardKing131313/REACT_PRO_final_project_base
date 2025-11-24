import { combineReducers } from '@reduxjs/toolkit'
import { authApi } from 'features/auth'
import { cartSlice } from 'features/cart'
import { productsApi, productsSlice } from 'features/product'
import { userSlice } from 'features/user'

export const reducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
})
