import React from "react";
import "tools/mockStore";
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import sinon from "sinon";
import * as message from "lib/message";
import {EventDetailTable} from "./EventDetailTable";

  const store = mockStore(initialState);
  const props1 = {
    match: {
      params: {
        serverID: "d0246781-67c6-474b-8ab0-29de61b6e6b5"
      }
    }
  };
  const props2 = {
    currentEntry:{
        aggregationEvent:{
            action:"ADD",
            bizLocation:"urn:epc:id:sgln:0300005.00000.0",
            bizStep:"urn:epcglobal:cbv:bizstep:packing",
            bizTransactionList:{},
            childEPCs:(3) ["urn:epc:id:sgtin:0300005.010001.A00000000001", "urn:epc:id:sgtin:0300005.010001.A00000000002", "urn:epc:id:sgtin:0300005.010001.A00000000003"],
            childQuantityList:{},
            destinationList:{},
            disposition:"urn:epcglobal:cbv:disp:in_progress",
            errorDeclaration:null,
            eventID:null,
            eventTime:"2022-03-01T12:10:00.341449+00:00",
            eventTimezoneOffset:"-07:00",
            id:"f2809eeb-5b98-49fd-9df7-62e163ca7e62",
            parentID:"urn:epc:id:sgtin:0300005.310001.A00000000001",
            readPoint:"urn:epc:id:sgln:0300005.00000.0",
            recordTime:"2022-07-14T12:46:50.185243+00:00",
            sourceList:{},
            }
    }
  };
it("renders correctly", () => {
    
    const showDetails = renderer
      .create(
        <TestWrapper>
          <EventDetailTable {...props1} store={store} />
        </TestWrapper>
      )
      .toJSON();
    expect(showDetails).toMatchSnapshot();
  });

  it("renders correctly with event detail table", () => {
    
    const showDetails = renderer
      .create(
        <TestWrapper>
          <EventDetailTable {...props2} store={store} />
        </TestWrapper>
      )
      .toJSON();
    expect(showDetails).toMatchSnapshot();
  });