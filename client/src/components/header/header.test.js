import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './header.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

describe ('Header component', () => {
    const mockCurrentUser = {
        id: 123,
        displayName: 'Maria',
        email: 'maria@testmail.com'
    }
    const mockHidden = true
    let mockSignOutStart
    let wrapper

    beforeEach(() => {
        mockSignOutStart = jest.fn()
        const mockProps = {
            currentUser: mockCurrentUser,
            hidden: mockHidden,
            signOutStart: mockSignOutStart
        }

        wrapper = shallow(<Header { ...mockProps }/>)
    })

    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render OptionalLink for sign out', () => {
        expect(wrapper.find('OptionLink').at(2).text()).toEqual('SIGN OUT')
    })

    it('should trigger signOutStart when sign out option in clicked', () => {
        wrapper.find('OptionLink').at(2).simulate('click')
        expect(mockSignOutStart).toHaveBeenCalled()
    })

    it('should not render CartDropdown', () => {
        expect(wrapper.exists(CartDropdown)).toBe(false)
    })

    it('should render OptionalLink for sign in', () => {
        const mockProps2 = {
            currentUser: null,
            hidden: mockHidden,
            signOutStart: mockSignOutStart
        }

        const wrapper2 = shallow(<Header { ...mockProps2 }/>)

        expect(wrapper2.find('OptionLink').at(2).text()).toEqual('SIGN IN')
    })

    it('should render CartDropdown', () => {
        const mockProps3 = {
            currentUser: mockCurrentUser,
            hidden: false,
            signOutStart: mockSignOutStart
        }

        const wrapper3 = shallow(<Header { ...mockProps3 }/>)

        expect(wrapper3.exists(CartDropdown)).toBe(true)
    })
})