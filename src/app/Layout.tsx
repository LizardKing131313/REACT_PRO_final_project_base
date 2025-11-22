import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Sort } from 'shared/ui/Sort'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'

export function Layout() {
  return (
    <>
      <Header />
      <Sort />
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
