import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ConfirmDialogProvider } from 'shared/ui/ConfirmDialog'

import { router } from './router'
import { store } from './store/store'

import './styles/normalize.css'
import './styles/styles.css'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <Provider store={store}>
      <ConfirmDialogProvider>
        <RouterProvider router={router} />
      </ConfirmDialogProvider>
    </Provider>
  )
}
