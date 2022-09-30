export default {
  dashboard: {},
  serversettings: {
    servers: {
      "d0246781-67c6-474b-8ab0-29de61b6e6bb": {
        serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
        protocol: "http",
        port: "8000",
        path: "",
        ssl: false,
        hostname: "localhost",
        serverSettingName: "box 1",
        url: "http://localhost:8000/",
        appList: ["", "capture", "epcis", "manifest", "rest-auth", "serialbox"],
        username: "lduros",
        password: "password1234"
      }
    }
  },
  capture: {
    servers: {
      "d0246781-67c6-474b-8ab0-29de61b6e6bb": {
        serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
        rules: [
          {
            id:1,
            title: "rule_1", 
            name: "Name_One", 
            params: [],
            step_set:[{id:1}],
            steps: [
              {
                description: "Description of the first step",
                id: 1,
                name: "1",
                order: 1,
                params: [],
                rule: 1,
                step_class: "1",
                stepparameter_set: [
                  {
                  description: null,
                  id: 1,
                  name: "EPCIS Output Criteria",
                  step: 1,
                  value: "Ship Criteria"
                }
              ]
              }
            ]
          }
        ]
      }
    }
  },
  form: {
    addRegion: {
      values: {
        active: false
      }
    }
  },
  intl: {
    defaultLocale: "en-US",
    locale: "en-US",
    messages: {
      "app.nav.servers": "Servers",
      "app.nav.numberRange": "Number Ranges",
      "app.nav.dashboard": "Dashboard",
      "app.nav.server": "Server",
      "app.nav.plugins": "Plugins",
      "app.serverSettings.serverSettings": "Server Settings",
      "app.serverSettings.addAServer": "Add a New Server",
      "app.serverSettings.serverSettingsSaved":
        "Your server settings were saved",
      "app.serverSettings.serverDeleted": "Server removed successfully",
      "app.themes.lightTheme": "Light Theme",
      "app.themes.darkTheme": "Dark Theme",
      "app.themes.contrastedTheme": "Contrasted Theme",
      "app.themes.darkBrownTheme": "Dark Brown Theme",
      "app.themes.polarTheme": "Polar Theme",
      "app.servers.addServer": "Add Server",
      "app.servers.updateServer": "Update Server",
      "app.servers.registerUser": "Register User",
      "app.servers.verifyUser": "Verify User",
      "app.servers.userCreated": "User {username} successfully created.",
      "app.servers.userVerified": "User successfully verified.",
      "app.servers.deleteServer": "Remove Server",
      "app.servers.deleteServerConfirm":
        "Are you sure you want to remove this server? No data from this server will be deleted.",
      "app.servers.noServerMsg":
        "You currently have no QU4RTET server in your configuration. Click the + icon above and add a new server.",
      "app.servers.errorFormFetch":
        "An error occurred while attempting to get this form from remote server {serverName}. {error}",
      "app.servers.errorServerFetch":
        "An error occurred while requesting initial data from server {serverName}. Please check your settings and credentials. {error}",
      "app.plugins.addPlugin": "Add a Plugin",
      "app.plugins.pluginEnabled": "Plugin enabled",
      "app.plugins.pluginDisabled": "Plugin disabled",
      "plugins.numberRange.pool": "Pool",
      "plugins.numberRange.region": "Region",
      "plugins.numberRange.allocation": "Allocation",
      "plugins.numberRange.allocateButton": "Allocate from Pool",
      "plugins.numberRange.createdOn": "Created On",
      "plugins.numberRange.readableName": "Readable Name",
      "plugins.numberRange.machineName": "Machine Name",
      "plugins.numberRange.status": "Status",
      "plugins.numberRange.requestThreshold": "Request Threshold",
      "plugins.numberRange.regions": "Regions",
      "plugins.numberRange.numberRangePools": "Number Range Pools",
      "plugins.numberRange.active": "active",
      "plugins.numberRange.inactive": "inactive",
      "plugins.numberRange.range": "Range",
      "plugins.numberRange.to": "to",
      "plugins.numberRange.state": "State",
      "plugins.numberRange.addSequentialRegion": "Add a New Sequential Region",
      "plugins.numberRange.editSequentialRegion": "Edit Sequential Region",
      "plugins.numberRange.addRandomizedRegion": "Add a New Randomized Region",
      "plugins.numberRange.editRandomizedRegion": "Edit Randomized Region",
      "plugins.numberRange.addListBasedRegion": "Add a New List Based Region",
      "plugins.numberRange.editListBasedRegion": "Edit List Based Region",
      "plugins.numberRange.addPool": "Add a New Pool",
      "plugins.numberRange.editPool": "Edit Pool",
      "plugins.numberRange.noRegionInPool":
        "There is currently no region in this pool.",
      "plugins.numberRange.regionDetailTitle": "Pool {poolName} Regions",
      "plugins.numberRange.navItemsTitle": "Serial Number Pools",
      "plugins.numberRange.current": "current",
      "plugins.numberRange.serial": "Sequential",
      "plugins.numberRange.randomized": "Randomized",
      "plugins.numberRange.deleteRegion": "Delete region {regionName}",
      "plugins.numberRange.allocatedSuccess":
        "{size} allocated to region {regionName}. You will be prompted to save the export file shortly.",
      "plugins.numberRange.regionDeletedSuccessfully":
        "Region deleted successfully",
      "plugins.numberRange.deleteRegionConfirm":
        "Are you sure you want to delete this region?",
      "plugins.numberRange.errorFetchPools":
        "An error occurred while attempting to fetch pools from {serverName}",
      "plugins.numberRange.errorVanilla":
        "An error occurred while performing this operation. {error}",
      "plugins.numberRange.errorFetchPool":
        "An error occurred while attempting to fetch {poolName}. {error}",
      "plugins.numberRange.errorFetchRegion":
        "An error occurred while attempting to get region information. {error}",
      "plugins.numberRange.errorAllocating":
        "An error occurred while attempting to allocate from pool {poolName}. {error}",
      "plugins.numberRange.errorFormFetch":
        "An error occurred while attempting to get this form from remote server {serverName}. {error}",
      "plugins.numberRange.errorFailedToGenerateFile":
        "An error occurred when attempting to generate an export file from allocation."
    }
  },
  layout: {
    pageTitle: {
      id: "nav.app.serverDetails",
      defaultMessage: "Server Details",
      values: {}
    },
    currentPath: "/server-details/d0246781-67c6-474b-8ab0-29de61b6e6bb",
    theme: "dark-brown",
    location: {
      pathname: "/server-details/d0246781-67c6-474b-8ab0-29de61b6e6bb",
      search: "",
      hash: "",
      key: "x0qo0w"
    }
  },
  plugins: {
    navTreeItems: {
      plugin_NumberRange_NumberRangeNavRoot: {
        pluginName: "NumberRange",
        pluginComponentName: "plugin_NumberRange_NumberRangeNavRoot"
      }
    },
    plugins: {
      NumberRange: {
        enabled: true
      }
    }
  },
  numberrange: {
    servers: {
      "704e4478-f018-4fb0-b0b3-2711bbdd325c": {
        pools: [
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
        server: {
          serverID: "704e4478-f018-4fb0-b0b3-2711bbdd325c",
          protocol: "http",
          port: "8000",
          path: "",
          ssl: false,
          hostname: "localhost",
          serverSettingName: "box 1",
          url: "http://localhost:8000/",
          appList: [
            "",
            "capture",
            "epcis",
            "manifest",
            "rest-auth",
            "serialbox"
          ],
          username: "admin",
          password: "password1234"
        }
      },
      "d6734acf-b19f-465d-aa55-741497051d17": {
        pools: [
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
        server: {
          serverID: "d6734acf-b19f-465d-aa55-741497051d17",
          protocol: "http",
          port: "8000",
          path: "",
          ssl: false,
          hostname: "localhost",
          serverSettingName: "Box 1",
          url: "http://localhost:8000/",
          appList: [
            "",
            "capture",
            "epcis",
            "manifest",
            "rest-auth",
            "serialbox"
          ],
          username: "admin",
          password: "password1234"
        }
      },
      "d8f53d6a-eaaa-4129-b3b5-d14723086f48": {
        pools: [
          {
            sequentialregion_set: [],
            randomizedregion_set: [],
            created_date: "2018-03-14T15:44:06.717881Z",
            modified_date: "2018-03-14T15:44:06.717912Z",
            readable_name: "test",
            machine_name: "test",
            active: true,
            request_threshold: 50000
          }
        ],
        server: {
          serverID: "d8f53d6a-eaaa-4129-b3b5-d14723086f48",
          protocol: "http",
          port: "8000",
          path: "",
          ssl: false,
          hostname: "localhost",
          serverSettingName: "box 1",
          url: "http://localhost:8000/",
          appList: [
            "",
            "capture",
            "epcis",
            "manifest",
            "rest-auth",
            "serialbox"
          ],
          username: "admin",
          password: "password1234"
        }
      },
      "d0246781-67c6-474b-8ab0-29de61b6e6bb": {
        pools: [
          {
            sequentialregion_set: [],
            randomizedregion_set: [
              "http://localhost:8000/serialbox/randomized-regions/random2/",
              "http://localhost:8000/serialbox/randomized-regions/random24/"
            ],
            created_date: "2018-03-19T18:23:08.964545Z",
            modified_date: "2018-03-19T18:23:08.964578Z",
            readable_name: "docker pool",
            machine_name: "dockerpool",
            active: true,
            request_threshold: 50000
          }
        ],
        server: {
          serverID: "d0246781-67c6-474b-8ab0-29de61b6e6bb",
          protocol: "http",
          port: "8000",
          path: "",
          ssl: false,
          hostname: "localhost",
          serverSettingName: "box 1",
          url: "http://localhost:8000/",
          appList: [
            "",
            "capture",
            "epcis",
            "manifest",
            "rest-auth",
            "serialbox"
          ],
          username: "lduros",
          password: "password1234"
        }
      }
    },
    currentRegions: [
      {
        pool: "dockerpool",
        created_date: "2018-03-19T18:24:46.200566Z",
        modified_date: "2018-03-20T16:50:23.186915Z",
        readable_name: "random1",
        machine_name: "random2",
        active: true,
        order: 2,
        min: 1,
        max: 10,
        start: 1,
        current: 6,
        remaining: -10
      },
      {
        pool: "dockerpool",
        created_date: "2018-03-19T18:25:10.786631Z",
        modified_date: "2018-03-19T18:25:10.786661Z",
        readable_name: "random 2",
        machine_name: "random24",
        active: true,
        order: 3,
        min: 11,
        max: 200,
        start: 173,
        current: 173,
        remaining: 189
      }
    ],
    allocationDetail: {
      numbers: [7, 9, 8, 4],
      fulfilled: true,
      type: "random",
      encoding: "decimal",
      region: "random2",
      size_granted: 4
    }
  },
  epcis: {
    servers: {
      "d0246781-67c6-474b-8ab0-29de61b6e6bb": {
        detailItems: 
          {
            "urn:epc:id:sgtin:0300005.010001.A00000000001": 
          {
            createdDate:"2022-09-28T17:38:39.579227",
            events: [
              {objectEvent: {
              action:"ADD",
              bizLocation:"urn:epc:id:sgln:0300005.00000.0",
              bizStep:"urn:epcglobal:cbv:bizstep:commissioning",
              bizTransactionList: {},
              destinationList:{},
              disposition:"urn:epcglobal:cbv:disp:active",
              epcList: ["urn:epc:id:sgtin:0300005.010001.A00000000001"],
              errorDeclaration:null,
              eventID:null,
              eventTime:"2022-03-01T12:00:00.341449+00:00",
              eventTimezoneOffset:"-07:00",
              id:"7f42fc69-3ab0-4c8e-84d2-5ece9858d307",
              ilmd: {
                  itemExpirationDate:"2030-12-31",
                  lotNumber:"VRSTEST01",
              },
              quantityList:{},
              readPoint: "urn:epc:id:sgln:0300005.00000.0",
              recordTime:"2022-07-14T12:46:49.779159+00:00"
          }}]},
          "cc4a2f9d-2e61-4961-9716-1aa2752d332a":{
            events: [
              {objectEvent: {
              action:"OBSERVE",
              bizLocation:"urn:epc:id:sgln:0300005.00000.0",
              bizStep:"urn:epcglobal:cbv:bizstep:commissioning",
              bizTransactionList: {},
              destinationList:{},
              disposition:"urn:epcglobal:cbv:disp:active",
              epcList: ["urn:epc:id:sgtin:0300005.010001.A00000000001"],
              errorDeclaration:null,
              eventID:null,
              eventTime:"2022-03-01T12:00:00.341449+00:00",
              eventTimezoneOffset:"-07:00",
              id:"7f42fc69-3ab0-4c8e-84d2-5ece9858d307",
              ilmd: {
                  itemExpirationDate:"2030-12-31",
                  lotNumber:"VRSTEST01",
              },
              quantityList:{},
              readPoint: "urn:epc:id:sgln:0300005.00000.0",
              recordTime:"2022-07-14T12:46:49.779159+00:00"
          }}]
          }
        },
        entries: [
          {
            created:"2022-07-14T12:46:49.790040Z",
            decommissioned:false,
            id:"ee807298-1883-4682-a695-acedc6c40548",
            identifier:"urn:epc:id:sgtin:0300005.010001.A00000000001",
            is_parent:false,
            last_aggregation_event:"270dd597-93ea-452a-ac63-ab0fa7bd9b11",
            last_aggregation_event_action:"ADD",
            last_aggregation_event_time:"2022-03-01T12:20:00.341449Z",
            last_disposition:"urn:epcglobal:cbv:disp:in_progress",
            last_event:"270dd597-93ea-452a-ac63-ab0fa7bd9b11",
            last_event_time:"2022-03-01T12:20:00.341449Z",
            modified:"2022-07-14T12:46:50.313393Z",
            parent_id:"0a02be49-7454-4095-ab7f-f32bbc001ce7",
            top_id:"5b2bcfc4-1d73-4ea3-acce-28306eb64cbe",
          }
        ],
        events: [
          {
            created:"2022-07-14T12:46:49.790040Z",
            decommissioned:false,
            id:"ee807298-1883-4682-a695-acedc6c40548",
            identifier:"urn:epc:id:sgtin:0300005.010001.A00000000001",
            is_parent:false,
            last_aggregation_event:"270dd597-93ea-452a-ac63-ab0fa7bd9b11",
            last_aggregation_event_action:"ADD",
            last_aggregation_event_time:"2022-03-01T12:20:00.341449Z",
            last_disposition:"urn:epcglobal:cbv:disp:in_progress",
            last_event:"270dd597-93ea-452a-ac63-ab0fa7bd9b11",
            last_event_time:"2022-03-01T12:20:00.341449Z",
            modified:"2022-07-14T12:46:50.313393Z",
            parent_id:"0a02be49-7454-4095-ab7f-f32bbc001ce7",
            top_id:"5b2bcfc4-1d73-4ea3-acce-28306eb64cbe",
          }
        ],
        count: 58
      }

    }
  },
  masterdata:{
    servers: {
      "d0246781-67c6-474b-8ab0-29de61b6e6bb": {
        locationDetail: {
          identifier:"4324",
          detail: {
            id:1,
            GLN13:"23",
            SGLN: "123",
            name:"name"
          }
        }
      }
    }
  },
  

};
