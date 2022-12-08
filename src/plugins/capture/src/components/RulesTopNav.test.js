import React, {Component} from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {MemoryRouter as Router, withRouter} from "react-router-dom";
import {IntlProvider, intlReducer} from "react-intl-redux";
import {Provider} from "react-redux";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import sinon from "sinon";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as message from "lib/message";
import { RulesTopNav } from "./RulesTopNav";

const store = mockStore(initialState);

const props = {
    serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
};
    pluginRegistry.registerServer(
    new Server(
        initialState.serversettings.servers[
        "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        ]
    )
    );


it("renders correctly RulesTopNav with NO rules", ()=> {
    const form = renderer
    .create(
        <TestWrapper>
            <RulesTopNav {...props} store={store} />
        </TestWrapper>
    )
    .toJSON();
    expect(form).toMatchSnapshot();
})