import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../../components/Display";

Enzyme.configure({
  adapter: new Adapter()
});

const setup = () => {
  const props = {
      hideValue: false,
      displayValue: "test"
    },
    enzymeWrapper = mount(<Display {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("Display component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render div with class 'app__display'", () => {
    expect(enzymeWrapper.find("div").hasClass("app__display")).toBe(true);
  });

  test("should render span element", () => {
    expect(enzymeWrapper.find("span").length).toBe(1);
  });

  test("should render span element, if hideDisplay is true", () => {
    const newProps = {
        hideDisplay: true,
        displayValue: "test"
      },
      newEnzymeWrapper = mount(<Display {...newProps} />);

    expect(newEnzymeWrapper.find("span").length).toBe(0);
  });
});
