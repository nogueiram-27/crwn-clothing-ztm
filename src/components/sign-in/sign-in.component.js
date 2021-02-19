import React from 'react';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'



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
        const { emailSignInStart } = this.props
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props
        return (
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required
                        handleChange={this.handleChange}
                        label = 'Email'
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);