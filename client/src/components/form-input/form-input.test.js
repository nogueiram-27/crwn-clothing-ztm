import React from 'react'
import { shallow } from 'enzyme'
import { FormInput } from './form-input.component'

describe ('FormInput component', () => {
    const mockLabel = 'email'
    const mockValue = 'maria@testmail.com'
    let mockHandleChange
    let wrapper

    beforeEach(() => {
        mockHandleChange = jest.fn()
        const mockProps = {
            label: mockLabel,
            value: mockValue,
            handleChange: mockHandleChange
        }

        wrapper = shallow(<FormInput { ...mockProps }/>)
    })

    it('should render FormInput component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should trigger handle change when label changes', () => {
        wrapper.find('FormInputContainer').simulate('change')

        expect(mockHandleChange).toHaveBeenCalled()
    })

    it('should render LabelContainer', () => {
        expect(wrapper.exists('LabelContainer')).toBe(true)
    })

    it('should have class shrink', () => {
        expect(wrapper.find('LabelContainer').hasClass('shrink')).toBe(true)
    })

    it('should not have class shrink', () => {
        const mockProps2 = {
            label: mockLabel,
            value: '',
            handleChange: mockHandleChange
        }

        const wrapper2 = shallow(<FormInput { ...mockProps2 }/>)

        expect(wrapper2.find('LabelContainer').hasClass('shrink')).toBe(false)
    })

    it('should not render LabelContainer', () => {
        const mockProps3 = {
            label: '',
            value: mockValue,
            handleChange: mockHandleChange
        }

        const wrapper3 = shallow(<FormInput { ...mockProps3 }/>)
        expect(wrapper3.exists('LabelContainer')).toBe(false)
    })
})