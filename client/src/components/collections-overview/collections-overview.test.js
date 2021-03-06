import React from 'react'
import { shallow } from 'enzyme'
import { CollectionsOverview } from './collections-overview.component'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

describe ('CollectionsOverview component', () => {
    const mockCollections = [ { id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6}, { id: 7} ]
    let wrapper

    beforeEach(() => {
        const mockProps = {
            collections: mockCollections
        }
        wrapper = shallow(<CollectionsOverview {...mockProps}/>)
    })

    it('should render CollectionsOverview component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render CollectionItem as many times as collections', () => {
        expect(wrapper.find(CollectionPreview).length).toEqual(mockCollections.length)
    })
})