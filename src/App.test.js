import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import App from './App';
// import localStorage from './setupTests'

import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App', () => {
    let wrapper;

    window.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn()
    };
  
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        groceries: mockGroceries
      })
    }));

    beforeEach( () => {
        // localStorage.clear();
        wrapper = shallow(<App />);
    })

    it('shall exist', () => {
        
      expect(wrapper).toBeDefined();
    })

    it('shall have a default state with a an empty string of location', () => {
      expect(wrapper.state().userLocation).toEqual('')
    })

    it('shall have a default state with an empty object of currentWeather', () => {
      expect(wrapper.state().currentWeather).toEqual({})
    })

    it('shall have a default state with empty arrays for sevenHourForecast and tenDayForecast', () => {
      expect(wrapper.state().sevenHourForecast).toEqual([])
      expect(wrapper.state().tenDayForecast).toEqual([])
    })

    it('shall have a default state of true for currentWeatherClicked', () => {
      expect(wrapper.state().currentWeatherClicked).toEqual(true)
    })

    it('shall have a default state of false for tenDayClicked, sevenHourClicked, searched, and error', () => {
      expect(wrapper.state().sevenHourClicked).toEqual(false)
      expect(wrapper.state().tenDayClicked).toEqual(false)
      expect(wrapper.state().searched).toEqual(false)
      expect(wrapper.state().error).toEqual(false)
    })

    it('shall render Welcome, Search', () => {
      expect(wrapper.find('Welcome').length).toEqual(1)
      expect(wrapper.find('Search').length).toEqual(1)
      // expect(wrapper.find('CurrentWeatherTab').length).toEqual(1)
      // expect(wrapper.find('SevenHourTab').length).toEqual(1)
      // expect(wrapper.find('TenDayTab').length).toEqual(1)

    })

    it.skip('should retrieve data from localStorage on mount', () => {
      const currWeather = { 
        time: 'Last Updated on December 20, 11:27 AM EST',
        location: 'Louisville, KY',
        current: '46°F',
        high: '51°F',
        low: '32°F',
        conditions: 'Partly Cloudy',
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' 
      }

      localStorage.setItem('location', JSON.stringify(currWeather));
      // const loStorage = localStorage.getItem(JSON.parse('currentWeather'))
      console.log(localStorage.getItem('location'))
      wrapper = mount(<App />)
      
      // wrapper.setState({ currentWeather: loStorage })
      expect(wrapper.state().currentWeather).toEqual(currWeather)
    })

    it('shall be able to change the userLocation', () => {
      wrapper.instance().setLocation(90701)
      expect(wrapper.state().userLocation).toEqual(90701)
    })
    
    it.skip('shall be able to make a fetch call', async () => {

      // window.localStorage ={
      //   getItem = jest.fn()
      // }
     
        return jest.fn().mockImplementation(() =>
          Promise.resolve({
            ok: true,
            json: () => data
          })
        );
      
      
//     const person = await fetchPerson('whatever id');
//     expect(person).toEqual(someJson);
//     expect(fetch).toHaveBeenCalledTimes(1);

    


    it('shall be able to handle a click event', () => {
      expect(wrapper.state().currentWeatherClicked).toEqual(true)
      expect(wrapper.state().sevenHourClicked).toEqual(false)
      expect(wrapper.state().tenDayClicked).toEqual(false)
      
      wrapper.instance().changeWeatherClicked(false, true, false)
      
      expect(wrapper.state().currentWeatherClicked).toEqual(false)
      expect(wrapper.state().sevenHourClicked).toEqual(true)
      expect(wrapper.state().tenDayClicked).toEqual(false)
    })
  })



    



})