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
import { RegisterForm } from "./RegisterForm";

// it("renders correctly RegisterForm", ()=> {

//     const form = renderer
//     .create(
//         <TestWrapper>
//             <RegisterForm />
//         </TestWrapper>
//     )
//     .toJSON();
//     expect(form).toMatchSnapshot();
// })

const formattedFields = [
    {
      name: "GLN13",
      description: {
        type: "string",
        required: false,
        read_only: false,
        label: "GLN13",
        help_text:
          "The GLN (Global Location Number) provides a standard means to identify legal entities, trading parties and locations to support the requirements of electronic commerce. The GLN-13 is defined by GS1",
        max_length: 13
      },
      validate: null
    },
];

Enzyme.configure({adapter: new Adapter()});

// Recharts resizable chart prevents this from working. Skipping for now.
it("builds form properly with django options", async () => {
  const promise = Promise.resolve(formattedFields);
  sinon
    .stub(authAPI, "getFormInfo")
    .callsFake((server, path, createForm, processField) => {
      createForm(formattedFields);
      return promise;
    });
  const DecoratedForm = reduxForm({form: "test-form"})(RegisterForm);
  const form = mount(
    <TestWrapper>
      <DecoratedForm
        handleSubmit={() => {
          return null;
        }}
      />
    </TestWrapper>
  );

  return promise.then(ret => {
    expect(form.find(DecoratedForm).html()).toMatchSnapshot();
  });
});