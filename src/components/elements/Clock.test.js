import React from "react";
import renderer from "react-test-renderer";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {TestWrapper} from "tools/mockStore";
import Clock from "./Clock";

Enzyme.configure({adapter: new Adapter()});

it('Should render component', () => {
    const clockComponent = shallow(<Clock />);
    clockComponent.setState({ isChecked: true, day: "11", month: "1", year:"2022", timeTochangeInUE: true});
    expect(clockComponent);
});

it("Clock renders correctly", () => {
    const clock = renderer
      .create(
        <TestWrapper>
          <Clock />
        </TestWrapper>
      )
      .toJSON();
    expect(clock).toMatchSnapshot();
  });