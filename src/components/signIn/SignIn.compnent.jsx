import { Component } from 'react'
import './SignIn.styles.scss'

import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'

export class SignIn extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSignIn = () => {
    const { email, password } = this.state
    signInWithEmailAndPassword(auth, email, password)
    console.log('Signed in');
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='email' 
            name='email' 
            value={this.state.email} 
            required
            label='Email'
            handleChange={this.handleChange}
          />
          {/* <label>Email</label> */}
          <FormInput 
            type='password' 
            name='password' 
            value={this.state.password} 
            required
            label='Password'
            handleChange={this.handleChange}
          />
          {/* <label>Password</label> */}

          <div className="buttons">
            <CustomButton 
              type="submit" 
              onClick={this.handleSignIn}
            >Sign In</CustomButton>
            <CustomButton 
              type="submit" 
              // 
              onClick={signInWithGoogle} 
              isGoogleButton
            >Sign in with google</CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn