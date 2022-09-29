import React from "react";
import "tools/mockStore";
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import sinon from "sinon";
import * as message from "lib/message";
import {EventList} from "./EventList";

  sinon.stub(message, "showMessage").callsFake(() => {});
  const store = mockStore(initialState);
  const props1 = {
    match: {
      params: {
        serverID: "d0246781-67c6-474b-8ab0-29de61b6e6b5"
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
  const props2 = {
    match: {
      params: {
        serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
        eventID: "urn:epc:id:sgtin:0300005.010001.A00000000001"
      }
    },
  };
  pluginRegistry.registerServer(
    new Server(
      initialState.serversettings.servers[
        "d0246781-67c6-474b-8ab0-29de61b6e6bb"
      ]
    )
  );
it("renders correctly", () => {
    
    const showDetails = renderer
      .create(
        <TestWrapper>
          <EventList {...props1} store={store} />
        </TestWrapper>
      )
      .toJSON();
    expect(showDetails).toMatchSnapshot();
  });

  it("renders correctly with event entries", () => {
    
    const showDetails = renderer
      .create(
        <TestWrapper>
          <EventList {...props2} store={store} />
        </TestWrapper>
      )
      .toJSON();
    expect(showDetails).toMatchSnapshot();
  });