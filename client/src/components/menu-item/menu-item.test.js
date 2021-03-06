import React from 'react'
import { shallow } from 'enzyme'
import { MenuItem } from './menu-item.component'

describe ('MenuItem component', () => {
    const mockTitle = 'hats'
    const mockImageUrl = 'www.test.com'
    const mockSize = 'large'
    const mockLinkUrl = 'shop/hats'
    const mockMatch = {
        url: '/'
    }
    let mockHistory
    let wrapper

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        }
        const mockProps = {
            title: mockTitle,
            imageUrl: mockImageUrl,
            size: mockSize,
            history: mockHistory,
            linkUrl: mockLinkUrl,
            match: mockMatch
        }
        wrapper = shallow(<MenuItem {...mockProps}/>)
    })

    it('should render MenuItem component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('trigger actions when click in the menu item', () => {
        wrapper.find('MenuItemContainer').simulate('click')
        expect(mockHistory.push).toHaveBeenCalledWith('/shop/hats')
    })

    it('should pass size to MenuItemContainer as the prop size', () => {
        expect(wrapper.find('MenuItemContainer').prop('size')).toBe(mockSize);
      });
    
      it('should pass imageUrl to BackgroundImagemContainer as the prop imageUrl', () => {
        expect(wrapper.find('BackgroundImagemContainer').prop('imageUrl')).toBe(mockImageUrl);
      });
})