import React, {Component} from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { PoolForm } from "./PoolForm.js";

Enzyme.configure({adapter: new Adapter()});
const store = mockStore(initialState);

const props1 = {
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
    },
    location: {
        hash:"",
        pathname:"/number-range/add-pool/d0246781-67c6-474b-8ab0-29de61b6e6bb",
        search:""
    }
};

pluginRegistry.registerServer(
    new Server(
        initialState.serversettings.servers[
        "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        ]
    )
);
it("renders correctly ", ()=> {
    const form = renderer
    .create(
        <TestWrapper>
            <PoolForm {...props1} store={store} />
        </TestWrapper>
    )
    .toJSON();
    expect(form).toMatchSnapshot();
})