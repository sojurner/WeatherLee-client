import React from "react";
import { shallow, mount } from "enzyme";
import { TenDayTab } from "../TenDayTab";

describe("TenDayTab component", () => {
  let shallowWrapper;
  let mountWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<TenDayTab />);
    mountWrapper = mount(<TenDayTab />);
  });

  it("should exist", () => {
    expect(shallowWrapper).toBeDefined();
    expect(mountWrapper).toBeDefined();
  });

  it("should have default state properties for sevenHourClicked, tenDayClicked, currentWeather", () => {
    expect(shallowWrapper.state().sevenHourClicked).toEqual(false);
    expect(shallowWrapper.state().tenDayClicked).toEqual(true);
    expect(shallowWrapper.state().currentWeather).toEqual(false);
  });

  it("should create a button", () => {
    expect(shallowWrapper.find("button").length).toEqual(1);
  });

  it("should handle a click event", () => {
    const mockCallBack = jest.fn();
    let wrapperTwo = shallow(
      <TenDayTab
        changeWeatherClicked={() => {
          mockCallBack();
        }}
      />
    );
    let searchButton = wrapperTwo.find("button");
    searchButton.simulate("click");

    expect(mockCallBack).toHaveBeenCalled();
  });
});
