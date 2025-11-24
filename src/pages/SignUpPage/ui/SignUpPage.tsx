import { WithProtection } from 'widgets/auth'
import { SignUpForm } from 'widgets/SignUpForm'

export const SignUpPage = WithProtection(() => <SignUpForm />)
