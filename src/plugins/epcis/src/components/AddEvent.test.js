import React from "react";
import "tools/mockStore";
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import sinon from "sinon";
import * as message from "lib/message";
import {AddEvent} from "./AddEvent";

sinon.stub(message, "showMessage").callsFake(() => {});
  const store = mockStore(initialState);
  const props1 = {
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
  const props2 = {
    match: {
      params: {
        serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
      }
    },
    event: [
        {
            id:1
        }
    ]
  };
  pluginRegistry.registerServer(
    new Server(
      initialState.serversettings.servers[
        "d0246781-67c6-474b-8ab0-29de61b6e6bb"
      ]
    )
  );
it("renders correctly", () => {
    
    const addEvent = renderer
      .create(
        <TestWrapper>
          <AddEvent {...props1} store={store} />
        </TestWrapper>
      )
      .toJSON();
    expect(addEvent).toMatchSnapshot();
  });

  it("renders correctly in editMode", () => {
    
    const addEvent = renderer
      .create(
        <TestWrapper>
          <AddEvent {...props2} store={store} />
        </TestWrapper>
      )
      .toJSON();
    expect(addEvent).toMatchSnapshot();
  });