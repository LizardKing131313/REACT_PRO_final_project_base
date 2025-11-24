import { WithProtection } from 'widgets/auth'
import { SignInForm } from 'widgets/SignInForm'

export const SignInPage = WithProtection(() => <SignInForm />)
