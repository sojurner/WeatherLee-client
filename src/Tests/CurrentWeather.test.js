import React from "react";
import { shallow, mount } from "enzyme";

import { currWeather } from "../DataScrape";
import data from "../MockData";
import { CurrentWeather } from "../CurrentWeather";

describe("SevenHourForecast", () => {
  let shallowWrapper;
  let mountWrapper;
  let childObject;
  let currentWeatherObject = currWeather(data);

  beforeEach(() => {
    shallowWrapper = shallow(
      <CurrentWeather currentWeather={currentWeatherObject} />
    );

    mountWrapper = mount(
      <CurrentWeather currentWeather={currentWeatherObject} />
    );
  });

  it("shall exist", () => {
    expect(shallowWrapper).toBeDefined();
    expect(mountWrapper).toBeDefined();
  });

  it("shall give each element its own class", () => {
    childObject = shallowWrapper
      .props()
      .children.map(item => item.props)
      .map(ele => {
        return { className: ele.className };
      });

    expect(childObject).toEqual([
      { className: "current-location" },
      { className: "current-time" },
      { className: "current-temp" },
      { className: "current-high" },
      { className: "current-low" },
      { className: "current-conditions" },
      { className: "current-icon" }
    ]);
  });

  it("shall have an element displaying the current location", () => {
    childObject = shallowWrapper
      .props()
      .children.map(item => item.props)
      .map(ele => ele.children)[0];

    expect(childObject).toEqual("Louisville, KY");
  });

  it("shall have an element displaying the current time", () => {
    childObject = shallowWrapper
      .props()
      .children.map(item => item.props)
      .map(ele => ele.children)[1];

    expect(childObject).toEqual("Last Updated on December 20, 11:27 AM EST");
  });

  it("shall have an element displaying the current temperature", () => {
    childObject = shallowWrapper
      .props()
      .children.map(item => item.props)
      .map(ele => ele.children)[2];

    expect(childObject).toEqual("46°F");
  });

  it("shall have an element displaying the daily high", () => {
    childObject = shallowWrapper
      .props()
      .children.map(item => item.props)
      .map(ele => ele.children)[3];

    expect(childObject).toEqual("51°F");
  });

  it("shall have an element displaying the daily low", () => {
    childObject = shallowWrapper
      .props()
      .children.map(item => item.props)
      .map(ele => ele.children)[4];

    expect(childObject).toEqual("32°F");
  });

  it("shall have an element displaying the conditions", () => {
    childObject = shallowWrapper
      .props()
      .children.map(item => item.props)
      .map(ele => ele.children)[5];

    expect(childObject).toEqual("Partly Cloudy");
  });
});
