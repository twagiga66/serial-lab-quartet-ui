import React from "react";
import "tools/mockStore";
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import sinon from "sinon";
import * as message from "lib/message";
import {NavPluginRoot} from "./NavItems";

  const store = mockStore(initialState);
  const props2 = {
    serverID:"d0246781-67c6-474b-8ab0-29de61b6e6bb",
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
      }
  };
  pluginRegistry.registerServer(
    new Server(
      initialState.serversettings.servers[
        "d0246781-67c6-474b-8ab0-29de61b6e6bb"
      ]
    )
  );
it("renders correctly with no epcis", () => {
    
    const showDetails = renderer
      .create(
        <TestWrapper>
          <NavPluginRoot {...props2} store={store} />
        </TestWrapper>
      )
      .toJSON();
    expect(showDetails).toMatchSnapshot();
  });