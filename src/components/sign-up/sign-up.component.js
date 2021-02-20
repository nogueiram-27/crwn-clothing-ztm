import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {

    const [credentials, setCredentials] = useState ({ displayName: '', email: '', password: '', confirmPassword: '' })
    const { displayName, email, password, confirmPassword } = credentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        signUpStart(displayName, email, password, confirmPassword)
    }

    const handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        setCredentials({...credentials, [name] : value });
    }

    return (
        <SignUpContainer className ='sign-up'>
            <TitleContainer >I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value ={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                    />
                <FormInput
                    type='email'
                    name='email'
                    value ={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value ={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value ={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({ displayName, email, password, confirmPassword }))
})

export default connect(null, mapDispatchToProps)(SignUp);
