import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Keys from "../../components/Keys";

Enzyme.configure({
  adapter: new Adapter()
});

const setup = () => {
  const props = {},
    enzymeWrapper = mount(<Keys {...props} />);

  return {
    enzymeWrapper
  };
};

describe("Keys component", () => {
  const { enzymeWrapper } = setup();

  test("should render div with classnames 'app__keys' & 'app__model'", () => {
    expect(enzymeWrapper.render().hasClass("app__keys")).toBe(true);
    expect(
      enzymeWrapper
        .render()
        .find("div")
        .hasClass("app__model")
    ).toBe(true);
  });
});
