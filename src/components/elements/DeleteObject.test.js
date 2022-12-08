import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {TestWrapper} from "tools/mockStore";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DeleteObject } from "./DeleteObject";




it("Renders correctly deleteObject", () => {
    const props = {
        title:"Test Title", body:"Test Body", confirmAction: "", toggle: true, isOpen: true
    }
    const dialog = renderer
        .create(
            <TestWrapper>
                <DeleteObject {...props} />
            </TestWrapper>
        )
        .toJSON();
    expect(dialog).toMatchSnapshot();
})