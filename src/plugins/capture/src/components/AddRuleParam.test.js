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
import { AddRuleParam } from "./AddRuleParam";

it("renders correctly", () => {
    sinon.stub(message, "showMessage").callsFake(() => {});
    const store = mockStore(initialState);
    const props = {
        server: {
            serverID: "123"
        },
        match: {
            params: {
                serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
                ruleID: "1"
            }
        },
        capture: {
            servers: ""
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
                <AddRuleParam {...props} store={store}/>
            </Router>
          </Provider>
        </TestWrapper>
      )
      .toJSON();
    expect(serverSettings).toMatchSnapshot();
  });