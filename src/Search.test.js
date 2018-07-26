import React from 'react'

import { shallow, mount } from 'enzyme';

import Search from './Search'

import App from './App'

describe('Search component', ()=> {
    let wrapper;

    beforeEach( () => {
        wrapper = shallow(<Search />);
    })

    it('shall render an input box and button when Search is rendered', () => {
        expect(wrapper.find('input').length).toEqual(1)
        expect(wrapper.find('button').length).toEqual(1)
    })

    it('should update State when input values are changed', () => {
        let searchInput = wrapper.find('input')

        let event = { target: {value: 'Denver'} };

        searchInput.simulate('change', event)

        expect(wrapper.state().location).toEqual('Denver')
    })

    it('should track event of button click', () => {
        const mockCallBack = jest.fn();

        let wrapperTwo = shallow(< Search setLocation={ () => mockCallBack() } />)
        let inputValue = wrapperTwo.find('input')
        console.log(inputValue)
        let searchButton = wrapperTwo.find('button');

        searchButton.simulate('click');
    
        expect(mockCallBack).toHaveBeenCalled()
    })
})