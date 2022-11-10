import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {TestWrapper} from "tools/mockStore";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import toJson from "enzyme-to-json";
import * as authAPI from "lib/server-api";
import {reduxForm, change as changeFieldValue} from "redux-form";
import { TasksTopNav } from "./TasksTopNav";

Enzyme.configure({adapter: new Adapter()});

it('Should render component', () => {
    const TaskFormComponent = shallow(
        <TestWrapper>
            <TasksTopNav />
        </TestWrapper>
    );
    expect(TaskFormComponent).toMatchSnapshot();
});


// it('Should render component', () => {
//     const serverComponent = renderer
//       .create(
//         <TestWrapper><TasksTopNav /></TestWrapper>
//       )
//       .toJSON();
//     expect(serverComponent).toMatchSnapshot();
// });