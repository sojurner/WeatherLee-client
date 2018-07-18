
const
//Current Forecast


const currDay = data.forecast.simpleforecast.forecastday.find(currDay =>  currDay.period === 1)

const currDayObj = { location: data.current_observation.display_location.full, current: data.current_observation.temp_f + '°F', high: currDay.high.fahrenheit + '°F', low: currDay.low.fahrenheit + '°F', conditions: currDay.conditions, icon: currDay.icon_url}

// currDayObj

// //7 Hour forecast
const sevenHourForecast = data.hourly_forecast.filter(obj => Object.values(obj)[0]).reduce((sevenHour, hour, i) => {
  if(i < 8){
    sevenHour.push({ 'time': hour.FCTTIME.civil, 'temp': hour.temp.english + '°F', 'condition': hour.condition, icon_url: hour.icon_url })
  }
  return sevenHour
}, [])

// sevenHourForecast

// 10 Day forecast
const tenDay = data.forecast.simpleforecast.forecastday.map(obj => {
  return {day: obj.date.weekday, 'date': obj.date.month +'/'+ obj.date.day + '/' + obj.date.year , 'high': obj.high.fahrenheit + '°F', 'low': obj.low.fahrenheit + '°F', 'icon': obj.icon_url}
})

// tenDay

export