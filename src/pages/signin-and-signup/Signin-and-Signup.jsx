import './signin-and-signup.scss'

import SignIn from '../../components/signIn/SignIn.compnent'
import SignUp from '../../components/SignUp/SignUp.component'

const SigninAndSignup = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SigninAndSignup