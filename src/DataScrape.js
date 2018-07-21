export const currWeather = data => {
	const currDay = data.forecast.simpleforecast.forecastday.find(currDay =>  currDay.period === 1)
	const currDayObj = { time: data.current_observation.observation_time, 
						location: data.current_observation.display_location.full, 
						current: data.current_observation.temp_f + '°F', 
						high: currDay.high.fahrenheit + '°F', 
						low: currDay.low.fahrenheit + '°F', 
						conditions: currDay.conditions, 
						icon: currDay.icon_url}
	return currDayObj
}


export const sevenHour = response => {
	return response.hourly_forecast.filter(obj => Object.values(obj)).reduce((sevenHour, hour, i) => {
  	if(i < 8){
    	sevenHour.push({ 
    		'time': hour.FCTTIME.civil, 
    		'temp': Math.floor(hour.temp.english) + '°F', 
    		'condition': hour.condition, 
    		'icon_url': hour.icon_url 
    	})
  	}
  return sevenHour
	}, [])
}

export const tenDay = data => {
	return data.forecast.simpleforecast.forecastday.map(obj => {
	  return {
	  	'day': obj.date.weekday, 
	  	'date': obj.date.month +'/'+ obj.date.day + '/' + obj.date.year , 
	  	'high': obj.high.fahrenheit + '°F', 
	  	'low': obj.low.fahrenheit + '°F', 
	  	'icon': obj.icon_url
	  }
	})
}