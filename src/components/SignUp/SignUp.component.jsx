import { Component } from 'react'
import './SignUp.styles.scss'

import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'

import { auth, createUserProfile } from '../../firebase/firebase.utils'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export class SignUp extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state

    if(password !== confirmPassword) {
      alert("Password don't match!!")
      return;
    }

    try {
      // get the user info on sign up
      const { user } = await createUserWithEmailAndPassword(auth, email, password)

      // save the user into the db and add the displayName as the otherProps passes
      createUserProfile(user, { displayName });

      // on submit reset all in fo to an empty string
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
    
  }

  // change the state from empty to the value typed in the input.
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password.</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput 
            type='text' 
            name='displayName' 
            value={displayName} 
            required
            label='Display Name'
            handleChange={this.handleChange}
          />
          <FormInput 
            type='email' 
            name='email' 
            value={email} 
            required
            label='Email'
            handleChange={this.handleChange}
          />
          {/* <label>Email</label> */}
          <FormInput 
            type='password' 
            name='password' 
            value={password} 
            required
            label='Password'
            handleChange={this.handleChange}
          />
          <FormInput 
            type='password' 
            name='confirmPassword' 
            value={confirmPassword} 
            required
            label='Confirm Password'
            handleChange={this.handleChange}
          />

          <CustomButton type="submit" onClick={this.handleChange}>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp