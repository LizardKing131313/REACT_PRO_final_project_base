import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { UserState } from 'entities/user'
import type { Token } from 'features/auth'

const createInitState = (): UserState => ({
  user: null,
  accessToken: '',
})

export const userSlice = createSlice({
  name: 'user',
  initialState: createInitState(),
  reducers: {
    setAccessToken(state, action: PayloadAction<Pick<Token, 'accessToken'>>) {
      state.accessToken = action.payload.accessToken
    },
    clearUser() {
      return createInitState()
    },
    setUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload
    },
  },
  selectors: {
    getUser: (state: UserState) => state.user,
    getAccessToken: (state: Token) => state.accessToken,
  },
})

export const userActions = { ...userSlice.actions }
export const userSelectors = userSlice.selectors
