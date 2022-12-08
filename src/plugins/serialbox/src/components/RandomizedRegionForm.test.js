import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RandomizedRegionForm from "./RandomizedRegionForm.js";

Enzyme.configure({adapter: new Adapter()});
const store = mockStore(initialState);

const props1 = {
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
    }
};

const props2 = {
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
    },
    remaining: "50",
    end: "100"
};
pluginRegistry.registerServer(
    new Server(
        initialState.serversettings.servers[
        "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        ]
    )
);

// it('Should render component', () => {
//     const comp = shallow(<TestWrapper><RegionCard {...props1} store={store} /></TestWrapper>);
//     expect(comp).toMatchSnapshot();
// });



it("renders correctly", ()=> {
    const form = renderer
    .create(
        <TestWrapper>
            <RandomizedRegionForm {...props1} store={store} />
        </TestWrapper>
    )
    .toJSON();
    expect(form).toMatchSnapshot();
})