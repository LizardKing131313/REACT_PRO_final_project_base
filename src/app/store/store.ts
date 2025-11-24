import { configureStore } from '@reduxjs/toolkit'
import { authApi } from 'features/auth'
import { productsApi } from 'features/product'

import { AppApi } from './ApiService'
import { reducer } from './reducer'

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: AppApi,
      },
    }).concat([authApi.middleware, productsApi.middleware]),
})
