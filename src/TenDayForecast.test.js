import React from 'react';
import { shallow, mount } from 'enzyme';
import { tenDay } from './DataScrape'
import data from './MockData'
import { TenDayForecast } from './TenDayForecast'

describe('TenDayForecast', () => {
  let shallowWrapper;
  let mountWrapper;
  let childArray;

  let tenDayData = tenDay(data)

  beforeEach( () => {
    shallowWrapper = shallow(<TenDayForecast 
      tenDayForecast={tenDayData}
    />);

    mountWrapper = mount(<TenDayForecast 
      tenDayForecast={tenDayData}
    />);
  })

  it('shall exist', () => {
    expect(shallowWrapper).toBeDefined()
    expect(mountWrapper).toBeDefined()
  }) 

  it('shall render ten day cards', () => {
    expect(shallowWrapper.props().children.length).toEqual(10)
    expect(mountWrapper.find('div').length).toEqual(11)
  })

  it('shall create ten day cards with unique keys', () => {
    childArray = shallowWrapper.props().children.map(child => {
      return {key: child.key}})

    expect(childArray).toEqual([
      { key: '0' },
      { key: '1' },
      { key: '2' },
      { key: '3' },
      { key: '4' },
      { key: '5' },
      { key: '6' },
      { key: '7' },
      { key: '8' },
      { key: '9' } 
    ])
  })

  it('shall create ten day cards with day', () => {
    childArray = shallowWrapper.props().children.map(child => child.props).map(item => { return { day: item.day} })

    expect(childArray).toEqual([
      { day: 'Wednesday' },
      { day: 'Thursday' },
      { day: 'Friday' },
      { day: 'Saturday' },
      { day: 'Sunday' },
      { day: 'Monday' },
      { day: 'Tuesday' },
      { day: 'Wednesday' },
      { day: 'Thursday' },
      { day: 'Friday' }
    ])
  })

  it('shall create ten day cards with date', () => {
    childArray = shallowWrapper.props().children.map(child => child.props).map(item => { return { date: item.date} })

    expect(childArray).toEqual([
      { date: '12/20/2017' },
      { date: '12/21/2017' },
      { date: '12/22/2017' },
      { date: '12/23/2017' },
      { date: '12/24/2017' },
      { date: '12/25/2017' },
      { date: '12/26/2017' },
      { date: '12/27/2017' },
      { date: '12/28/2017' },
      { date: '12/29/2017' }
    ])
  })

  it('shall create ten day cards with high temp', () => {
    childArray = shallowWrapper.props().children.map(child => child.props).map(item => { return { high: item.high} })

    expect(childArray).toEqual([
      { high: '51°F' },
      { high: '55°F' },
      { high: '57°F' },
      { high: '47°F' },
      { high: '37°F' },
      { high: '35°F' },
      { high: '32°F' },
      { high: '33°F' },
      { high: '35°F' },
      { high: '31°F' },
    ])
  })

  it('shall create ten day cards with low temp', () => {
    childArray = shallowWrapper.props().children.map(child => child.props).map(item => { return { low: item.low} })

    expect(childArray).toEqual([
      { low: '32°F' },
      { low: '51°F' },
      { low: '44°F' },
      { low: '30°F' },
      { low: '22°F' },
      { low: '19°F' },
      { low: '20°F' },
      { low: '26°F' },
      { low: '23°F' },
      { low: '18°F' } 
    ])
  })
  
  it('shall create ten day cards with icons', () => {
    childArray = shallowWrapper.props().children.map(child => child.props).map(item => { return { icon: item.icon} })

    expect(childArray).toEqual([
      { icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/chancerain.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/rain.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/cloudy.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/snow.gif' },
      { icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' }
    ])
  })
})