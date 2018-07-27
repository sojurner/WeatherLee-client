import React from "react";
import { mount } from "enzyme";
import data from "./MockData.js";
import { sevenHour, tenDay } from "./DataScrape.js";
import { Card } from "./Card";

describe("Card", () => {
  let sevenHourWrapper;
  let tenDayWrapper;

  beforeEach(() => {
    sevenHourWrapper = mount(
      <Card
        key={sevenHour(data)[0].time}
        condition={sevenHour(data)[0].condition}
        time={sevenHour(data)[0].time}
        temp={sevenHour(data)[0].temp}
        icon_url={sevenHour(data)[0].icon_url}
      />
    );

    tenDayWrapper = mount(
      <Card
        key={tenDay(data)[0].key}
        day={tenDay(data)[0].day}
        date={tenDay(data)[0].date}
        high={tenDay(data)[0].high}
        low={tenDay(data)[0].low}
        icon={tenDay(data)[0].icon}
      />
    );
  });

  it("should exist", () => {
    expect(sevenHourWrapper).toBeDefined();
    expect(tenDayWrapper).toBeDefined();
  });

  it("should create seven hour and ten day cards", () => {
    expect(sevenHourWrapper.props().condition).toEqual("Partly Cloudy");
    expect(sevenHourWrapper.props().time).toEqual("12:00 PM");
    expect(sevenHourWrapper.props().temp).toEqual("47°F");
    expect(sevenHourWrapper.props().icon_url).toEqual(
      "http://icons.wxug.com/i/c/k/partlycloudy.gif"
    );
    expect(sevenHourWrapper.find("p").length).toEqual(3);

    expect(tenDayWrapper.props().day).toEqual("Wednesday");
    expect(tenDayWrapper.props().date).toEqual("12/20/2017");
    expect(tenDayWrapper.props().low).toEqual("32°F");
    expect(tenDayWrapper.props().high).toEqual("51°F");
    expect(tenDayWrapper.props().icon).toEqual(
      "http://icons.wxug.com/i/c/k/partlycloudy.gif"
    );

    expect(tenDayWrapper.find("p").length).toEqual(4);
  });
});
