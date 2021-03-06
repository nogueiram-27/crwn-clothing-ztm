import React from 'react'
import { shallow } from 'enzyme'
import { CartDropdown } from './cart-dropdown.component'
import { toogleCartHidden, checkoutCart } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';

describe ('CartDropdown component', () => {
    let wrapper
    let mockHistory
    let mockDispatch
    const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }]

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        }

        mockDispatch = jest.fn()

        const mockProps = {
            cartItems:  mockCartItems,
            history: mockHistory,
            dispatch: mockDispatch
        }

        wrapper = shallow(<CartDropdown { ...mockProps }/>)
    })

    it('should render CartDropdown component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should trigger actions when Checkout button is clicked', () => {
        wrapper.find('ButtonContainer').simulate('click')

        expect(mockHistory.push).toHaveBeenCalled()
        expect(mockDispatch).toHaveBeenCalledWith(toogleCartHidden())
        expect(mockDispatch).toHaveBeenCalledWith(checkoutCart(mockCartItems))
    })

    it('should render CartItem component as many times as items in cartItems', () => {
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length)
    })

    it('should render empty message if cartItems is empty', () => {
        const mockProps = {
            cartItems:  [],
            history: mockHistory,
            dispatch: mockDispatch
        }

        expect(shallow(<CartDropdown { ...mockProps }/>).exists('EmptyMessageContainer')).toBe(true)
    })
})