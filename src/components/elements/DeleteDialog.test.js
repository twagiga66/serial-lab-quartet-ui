import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {TestWrapper} from "tools/mockStore";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DeleteDialog } from "./DeleteDialog";



it("Renders correctly DeleteDialog", () => {
    const dialog = renderer
        .create(
            <TestWrapper>
                <DeleteDialog 
                    title="Test Title" 
                    body="Test Body" 
                    confirmAction={()=> {}}
                    isOpen={true} 
                    toggle={()=> {}}  
                />
            </TestWrapper>
        )
        .toJSON();
    expect(dialog).toMatchSnapshot();
})