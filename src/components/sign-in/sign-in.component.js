import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import { SignInContainer, TitleContainer, SignInButtonsContainer } from './sign-in.styles'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log('Error loggin in user', error.message);
        }
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type="email" 
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label = "Email"
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
                        label = "Password"
                    />
                    <SignInButtonsContainer>
                        <CustomButton type="submit" value="Submit Form">SIGN IN</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </SignInButtonsContainer>   
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;