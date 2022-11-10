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
import { LocationTypeDialog } from "./LocationTypeDialog";

Enzyme.configure({adapter: new Adapter()});
const store = mockStore(initialState);

const props1 = {
    theme: ["dark"],
    isOpen: true,
    isCompanyOpen: true,
    changeFieldValue:(()=> {}),
    companyEntry:"<span>A</span>",
    toggleLocationTypeDialog:(()=> {}),
    count:1,
    formName:"locationForm",
    companies: [
        {GLN13:"1324354657687",
        SGLN:"urn:epc:id:sgtin:324354.1657687.6789",
        address1:"Marszałkowska 0",
        address2:null,
        address3:null,
        city:"Warsaw",
        company_type:null,
        country:"PL",
        gs1_company_prefix:"324354",
        id:1,
        latitude:null,
        longitude:null,
        name:"Alchemia",
        postal_code:null,
        state_province:null}
    ],
    locations: [
        {
          id:1,
          GLN13:"23",
          SGLN: "123",
          name:"name"
        }
    ],
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
      },

};
const props2 = {
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
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
it("renders correctly ", ()=> {
    const form = renderer
    .create(
        <TestWrapper>
            <LocationTypeDialog {...props1} store={store} />
        </TestWrapper>
    )
    .toJSON();
    expect(form).toMatchSnapshot();
})

// it("renders correctly with data", ()=> {
//     const form = renderer
//     .create(
//         <TestWrapper>
//             <SGLNDetail {...props2} store={store} />
//         </TestWrapper>
//     )
//     .toJSON();
//     expect(form).toMatchSnapshot();
// });
