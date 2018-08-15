import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Title from "../../components/Title";

Enzyme.configure({
  adapter: new Adapter()
});

const setup = () => {
  const props = {},
    enzymeWrapper = mount(<Title {...props} />);

  return {
    enzymeWrapper
  };
};

describe("Keys component", () => {
  const { enzymeWrapper } = setup();

  test("should render div with classnames", () => {
    expect(enzymeWrapper.render().hasClass("title")).toBe(true);
    expect(
      enzymeWrapper
        .render()
        .find("div")
        .hasClass("title__brandName")
    ).toBe(true);
    expect(
      enzymeWrapper
        .render()
        .find("div")
        .hasClass("title__power")
    ).toBe(true);
    expect(
      enzymeWrapper
        .render()
        .find("div")
        .hasClass("title__power__display")
    ).toBe(true);
    expect(
      enzymeWrapper
        .render()
        .find("div")
        .hasClass("title__power__text")
    ).toBe(true);
  });
});
