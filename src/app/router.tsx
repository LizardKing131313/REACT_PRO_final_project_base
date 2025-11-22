import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './Layout'

enum AppRoutes {
  HOME = 'home',
  FAVORITES = 'favorites',
  PRODUCTS = 'products',
  PROFILE = 'profile',
  CART = 'cart',
  SIGNUP = 'signup',
  SIGNIN = 'signin',
  NOT_FOUND = 'not_found',
}

const RoutePath: Record<AppRoutes, `/${string}` | '*'> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.FAVORITES]: '/favorites',
  [AppRoutes.PRODUCTS]: '/products/:productId',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.SIGNUP]: '/signup',
  [AppRoutes.SIGNIN]: '/signin',
  [AppRoutes.NOT_FOUND]: '*',
}

export const router = createBrowserRouter([
  {
    path: RoutePath.home,
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import('pages/HomePage')
          return { Component: HomePage }
        },
      },
      {
        path: RoutePath.favorites,
        async lazy() {
          const { FavoritesPage } = await import('pages/FavoritesPage')
          return { Component: FavoritesPage }
        },
      },
      {
        path: RoutePath.products,
        async lazy() {
          const { ProductPage } = await import('pages/ProductPage')
          return { Component: ProductPage }
        },
      },
      {
        path: RoutePath.profile,
        async lazy() {
          const { ProfilePage } = await import('pages/ProfilePage')
          return { Component: ProfilePage }
        },
      },
      {
        path: RoutePath.cart,
        async lazy() {
          const { CartPage } = await import('pages/CartPage')
          return { Component: CartPage }
        },
      },
      {
        path: RoutePath.signup,
        async lazy() {
          const { SignUpPage } = await import('pages/SignUpPage')
          return { Component: SignUpPage }
        },
      },
      {
        path: RoutePath.signin,
        async lazy() {
          const { SignInPage } = await import('pages/SignInPage')
          return { Component: SignInPage }
        },
      },

      // last route
      {
        path: RoutePath.not_found,
        async lazy() {
          const { NotFoundPage } = await import('pages/NotFoundPage')
          return { Component: NotFoundPage }
        },
      },
    ],
  },
])
