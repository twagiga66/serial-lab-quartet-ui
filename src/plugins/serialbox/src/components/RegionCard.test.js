import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {RegionCard} from "./RegionCard.js";

Enzyme.configure({adapter: new Adapter()});
const store = mockStore(initialState);

const props1 = {
    match: {
        params: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb"
        }
    }
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

it('Should render component', () => {
    const comp = shallow(<TestWrapper><RegionCard {...props1} store={store} /></TestWrapper>);
    expect(comp).toMatchSnapshot();
});

// it("renders correctly without additional data", ()=> {
//     // const spy = jest.spyOn(RegionCard.WrappedComponent.prototype, 'componentDidMount');
    
//     const form = renderer
//     .create(
//         <TestWrapper>
//             <RegionCard {...props1} store={store} />
//         </TestWrapper>
//     )
//     .toJSON();
    
//     expect(form).toMatchSnapshot();
//     // expect(spy).toHaveBeenCalled();
// })

// it("renders correctly with remaining state", ()=> {
//     const form = renderer
//     .create(
//         <TestWrapper>
//             <RegionCard {...props2} store={store} />
//         </TestWrapper>
//     )
//     .toJSON();
//     expect(form).toMatchSnapshot();
// })