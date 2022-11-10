import React from "react";
import "tools/mockStore";
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import sinon from "sinon";
import * as message from "lib/message";
import {MapBody} from "./MapBody";

  const store = mockStore(initialState);
  const props2 = {
  };

it("renders correctly with event detail table", () => {
    
    const showDetails = renderer
      .create(
        <TestWrapper>
          <MapBody {...props2} store={store} />
        </TestWrapper>
      )
      .toJSON();
    expect(showDetails).toMatchSnapshot();
  });