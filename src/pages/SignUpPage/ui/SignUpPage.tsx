import { WithProtection } from 'shared/store/HOCs/WithProtection'
import { SignUpForm } from 'widgets/SignUpForm'

export const SignUpPage = WithProtection(() => <SignUpForm />)
