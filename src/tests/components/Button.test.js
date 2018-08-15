import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../../components/Button";

Enzyme.configure({
  adapter: new Adapter()
});

const setup = () => {
  const props = {
      entry: {
        displayText: "test",
        redKey: true,
        smallKey: true
      }
    },
    enzymeWrapper = mount(<Button {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe("Display component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render button with displayText", () => {
    expect(enzymeWrapper.text()).toEqual(props.entry.displayText);
  });

  test("should render classname red and small", () => {
    expect(enzymeWrapper.render().hasClass("red")).toBe(true);
    expect(enzymeWrapper.render().hasClass("small")).toBe(true);
  });

  test("should render classname grey only", () => {
    const newProps = {
        entry: {
          displayText: "test"
        }
      },
      newEnzymeWrapper = mount(<Button {...newProps} />);

    expect(newEnzymeWrapper.render().hasClass("grey")).toBe(true);
    expect(newEnzymeWrapper.render().hasClass("red")).toBe(false);
    expect(newEnzymeWrapper.render().hasClass("small")).toBe(false);
  });
});
