import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PoolListItem from "./PoolListItem.js";

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
entry:
     [
        {
          sequentialregion_set: [
            "http://localhost:8000/serialbox/sequential-region-detail/blob/"
          ],
          randomizedregion_set: [],
          created_date: "2018-03-14T15:44:06.717881Z",
          modified_date: "2018-03-14T15:44:06.717912Z",
          readable_name: "test",
          machine_name: "test",
          active: true,
          request_threshold: 50000
        }
      ],

};

const props2 = {
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
    },
    remaining: "50",
    end: "100"
};
pluginRegistry.registerServer(
    new Server(
        initialState.serversettings.servers[
        "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        ]
    )
);

// it('Should render component', () => {
//     const comp = shallow(<TestWrapper><RegionCard {...props1} store={store} /></TestWrapper>);
//     expect(comp).toMatchSnapshot();
// });



it("renders correctly", ()=> {
    const form = renderer
    .create(
        <TestWrapper>
            <PoolListItem {...props1} store={store} />
        </TestWrapper>
    )
    .toJSON();
    expect(form).toMatchSnapshot();
})