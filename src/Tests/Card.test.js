import React from "react";
import { mount } from "enzyme";
import data from "../MockData";
import { sevenHour, tenDay } from "../DataScrape";
import { Card } from "../Card";

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
    expect(sevenHourWrapper.find("p").length).toEqual(3);

    expect(
      sevenHourWrapper
        .find("p")
        .first()
        .text()
    ).toEqual("12:00 PM");
    expect(
      sevenHourWrapper
        .find("p")
        .at(1)
        .text()
    ).toEqual("47°F");
    expect(
      sevenHourWrapper
        .find("p")
        .at(2)
        .text()
    ).toEqual("Partly Cloudy");

    expect(tenDayWrapper.find("p").length).toEqual(4);

    expect(
      tenDayWrapper
        .find("p")
        .first()
        .text()
    ).toEqual("Wednesday");
    expect(
      tenDayWrapper
        .find("p")
        .at(1)
        .text()
    ).toEqual("12/20/2017");
    expect(
      tenDayWrapper
        .find("p")
        .at(2)
        .text()
    ).toEqual("51°F");
    expect(
      tenDayWrapper
        .find("p")
        .at(3)
        .text()
    ).toEqual("32°F");
    expect(tenDayWrapper.props().icon).toEqual(
      "http://icons.wxug.com/i/c/k/partlycloudy.gif"
    );
  });
});
