import React from 'react'
import { shallow } from 'enzyme'
import { CartIcon } from './cart-icon.component'

describe ('CartIcon component', () => {
    let wrapper
    let mockToggleCartHidden

    beforeEach(() => {
        mockToggleCartHidden = jest.fn()
        wrapper = shallow(<CartIcon toogleCartHidden={ mockToggleCartHidden } itemCount = { 4 }/>)
    })

    it('should render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should trigger actions when icon button is clicked', () => {
        wrapper.find('CartIconContainer').simulate('click')

        expect(mockToggleCartHidden).toHaveBeenCalled()
    })
})