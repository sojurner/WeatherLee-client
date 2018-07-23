import React from 'react';
import { shallow, mount } from 'enzyme';

import { TenDayForecast } from './TenDayForecast'

describe('TenDayForecast', () => {
  let shallowWrapper;
  let mountWrapper;

  let tenDayData = [ { day: 'Wednesday',
    date: '12/20/2017',
    high: '51°F',
    low: '32°F',
    icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
  { day: 'Thursday',
    date: '12/21/2017',
    high: '55°F',
    low: '51°F',
    icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
  { day: 'Friday',
    date: '12/22/2017',
    high: '57°F',
    low: '44°F',
    icon: 'http://icons.wxug.com/i/c/k/chancerain.gif' },
  { day: 'Saturday',
    date: '12/23/2017',
    high: '47°F',
    low: '30°F',
    icon: 'http://icons.wxug.com/i/c/k/rain.gif' },
  { day: 'Sunday',
    date: '12/24/2017',
    high: '37°F',
    low: '22°F',
    icon: 'http://icons.wxug.com/i/c/k/cloudy.gif' },
  { day: 'Monday',
    date: '12/25/2017',
    high: '35°F',
    low: '19°F',
    icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
  { day: 'Tuesday',
    date: '12/26/2017',
    high: '32°F',
    low: '20°F',
    icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
  { day: 'Wednesday',
    date: '12/27/2017',
    high: '33°F',
    low: '26°F',
    icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
  { day: 'Thursday',
    date: '12/28/2017',
    high: '35°F',
    low: '23°F',
    icon: 'http://icons.wxug.com/i/c/k/snow.gif' }
  ]

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
    expect(shallowWrapper.props().children.length).toEqual(9)
    expect(mountWrapper.find('div').length).toEqual(10)
  })
})