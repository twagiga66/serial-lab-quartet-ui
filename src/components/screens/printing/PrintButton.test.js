import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {TestWrapper} from "tools/mockStore";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import toJson from "enzyme-to-json";
import mockExpectation from "sinon/lib/sinon/mock-expectation";
import { PrintButton } from "./PrintButton";


it("renders correctly PrintButton", () => {
    const button = renderer
    .create(
        <TestWrapper>
            <PrintButton />
        </TestWrapper>
    )
    .toJSON();
    expect(button).toMatchSnapshot();
});