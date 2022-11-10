import {createAction} from "redux-actions";

export default {
  loadPools: createAction("NUMBER_RANGE_LOAD_POOLS"),
  loadPool: createAction("NUMBER_RANGE_LOAD_POOL_DETAILS"),
  loadResponseRules: createAction("NUMBER_RANGE_LOAD_RESPONSE_RULES"),
  loadRegion: createAction("NUMBER_RANGE_LOAD_REGION"),
  loadRegions: createAction("NUMBER_RANGE_LOAD_REGIONS"),
  allocate: createAction("NUMBER_RANGE_ALLOCATE")
};
