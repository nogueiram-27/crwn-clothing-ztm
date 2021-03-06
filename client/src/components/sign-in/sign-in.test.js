import React from 'react'
import { shallow } from 'enzyme'
import { SignIn } from './sign-in.component'

describe ('SignIn component', () => {
    let mockGoogleSignInStart
    let wrapper

    beforeEach(() => {
        mockGoogleSignInStart = jest.fn()
        const mockProps = {
            googleSignInStart: mockGoogleSignInStart
        }
        wrapper = shallow(<SignIn {...mockProps}/>)
    })

    it('should render SignIn component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('trigger google sign in star when sign in with google button is clicked', () => {
        wrapper.find('SignInButtonsContainer').childAt(1).simulate('click')
        expect(mockGoogleSignInStart).toHaveBeenCalledWith()
    })

    it('should pass isGoogleSignIn prop as true', () => {
        expect(wrapper.find('SignInButtonsContainer').childAt(1).prop('isGoogleSignIn')).toBe(true);   
    });
})