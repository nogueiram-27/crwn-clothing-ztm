import React from 'react'
import { shallow } from 'enzyme'
import WithSpinner from './with-spinner.component'
import Spinner from '../spinner/spinner.component'

describe ('WithSpinner component', () => {
    const MockComponent = () => {
        return <div>'Test</div>
    }
    const MockWrappedComponent = WithSpinner(MockComponent)

    it('should render Spinner component', () => {
        const wrapper = shallow(<MockWrappedComponent isLoading={ true }/>)
        expect(wrapper.exists(Spinner)).toBe(true);
    })

    it('should not render WrappedComponent component', () => {
        const wrapper = shallow(<MockWrappedComponent isLoading={ true }/>)
        expect(wrapper.exists(MockComponent)).toBe(false);
    })

    it('should not render Spinner component', () => {
        const wrapper = shallow(<MockWrappedComponent isLoading={ false }/>)
        expect(wrapper.exists(Spinner)).toBe(false);
    })

    it('should render WrappedComponent component', () => {
        const wrapper = shallow(<MockWrappedComponent isLoading={ false }/>)
        expect(wrapper.exists(MockComponent)).toBe(true);
    })
})