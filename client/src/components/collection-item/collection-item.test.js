import React from 'react'
import { shallow } from 'enzyme'
import { CollectionItem } from './collection-item.component'

describe ('CollectionItem component', () => {
    let wrapper
    let mockAddItem
    const mockCartItem = {
            imageUrl: 'www.test.com',
            price: 100,
            name: 'cool hat',
        }

    beforeEach(() => {
        mockAddItem = jest.fn()

        const mockProps = {
            item: mockCartItem,
            addItem: mockAddItem,
        }
        wrapper = shallow(<CollectionItem { ...mockProps }/>)
    })

    it('should render CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should trigger actions when add button is clicked', () => {
        wrapper.find('AddButtonContainer').simulate('click')

        expect(mockAddItem).toHaveBeenCalledWith(mockCartItem)
    })
})