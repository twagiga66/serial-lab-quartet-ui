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
    serverID: "704e4478-f018-4fb0-b0b3-2711bbdd325c",
    server: {
        serverID: "704e4478-f018-4fb0-b0b3-2711bbdd325c"
    },
    match: {
        params: {
            serverID: "704e4478-f018-4fb0-b0b3-2711bbdd325c",
            ruleID: 1
        }
    },
    capture: {
        servers: ""
    },
    rule: {
        description:"Will capture and parse all properly formed inbound EPCIS messagess.  Loose or strict enforcement can be controlled via step parameters.",
        id:1,
        name:"EPCIS",
        params:[],
        step_set:[
            {
                description:"1",
                id:15,
                name:"1",
                order:1,
                params:[],
                rule:1,
                step_class:"1",
                stepparameter_set:[]
            }
        ],
        steps: [
            {
                description:"Parse EPCIS data and save to database step parameter to have a value of True.",
                id:1,
                name:"Parse XML",
                order:1,
                params: [],
                rule: 1,
                step_class:"quartet_epcis.parsing.steps.EPCISParsingStep",
                stepparameter_set: [],
            }

        ]
    }
};
    pluginRegistry.registerServer(
    new Server(
        initialState.serversettings.servers[
        "704e4478-f018-4fb0-b0b3-2711bbdd325c"
        ]
    )
    );
    pluginRegistry
        .getServer("704e4478-f018-4fb0-b0b3-2711bbdd325c")
        .appList.includes("capture");


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

it("renders correctly RulesTopNav with rules", ()=> {
    const form = renderer
    .create(
        <TestWrapper>
            <RulesTopNav {...props} store={store} />
        </TestWrapper>
    )
    .toJSON();
    expect(form).toMatchSnapshot();
})