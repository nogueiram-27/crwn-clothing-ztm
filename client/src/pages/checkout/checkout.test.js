import React from 'react'
import { shallow } from 'enzyme'

import { CheckoutPage } from './checkout.component'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

describe('CheckoutPage', () => {
    let wrapper;
    let mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

    beforeEach(() => {
        const mockProps = {
            cartItems: mockCartItems,
            cartTotal: 100
        }

        wrapper = shallow(<CheckoutPage {...mockProps } />)
    })

    it('should render CheckoutPage component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render CheckoutItem component as many times as mockItems size', () => {
        expect(wrapper.find(CheckoutItem).length).toBe(mockCartItems.length)
    })
})
