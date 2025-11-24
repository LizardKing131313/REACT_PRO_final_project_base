import { createApi } from '@reduxjs/toolkit/query/react'
import type { User } from 'entities/user'
import { customBaseQuery } from 'shared/store/api/config'
import type { SignUpFormValues } from 'widgets/SignUpForm/utils/types'

import type { Token } from '../model/types'

type SignUpResponse = {
  user: Pick<User, 'id' | 'email'>
  accessToken: Token['accessToken']
}

type SignInResponse = {
  user: Pick<User, 'id' | 'email'>
  accessToken: Token['accessToken']
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpFormValues>({
      query: (signUpFormValues) => ({
        url: '/auth/register',
        method: 'POST',
        body: signUpFormValues,
      }),
    }),
    signIn: builder.mutation<SignInResponse, SignUpFormValues>({
      query: (signInFormValues) => ({
        url: '/auth/login',
        method: 'POST',
        body: signInFormValues,
      }),
    }),
  }),
})

export const { useSignInMutation, useSignUpMutation } = authApi
