import React, { useState }from 'react';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'



import { SignInContainer, TitleContainer, SignInButtonsContainer } from './sign-in.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [credentials, setCredentials] = useState({ email: '', password: ''  })  
    const { email, password } = credentials;

    const handleSubmit = async event => {
        event.preventDefault();
        

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setCredentials({...credentials, [name]: value })
    }

    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={email} 
                    required
                    handleChange={handleChange}
                    label = 'Email'
                />
                <FormInput 
                    name='password' 
                    type='password'
                    value={password} 
                    required
                    handleChange={handleChange}
                    label = 'Password'
                />
                <SignInButtonsContainer>
                    <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>
                    <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </SignInButtonsContainer>   
            </form>
        </SignInContainer>
    )
}
const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);