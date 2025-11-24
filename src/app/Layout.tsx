import { ProductSort } from 'features/product'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'

export function Layout() {
  return (
    <>
      <Header />
      <ProductSort />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        pauseOnHover
        theme="colored"
      />
      <Footer />
    </>
  )
}
