import React from "react";

import { shallow, mount } from "enzyme";

import Search from "./Search";

describe("Search component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it("shall render an input box and button when Search is rendered", () => {
    expect(wrapper.find("input").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("should update State when input values are changed", () => {
    expect(wrapper.state().location).toEqual(undefined);

    let searchInput = wrapper.find("input");
    let event = { target: { value: "Denver" } };

    searchInput.simulate("change", event);

    expect(wrapper.state().location).toEqual("Denver");
  });

  it.skip("should track event of button click", () => {
    const mockCallBack = jest.fn();

    let wrapperTwo = mount(
      <Search
        setLocation={() => {
          mockCallBack();
        }}
      />
    );

    let searchButton = wrapperTwo.find("button");

    searchButton.simulate("click");

    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should suggest cities based on user input", () => {
    let userInput = wrapper.find("input");
    let event = { target: { value: "bould" } };

    userInput.simulate("change", event);

    let suggestions = wrapper.find("section");
    let suggestion = suggestions.props().children[0].props.children;

    suggestions.simulate("click");

    expect(suggestion).toEqual("boulder, co");
  });
});
