const {createAction} = qu4rtet.require("redux-actions");

export default {
  loadPools: createAction("NUMBER_RANGE_LOAD_POOLS"),
  loadResponseRules: createAction("NUMBER_RANGE_LOAD_RESPONSE_RULES"),
  loadRegion: createAction("NUMBER_RANGE_LOAD_REGION"),
  loadRegions: createAction("NUMBER_RANGE_LOAD_REGIONS"),
  allocate: createAction("NUMBER_RANGE_ALLOCATE")
};
