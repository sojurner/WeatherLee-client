import React from 'react'

import { shallow, mount } from 'enzyme';

import Search from './Search'

import App from './App'
import { SevenHourTab } from './SevenHourTab';

describe('SevenHourTab component', ()=> {
    let shallowWrapper;
    let mountWrapper
    beforeEach( () => {
        shallowWrapper = shallow(<SevenHourTab />);
        mountWrapper = mount(<SevenHourTab />)
    })

    it('should exist', () => {
        expect(shallowWrapper).toBeDefined()
        expect(mountWrapper).toBeDefined()
    })

    it('should have default state properties for sevenHourClicked, tenDayClicked, currentWeather', () => {
        expect(shallowWrapper.state().sevenHourClicked).toEqual(true)
        expect(shallowWrapper.state().tenDayClicked).toEqual(false)
        expect(shallowWrapper.state().currentWeather).toEqual(false)
    })

    it('should create a button', () => {
        expect(shallowWrapper.find('button').length).toEqual(1)
    })

    it('should handle a click event', () => {
        const mockCallBack = jest.fn();
        let wrapperTwo = shallow(<SevenHourTab changeWeatherClicked={ () => {mockCallBack() } } />)
        let searchButton = wrapperTwo.find('button');
        searchButton.simulate('click');

        expect(mockCallBack).toHaveBeenCalled()
    })
})