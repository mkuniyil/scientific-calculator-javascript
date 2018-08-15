import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Keys from "../../components/Keys";
import KeysContainer from "../../containers/KeysContainer";
import configureStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore();

describe("Search Container", () => {
  let wrapper,
    store,
    state = {};

  beforeEach(() => {
    store = mockStore(state);
    wrapper = shallow(<KeysContainer store={store} />);
  });

  test("should render Keys component", () => {
    expect(wrapper.find(Keys).length).toEqual(1);
  });
});
