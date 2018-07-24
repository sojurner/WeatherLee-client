import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import App from './App';
// import localStorage from './setupTests'

import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App', () => {
    let shallowWrapper;
    let mountWrapper;
    

    beforeEach( () => {
        // localStorage.clear();
        // localStorage.setItem('Location', 'denver, co')
        shallowWrapper = shallow(<App />);
        mountWrapper = mount(<App />)
    })

    it('shall exist', () => {
      expect(shallowWrapper).toBeDefined();
      expect(mountWrapper).toBeDefined();
    })

    it('shall have a default state with a an empty string of location', () => {
      expect(shallowWrapper.state().userLocation).toEqual('')
    })

    it('shall have a default state with an empty object of currentWeather', () => {
      expect(shallowWrapper.state().currentWeather).toEqual({})
    })

    it('shall have a default state with empty arrays for sevenHourForecast and tenDayForecast', () => {
      expect(shallowWrapper.state().sevenHourForecast).toEqual([])
      expect(shallowWrapper.state().tenDayForecast).toEqual([])
    })

    it('shall have a default state of true for currentWeatherClicked', () => {
      expect(shallowWrapper.state().currentWeatherClicked).toEqual(true)
    })

    it('shall have a default state of false for tenDayClicked, sevenHourClicked, searched, and error', () => {
      expect(shallowWrapper.state().sevenHourClicked).toEqual(false)
      expect(shallowWrapper.state().tenDayClicked).toEqual(false)
      expect(shallowWrapper.state().searched).toEqual(false)
      expect(shallowWrapper.state().error).toEqual(false)
    })

    it('shall render Welcome, Search', () => {
      expect(shallowWrapper.find('Welcome').length).toEqual(1)
      expect(shallowWrapper.find('Search').length).toEqual(1)
      expect(wrapper.find('CurrentWeatherTab').length).toEqual(1)
      expect(wrapper.find('SevenHourTab').length).toEqual(1)
      expect(wrapper.find('TenDayTab').length).toEqual(1)

    })

    it,('should retrieve data from localStorage on mount', () => {
      expect(mountWrapper.state().currentWeather).toEqual(currWeather)
    })

    it('shall be able to change the userLocation', () => {
      shallowWrapper.instance().setLocation(90701)
      expect(shallowWrapper.state().userLocation).toEqual(90701)
    })

    // it('shall be able to render ', () => {
    //  console.log(wrapper.props())
    //   wrapper.instance()
    // })
    
    // it.skip('shall be able to make a fetch call', async () => {
     
    //     return jest.fn().mockImplementation(() =>
    //       Promise.resolve({
    //         ok: true,
    //         json: () => data
    //       })
    //     );
    //   })
      
//     const person = await fetchPerson('whatever id');
//     expect(person).toEqual(someJson);
//     expect(fetch).toHaveBeenCalledTimes(1);

    


    it('shall be able to handle a click event', () => {
      expect(shallowWrapper.state().currentWeatherClicked).toEqual(true)
      expect(shallowWrapper.state().sevenHourClicked).toEqual(false)
      expect(shallowwWrapper.state().tenDayClicked).toEqual(false)
      
      wrapper.instance().changeWeatherClicked(false, true, false)
      
      expect(shallowWrapper.state().currentWeatherClicked).toEqual(false)
      expect(shallowWrapper.state().sevenHourClicked).toEqual(true)
      expect(shallowWrapper.state().tenDayClicked).toEqual(false)
    })
  })