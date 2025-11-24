import type { AppDispatch, RootState } from 'app/store/types'
// eslint-disable-next-line
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector

export const useAppDispatch =
  (): AppDispatch => useDispatch<AppDispatch>()
