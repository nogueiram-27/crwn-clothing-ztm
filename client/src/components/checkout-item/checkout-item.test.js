import React from 'react'
import { shallow } from 'enzyme'
import { CheckoutItem } from './checkout-item.component'

describe ('CheckoutItem component', () => {
    let wrapper
    let mockAddItem
    let mockRemoveItem
    let mockClearItem
    let mockUpdateCartItems
    const mockCartItem = {
            imageUrl: 'www.test.com',
            price: 100,
            name: 'cool hat',
            quantity: 1
        }

    beforeEach(() => {
        mockAddItem = jest.fn()
        mockRemoveItem = jest.fn()
        mockClearItem = jest.fn()
        mockUpdateCartItems = jest.fn()

        const mockProps = {
            cartItem: mockCartItem,
            clearItem: mockClearItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem,
            updateCartItems: mockUpdateCartItems
        }
        wrapper = shallow(<CheckoutItem { ...mockProps }/>)
    })

    it('should render CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should trigger actions when left arrow is clicked', () => {
        wrapper.find('QuantityContainer').childAt(0).simulate('click')

        expect(mockRemoveItem).toHaveBeenCalledWith(mockCartItem)
        expect(mockUpdateCartItems).toHaveBeenCalled()
    })

    it('should trigger actions when right arrow is clicked', () => {
        wrapper.find('QuantityContainer').childAt(2).simulate('click')

        expect(mockAddItem).toHaveBeenCalledWith(mockCartItem)
        expect(mockUpdateCartItems).toHaveBeenCalled()
    })

    it('should trigger actions when clear icon is clicked', () => {
        wrapper.find('RemoveButtonContainer').simulate('click')

        expect(mockClearItem).toHaveBeenCalledWith(mockCartItem)
        expect(mockUpdateCartItems).toHaveBeenCalled()
    })
})