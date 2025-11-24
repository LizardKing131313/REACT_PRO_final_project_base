import { userSelectors } from 'features/user/slice/user'
import type { ComponentType, FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from 'shared/store/utils'

export const WithProtection =
  <P extends object>(WrappedComponent: ComponentType<P>) => {
  const ReturnedComponent: FC<P> = (props) => {
    const accessToken = useAppSelector(userSelectors.getAccessToken)
    const location = useLocation()

    const authPaths = ['/signin', '/signup']
    if (!accessToken && !authPaths.includes(location.pathname)) {
      return (
        <Navigate to="/signin" state={{ from: location.pathname }} />
      )
    }

    return <WrappedComponent {...props} />
  }

  ReturnedComponent.displayName = `withProtection${WrappedComponent.displayName}`

  return ReturnedComponent
}
