import React from 'react'
import { shallow } from 'enzyme'
import { SignUp } from './sign-up.component'

describe ('SignUp component', () => {
    let mockSignUpStart
    let wrapper

    beforeEach(() => {
        mockSignUpStart = jest.fn()
        const mockProps = {
            signUpStart: mockSignUpStart
        }
        wrapper = shallow(<SignUp {...mockProps}/>)
    })

    it('should render SignUp component', () => {
        expect(wrapper).toMatchSnapshot();
    })
})