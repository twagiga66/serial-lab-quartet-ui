// Copyright (c) 2018 SerialLab Corp.
//
// GNU GENERAL PUBLIC LICENSE
//    Version 3, 29 June 2007
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

// import "./tools/MockQu4rtet";
import {
  TestWrapper,
  mockStore,
  initialState,
  updateRegistryIntl
} from "tools/mockStore";
import React, {Component} from "react";
import renderer from "react-test-renderer";
import {Server} from "lib/servers";
import {pluginRegistry} from "plugins/pluginRegistration";
import {flattenMessages} from "lib/flattenMessages";
import messages from "messages";
import nrmessages from "../messages";
import {RegionDetail} from "./RegionDetail";

let locale = "en-US";
const newIntl = {
  ...initialState.intl,
  messages: flattenMessages({...messages[locale], ...nrmessages[locale]})
};

const pluginData = {
  ...initialState,
  serversettings: {servers: {fakeid: {serverID: "fakeid"}}},
  numberrange: {
    servers: {
      fakeid: {
        server: {
          serverID: "fakeid",
          password: "toor",
          username: "root",
          port: "80",
          serverName: "localhost",
          serverSettingName: "fake server",
          ssl: false,
          path: ""
        },
        pools: [
          {
            sequentialregion_set: [],
            created_date: "2018-02-12T14:56:11.462232Z",
            modified_date: "2018-02-12T14:56:11.462279Z",
            readable_name: "Fake Pool",
            machine_name: "fakepool",
            active: true,
            request_threshold: 50000
          }
        ]
      }
    },
    region: {},
    currentRegions: []
  },
  intl: newIntl
};
const pluginData1 = {
  ...initialState,
  serversettings: {servers: {fakeid: {serverID: "fakeid"}}},
  numberrange: {
    servers: {
      fakeid: {
        server: {
          serverID: "fakeid",
          password: "toor",
          username: "root",
          port: "80",
          serverName: "localhost",
          serverSettingName: "fake server",
          ssl: false,
          path: ""
        },
        pools: [
          {
            sequentialregion_set: [],
            created_date: "2018-02-12T14:56:11.462232Z",
            modified_date: "2018-02-12T14:56:11.462279Z",
            readable_name: "Fake Pool",
            machine_name: "fakepool",
            active: true,
            request_threshold: 50000
          }
        ]
      }
    },
    region: {},
    currentRegions: [
      {active:true,
        created_date:"2020-06-11T22:07:13.866789Z",
        current:10288070,
        machine_name:"00342291131903",
        max:11000000,
        min:7000000,
        modified_date:"2021-02-02T05:49:37.564797Z",
        order:2,
        pool:"00342291131903",
        readable_name:"00342291131903",
        remaining:3981671,
        start:7000000,}
    ]
  },
  intl: newIntl
};
const store = mockStore(pluginData);
const store1 = mockStore(pluginData1);
it("renders correctly a pool with no region", () => {
  let server = pluginData.numberrange.servers.fakeid.server;
  pluginRegistry.registerServer(new Server(server));
  const promise = Promise.resolve({
    statusCode: 200,
    ok: true,
    body: []
  });
  window.fetch = jest.fn().mockImplementation(() => promise);

  const regionDetailScreen = renderer
    .create(
      <TestWrapper locale={locale} messages={newIntl.messages} store={store}>
        <RegionDetail
          store={store}
          match={{params: {serverID: "fakeid", pool: "fakepool"}}}
          server={server}
        />
      </TestWrapper>
    )
    .toJSON();
  return promise.then(data => {
    expect(regionDetailScreen).toMatchSnapshot();
  });
});

it("renders correctly a pool with region detail", () => {
  let server = pluginData.numberrange.servers.fakeid.server;
  pluginRegistry.registerServer(new Server(server));
  const promise = Promise.resolve({
    statusCode: 200,
    ok: true,
    body: []
  });
  window.fetch = jest.fn().mockImplementation(() => promise);
  const regionDetailScreen = renderer
    .create(
      <TestWrapper locale={locale} messages={newIntl.messages} store={store}>
        <RegionDetail
          store={store1}
          match={{params: {serverID: "fakeid", pool: "fakepool"}}}
          server={server}
        />
      </TestWrapper>
    )
    .toJSON();
  return promise.then(data => {
    expect(regionDetailScreen).toMatchSnapshot();
  });
});