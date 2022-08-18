import React from "react";
import "tools/mockStore"; // mock ipcRenderer, localStorage, ...
import renderer from "react-test-renderer";
import {TestWrapper} from "tools/mockStore";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import toJson from "enzyme-to-json";
import {MultiCardPicker} from "./MultiCardPicker";

it("renders correctly MultiCardPicker", () => {
    const TestEntry = props => {
        const updateFieldVal = entry => {
          // trigger a redux form field value change
          props.changeValue(entry);
        };
        return (
          <div
            key={props.entry.id}
            onClick={updateFieldVal.bind(this, props.entry)}
          >
            <h5>
              {props.entry.name}
            </h5>
            <ul className="picker-data-list">
              <li>
                {props.entry.GLN13}
              </li>
              {props.entry.city ? (
                <li>
                  {props.entry.city}
                </li>
              ) : null}
              {props.entry.country ? (
                <li>
                  {props.entry.country}
                </li>
              ) : null}
            </ul>
          </div>
        );
      };
    const CardPicker = renderer
      .create(
        <TestWrapper>
          <MultiCardPicker
            listTitle="Hello Test"
            changeValue={() => {}}
            loadEntries={() => {}}
            server={{serverID: "aServerID"}}
            entries={[
              {id: "anyID", GLN13: "anyvalue", city: "Falaise", country: "France"}
            ]}
            count={0}
            next={0}
            entryClass={TestEntry}
          />
        </TestWrapper>
      )
      .toJSON();
    expect(CardPicker).toMatchSnapshot();
  });