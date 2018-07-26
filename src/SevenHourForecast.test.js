import React from 'react';
import { shallow, mount } from 'enzyme';
import { sevenHour } from './DataScrape'
import data from './MockData'
import { SevenHourForecast } from './SevenHourForecast'

describe('SevenHourForecast', () => {
	let shallowWrapper;
	let mountWrapper;
	let childArray;
	let sevenHourData = sevenHour(data)
		
	beforeEach( () => {
		shallowWrapper = shallow(<SevenHourForecast 
			sevenHourForecast={sevenHourData}
			/>);
	
			mountWrapper = mount(<SevenHourForecast 
				sevenHourForecast={sevenHourData}
			/>);
		})

	it('shall exist', () => {
		expect(mountWrapper).toBeDefined()
		expect(shallowWrapper).toBeDefined()
	})

	it('shall create seven cards by hour', () => {
		expect(shallowWrapper.props().children.length).toEqual(8)
		expect(mountWrapper.find('div').length).toEqual(9)
	})

	it('shall create cards with unique keys', () => {
		childArray = shallowWrapper.props().children.map(child => {
			return { key: child.key } })

		expect(childArray).toEqual([
			{ key: '0' },
			{ key: '1' },
			{ key: '2' },
			{ key: '3' },
			{ key: '4' },
			{ key: '5' },
			{ key: '6' },
			{ key: '7' } 
		])
	})

	it('shall create cards with time property', () => {
	
		childArray = shallowWrapper.props().children.map(child => { 
			return { time: child.props.time } })

		expect(childArray).toEqual([
			{time: "12:00 PM"}, 
			{time: "1:00 PM"}, 
			{time: "2:00 PM"}, 
			{time: "3:00 PM"}, 
			{time: "4:00 PM"}, 
			{time: "5:00 PM"}, 
			{time: "6:00 PM"},
			{time: "7:00 PM"}	
		])
	})

	it('shall create cards with temp property', () => {
		
		childArray = shallowWrapper.props().children.map(child => { 
			return { temp: child.props.temp } })
		
		expect(childArray).toEqual([ 
			{ temp: '47°F' },
			{ temp: '49°F' },
			{ temp: '49°F' },
			{ temp: '51°F' },
			{ temp: '50°F' },
			{ temp: '48°F' },
			{ temp: '45°F' },
			{ temp: '43°F' } 
		])
	})

	it('shall create cards with condition property', () => {
		
		childArray = shallowWrapper.props().children.map(child => { 
			return { condition: child.props.condition } })

		expect(childArray).toEqual([ 
			{ condition: 'Partly Cloudy' },
			{ condition: 'Partly Cloudy' },
			{ condition: 'Partly Cloudy' },
			{ condition: 'Clear' },
			{ condition: 'Clear' },
			{ condition: 'Clear' },
			{ condition: 'Clear' },
			{ condition: 'Clear' } 
		])
	})

	it('shall create cards with link to icon property', () => {
		
		childArray = shallowWrapper.props().children.map(child => { 
			return { icon: child.props.icon_url } })

		expect(childArray).toEqual([
			{"icon": "http://icons.wxug.com/i/c/k/partlycloudy.gif"}, 
			{"icon": "http://icons.wxug.com/i/c/k/partlycloudy.gif"}, 
			{"icon": "http://icons.wxug.com/i/c/k/partlycloudy.gif"}, 
			{"icon": "http://icons.wxug.com/i/c/k/clear.gif"}, 
			{"icon": "http://icons.wxug.com/i/c/k/clear.gif"}, 
			{"icon": "http://icons.wxug.com/i/c/k/clear.gif"}, 
			{"icon": "http://icons.wxug.com/i/c/k/nt_clear.gif"}, 
			{"icon": "http://icons.wxug.com/i/c/k/nt_clear.gif"}
		])
	})
})