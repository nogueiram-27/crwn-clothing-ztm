import React from 'react'
import { shallow } from 'enzyme'
import { CollectionPreview } from './collection-preview.component'
import CollectionItem from '../collection-item/collection-item.component'

describe ('CollectionPreview component', () => {
    const mockTitle = 'hats'
    const mockItems = [ { id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6} ]
    const mockRouteName = 'hats'
    const mockMatch = {
        url: '/shop'
    }
    let mockHistory
    let wrapper

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        }
        const mockProps = {
            title: mockTitle,
            items: mockItems,
            match: mockMatch,
            history: mockHistory,
            routeName: mockRouteName
        }
        wrapper = shallow(<CollectionPreview {...mockProps}/>)
    })

    it('should render CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('trigger actions when click in the title', () => {
        wrapper.find('TitleContainer').simulate('click')
        expect(mockHistory.push).toHaveBeenCalledWith('/shop/hats')
    })

    it('should render CollectionItem only 4 times max', () => {
        expect(wrapper.find(CollectionItem).length).toBe(4)
    })
})