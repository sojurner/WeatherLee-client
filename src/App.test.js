import React from 'react';
import { configure, shallow, mount } from 'enzyme'
import App from './App';

import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App', () => {
    let renderedShallowWrapper;
    let unrenderedShallowWrapper;
    let mountWrapper;
    
    beforeEach( () => {
      localStorage.clear();
      localStorage.setItem('Location', 'denver, co' )
      renderedShallowWrapper = shallow(<App />);
      renderedShallowWrapper.setState({searched: true, userLocation: 'denver, co'})
      unrenderedShallowWrapper = shallow(<App />);
      mountWrapper = mount(<App />)
    })

    it('shall exist', () => {
      expect(renderedShallowWrapper).toBeDefined();
      expect(unrenderedShallowWrapper).toBeDefined();
      
      expect(mountWrapper).toBeDefined();
    })

    it('shall have a default state with a an empty string of location', () => {
      expect(unrenderedShallowWrapper.state().userLocation).toEqual('')
    })

    it('shall have a default state with an empty object of currentWeather', () => {
      expect(unrenderedShallowWrapper.state().currentWeather).toEqual({})
    })

    it('shall have a default state with empty arrays for sevenHourForecast and tenDayForecast', () => {
      expect(unrenderedShallowWrapper.state().sevenHourForecast).toEqual([])
      expect(unrenderedShallowWrapper.state().tenDayForecast).toEqual([])
    })

    it('shall have a default state of true for currentWeatherClicked', () => {
      expect(unrenderedShallowWrapper.state().currentWeatherClicked).toEqual(true)
    })

    it('shall have a default state of false for tenDayClicked, sevenHourClicked, searched, and error', () => {
      expect(unrenderedShallowWrapper.state().sevenHourClicked).toEqual(false)
      expect(unrenderedShallowWrapper.state().tenDayClicked).toEqual(false)
      expect(unrenderedShallowWrapper.state().searched).toEqual(false)
      expect(unrenderedShallowWrapper.state().error).toEqual(false)
    })

    it('shall render Welcome, Search by default', () => {
      expect(unrenderedShallowWrapper.find('Welcome').length).toEqual(1)
      expect(unrenderedShallowWrapper.find('Search').length).toEqual(1)
    })

    it('shall render Welcome, Search, SevenHourTab and TenDayTab', () => {

      expect(renderedShallowWrapper.find('div').length).toEqual(7)
      expect(renderedShallowWrapper.find('SevenHourTab').length).toEqual(1)
      expect(renderedShallowWrapper.find('TenDayTab').length).toEqual(1)
      expect(renderedShallowWrapper.find('Search').length).toEqual(1)
    })

    it.skip('shall render SevenHourForecast and TenDayForecast on click', () => {
      expect(renderedShallowWrapper.find('SevenHourForecast').length).toEqual(0)
      renderedShallowWrapper.instance().changeWeatherClicked(true, true, true)
      renderedShallowWrapper.render()
      // otherWrapper.props.children.map(ele => console.log(ele.props))
      expect(renderedShallowWrapper.find('SevenHourForecast').length).toEqual(1)
      expect(renderedShallowWrapper.find('TenDayTab').length).toEqual(1)
    })

    it('should retrieve data from localStorage on mount', () => {
      let localLocation = localStorage.getItem("Location")
      let locationWrapper = mount(<App userLocation={localLocation}/>)
      expect(locationWrapper.props().userLocation).toEqual('denver, co')
    })

    it('shall be able to change the userLocation', () => {
      renderedShallowWrapper.instance().setLocation(90701)
      expect(renderedShallowWrapper.state().userLocation).toEqual(90701)
    })
    
    it('shall be able to handle a click event', () => {
      expect(unrenderedShallowWrapper.state().currentWeatherClicked).toEqual(true)
      expect(unrenderedShallowWrapper.state().sevenHourClicked).toEqual(false)
      expect(unrenderedShallowWrapper.state().tenDayClicked).toEqual(false)
      
      unrenderedShallowWrapper.instance().changeWeatherClicked(false, true, false)
      
      expect(unrenderedShallowWrapper.state().currentWeatherClicked).toEqual(false)
      expect(unrenderedShallowWrapper.state().sevenHourClicked).toEqual(true)
      expect(unrenderedShallowWrapper.state().tenDayClicked).toEqual(false)
    })
  })