import React from 'react'
import { shallow } from 'enzyme'

import { CollectionPage } from './collection.component'
import CollectionItem from '../../components/collection-item/collection-item.component'; 

describe('CollectionPage', () => {
    let wrapper;
    let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

    beforeEach(() => {
        const mockCollection = {
            items: mockItems,
            title: 'Test'
        }

        wrapper = shallow(<CollectionPage collection={ mockCollection } />)
    })

    it('should render CollectionPage component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render CollectionItem component as many times as mockItems size', () => {
        expect(wrapper.find(CollectionItem).length).toBe(mockItems.length)
    })

})