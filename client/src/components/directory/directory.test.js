import React from 'react'
import { shallow } from 'enzyme'
import { Directory } from './directory.component'
import MenuItem from '../menu-item/menu-item.component';

describe ('Directory component', () => {
    const mockSections = [ { id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6}, { id: 7} ]
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Directory sections= { mockSections }/>)
    })

    it('should render Directory component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render MenuItem as many times as sections', () => {
        expect(wrapper.find(MenuItem).length).toEqual(mockSections.length)
    })
})