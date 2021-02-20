import React from 'react';
import { connect } from 'react-redux';
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signUpStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        signUpStart(displayName, email, password, confirmPassword)
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer className ='sign-up'>
                <TitleContainer >I do not have an account</TitleContainer>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value ={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value ={email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value ={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value ={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({ displayName, email, password, confirmPassword }))
})

export default connect(null, mapDispatchToProps)(SignUp);
