import { sevenHour, tenDay, currWeather } from "./DataScrape";
import data from "./MockData";

describe("SevenHourForecast", () => {
  it("shall take data and filter to return current information", () => {
    let currWeatherScrape = currWeather(data);
    expect(currWeatherScrape).toEqual({
      time: "Last Updated on December 20, 11:27 AM EST",
      location: "Louisville, KY",
      current: "46°F",
      high: "51°F",
      low: "32°F",
      conditions: "Partly Cloudy",
      icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif"
    });
  });

  it("shall take data and filter to return seven hour information", () => {
    let sevenHourScrape = sevenHour(data);
    expect(sevenHourScrape).toEqual([
      {
        time: "12:00 PM",
        temp: "47°F",
        condition: "Partly Cloudy",
        icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif"
      },
      {
        time: "1:00 PM",
        temp: "49°F",
        condition: "Partly Cloudy",
        icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif"
      },
      {
        time: "2:00 PM",
        temp: "49°F",
        condition: "Partly Cloudy",
        icon_url: "http://icons.wxug.com/i/c/k/partlycloudy.gif"
      },
      {
        time: "3:00 PM",
        temp: "51°F",
        condition: "Clear",
        icon_url: "http://icons.wxug.com/i/c/k/clear.gif"
      },
      {
        time: "4:00 PM",
        temp: "50°F",
        condition: "Clear",
        icon_url: "http://icons.wxug.com/i/c/k/clear.gif"
      },
      {
        time: "5:00 PM",
        temp: "48°F",
        condition: "Clear",
        icon_url: "http://icons.wxug.com/i/c/k/clear.gif"
      },
      {
        time: "6:00 PM",
        temp: "45°F",
        condition: "Clear",
        icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif"
      },
      {
        time: "7:00 PM",
        temp: "43°F",
        condition: "Clear",
        icon_url: "http://icons.wxug.com/i/c/k/nt_clear.gif"
      }
    ]);
  });

  it("shall take data and filter to return ten day information", () => {
    let tenDayScrape = tenDay(data);
    expect(tenDayScrape).toEqual([
      {
        day: "Wednesday",
        date: "12/20/2017",
        high: "51°F",
        low: "32°F",
        icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif"
      },
      {
        day: "Thursday",
        date: "12/21/2017",
        high: "55°F",
        low: "51°F",
        icon: "http://icons.wxug.com/i/c/k/clear.gif"
      },
      {
        day: "Friday",
        date: "12/22/2017",
        high: "57°F",
        low: "44°F",
        icon: "http://icons.wxug.com/i/c/k/chancerain.gif"
      },
      {
        day: "Saturday",
        date: "12/23/2017",
        high: "47°F",
        low: "30°F",
        icon: "http://icons.wxug.com/i/c/k/rain.gif"
      },
      {
        day: "Sunday",
        date: "12/24/2017",
        high: "37°F",
        low: "22°F",
        icon: "http://icons.wxug.com/i/c/k/cloudy.gif"
      },
      {
        day: "Monday",
        date: "12/25/2017",
        high: "35°F",
        low: "19°F",
        icon: "http://icons.wxug.com/i/c/k/clear.gif"
      },
      {
        day: "Tuesday",
        date: "12/26/2017",
        high: "32°F",
        low: "20°F",
        icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif"
      },
      {
        day: "Wednesday",
        date: "12/27/2017",
        high: "33°F",
        low: "26°F",
        icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif"
      },
      {
        day: "Thursday",
        date: "12/28/2017",
        high: "35°F",
        low: "23°F",
        icon: "http://icons.wxug.com/i/c/k/snow.gif"
      },
      {
        day: "Friday",
        date: "12/29/2017",
        high: "31°F",
        low: "18°F",
        icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif"
      }
    ]);
  });
});
