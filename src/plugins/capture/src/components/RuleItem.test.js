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
import * as message from "lib/message";
import { RuleItem } from "./RuleItem";

it("renders correctly", () => {
    const store = mockStore(initialState);
    const props = {
        server: {
            serverID: "123",
            serverSettingName: "Server_123"
        },
        match: {
            params: {
                serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
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
                    id:1,
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
          "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        ]
      )
    );
    const serverSettings = renderer
      .create(
        <TestWrapper>
          <Provider store={store}>
            <Router>
                <RuleItem {...props} store={store} />
            </Router>
          </Provider>
        </TestWrapper>
      )
      .toJSON();
    expect(serverSettings).toMatchSnapshot();
})