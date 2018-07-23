import React from 'react';
import { shallow, mount } from 'enzyme';

import { Card } from './Card'

describe('Card', () =>{
    let sevenHourWrapper;
    let tenDayWrapper;
    let sevenHourData = 
    { key: 1,
    time: '12:00 PM',
    temp: '47°F',
    condition: 'Partly Cloudy',
    icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' }
    

    let tenDayData = 
        {
        key: 1, 
        day: 'Wednesday',
        date: '12/20/2017',
        high: '51°F',
        low: '32°F',
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' 
        }

    beforeEach(() => {
        sevenHourWrapper = mount(<Card
            key={sevenHourData.key}
            condition={sevenHourData.condition}
            time={sevenHourData.time}
            temp={sevenHourData.temp}
            icon_url={sevenHourData.icon_url}    
        />)
        
        tenDayWrapper = mount(<Card 
            key={tenDayData.key}
            day={tenDayData.day}
            date={tenDayData.high}
            high={tenDayData.low}
            icon={tenDayData.icon}
        />)
    })

    it('should exist', () => {
        expect(sevenHourWrapper).toBeDefined();
        expect(tenDayWrapper).toBeDefined();
    })

    it('should create seven hour and ten day cards', () => {
        expect(sevenHourWrapper.find('p').length).toEqual(3)
        expect(tenDayWrapper.find('p').length).toEqual(4)
    })
})