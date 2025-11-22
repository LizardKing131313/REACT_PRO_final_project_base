import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from 'shared/store/store'

import { router } from './router'

import './styles/normalize.css'
import './styles/styles.css'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
