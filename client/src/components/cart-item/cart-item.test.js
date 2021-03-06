import React from 'react'
import { shallow } from 'enzyme'
import { CartItem } from './cart-item.component'

describe ('CartItem component', () => {
    let wrapper

    beforeEach(() => {
        const mockProps = {
            item: {
                imageUrl: 'www.test.com',
                price: 100,
                name: 'cool hat',
                quantity: 1
            }
        }
        wrapper = shallow(<CartItem {...mockProps}/>)
    })

    it('should render CartItem component', () => {
        expect(wrapper).toMatchSnapshot();
    })
})