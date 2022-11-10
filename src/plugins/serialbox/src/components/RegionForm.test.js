import React, {Component} from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import sinon from "sinon";
import {mockStore, TestWrapper, initialState} from "tools/mockStore";
import {pluginRegistry} from "plugins/pluginRegistration";
import {Server} from "lib/servers";
import Enzyme, {mount, shallow}  from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import RegionForm from "./RegionForm.js";
import * as authAPI from "lib/server-api";
import {reduxForm, change as changeFieldValue} from "redux-form";
Enzyme.configure({adapter: new Adapter()});

const store = mockStore(initialState);
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
      {
        name: "SGLN",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "SGLN",
          help_text:
            "The SGLN EPC scheme is used to assign a unique identity to a physical location or sub-location, such as a specific building or a specific unit of shelving within a warehouse.  TheSGLN is expressed as a URN value.",
          max_length: 150
        },
        validate: null
      },
      {
        name: "name",
        description: {
          type: "string",
          required: true,
          read_only: false,
          label: "Name",
          help_text: "A unique name for the location or party.",
          max_length: 128
        },
        validate: null
      },
      {
        name: "address1",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "Street Address One",
          help_text:
            "For example, the name of the street and the number in the street or the name of a building",
          max_length: 1000
        },
        validate: null
      },
      {
        name: "address2",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "Street Address Two",
          help_text:
            "The second free form line complements the first free form line to locate the party or location.",
          max_length: 1000
        },
        validate: null
      },
      {
        name: "address3",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "Street Address Three",
          help_text:
            "The third free form line complements the first and second free form lines where necessary.",
          max_length: 1000
        },
        validate: null
      },
      {
        name: "country",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "Country Code",
          help_text: "Country ISO 3166-1 alpha-2 Code",
          max_length: 2
        },
        validate: null
      },
      {
        name: "city",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "City",
          help_text: "City",
          max_length: 50
        },
        validate: null
      },
      {
        name: "state_province",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "State or Province",
          help_text:
            "One of the constituent units of a nation having a federal government.",
          max_length: 20
        },
        validate: null
      },
      {
        name: "postal_code",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "Postal Code",
          help_text: "Postal Code",
          max_length: 20
        },
        validate: null
      },
      {
        name: "latitude",
        description: {
          type: "decimal",
          required: false,
          read_only: false,
          label: "Latitude",
          help_text:
            " Latitude of the location, in degrees. Positive numbers are northern latitude; negative numbers are southern latitude."
        },
        validate: null
      },
      {
        name: "longitude",
        description: {
          type: "decimal",
          required: false,
          read_only: false,
          label: "Longitude",
          help_text:
            "Longitude of the location, in degrees. Positive numbers are eastern longitude; negative numbers are western longitude."
        },
        validate: null
      },
      {
        name: "icon",
        description: {
          type: "file upload",
          required: false,
          read_only: false,
          label: "Icon",
          help_text: "An icon to represent the location in a GUI or report.",
          max_length: 100
        },
        validate: null
      },
      {
        name: "sst",
        description: {
          type: "integer",
          required: false,
          read_only: false,
          label: "Sub-Site Type",
          help_text:
            "Sub-Site Type: describes the primary business function of the sub-site location. This master data attribute is only applicable to a sub-site location.  This value is expressed as a single numerical code.",
          min_value: -32768,
          max_value: 32767
        },
        validate: null
      },
      {
        name: "ssa",
        description: {
          type: "string",
          required: false,
          read_only: false,
          label: "Sub-Site Attribute",
          help_text:
            "Sub-Site Attribute: further qualifies the business function of the sub-site location. This master data attribute is only applicable to a sub-site location. Sub-site attributes are expressed as a comma- separated list of zero or more numerical codes",
          max_length: 1000
        },
        validate: null
      },
      {
        name: "company",
        description: {
          type: "field",
          required: false,
          read_only: false,
          label: "Company",
          help_text: "The company, if any, associated with this location."
        },
        validate: null
      },
      {
        name: "site",
        description: {
          type: "field",
          required: false,
          read_only: false,
          label: "Site",
          help_text:
            "Identifies the site in which this location is contained...if at all. For a Sub-site location, this is the identifier of the parent location."
        },
        validate: null
      },
      {
        name: "location_type",
        description: {
          type: "field",
          required: false,
          read_only: false,
          label: "Location Type",
          help_text:
            "An additional classifier that can be used to identifythe location outside of the CBV codes.  This can be an internal classifier or a human readable that lends further clarity to the location record."
        },
        validate: null
      }
]
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

it("renders correctly without additional data", ()=> {
    const form = renderer
    .create(
        <TestWrapper>
            <RegionForm {...props1} store={store} />
        </TestWrapper>
    )
    .toJSON();
    expect(form).toMatchSnapshot();
})



it("builds form properly with django options", async () => {
    const promise = Promise.resolve(formattedFields);
    sinon
      .stub(authAPI, "getFormInfo")
      .callsFake((server, path, createForm, processField) => {
        createForm(formattedFields);
        return promise;
      });
    const DecoratedForm = reduxForm({form: "test-form"})(RegionForm);
    const form = mount(
      <TestWrapper>
        <DecoratedForm
            store={store}
            handleSubmit={() => {
                return null;
            }}
        />
      </TestWrapper>
    );
  
    return promise.then(ret => {
      expect(form.find(DecoratedForm)).toMatchSnapshot();
    });
  });