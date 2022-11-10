import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddListBasedRegion} from "./AddListBasedRegion.js";

Enzyme.configure({adapter: new Adapter()});
const store = mockStore(initialState);

const props1 = {
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
    },
    server:{    
    serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
    },
    location: {
        state: null
    }

};

const props2 = {
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
    },
    server:{    
        serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
    },
    location: {
        pathname:"/number-range/add-region/d0246781-67c6-474b-8ab0-29de61b6e6bb/1",
        state: {
            editPool: true,
            pool:{
                active:true,
                created_date:"2022-10-17T14:10:42.892288Z",
                id:5,
                listbasedregion_set:[],
                machine_name:"01234567890123",
                modified_date:"2022-10-17T14:10:42.892319Z",
                randomizedregion_set:["01234567890123"],
                readable_name:"Test Random",
                request_threshold:50000,
                response_rules:[],
                sequentialregion_set:[],
            }
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

it("renders correctly", ()=> {
    const form = renderer
    .create(
        <TestWrapper store={store}>
            <AddListBasedRegion {...props1} store={store} />
        </TestWrapper>
    )
    .toJSON();
    expect(form).toMatchSnapshot();
})

// it("renders correctly", ()=> {
//     const form = renderer
//     .create(
//         <TestWrapper store={store}>
//             <AddRegion {...props2} store={store} />
//         </TestWrapper>
//     )
//     .toJSON();
//     expect(form).toMatchSnapshot();
// })