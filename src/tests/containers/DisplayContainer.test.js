import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Display from "../../components/Display";
import DisplayContainer from "../../containers/DisplayContainer";
import configureStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore();

describe("Display Container", () => {
  let wrapper,
    store,
    state = {};

  beforeEach(() => {
    store = mockStore(state);
    wrapper = shallow(<DisplayContainer store={store} />);
  });

  test("should render Display component", () => {
    expect(wrapper.find(Display).length).toEqual(1);
  });
});
