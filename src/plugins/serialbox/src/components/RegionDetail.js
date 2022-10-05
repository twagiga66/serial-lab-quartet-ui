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

import {RegionCard} from "./RegionCard";
import "../style.css";
const React = qu4rtet.require("react");
const {Component} = React;
const {connect} = qu4rtet.require("react-redux");
const {pluginRegistry} = qu4rtet.require("./plugins/pluginRegistration");
const {withRouter} = qu4rtet.require("react-router");
const {Callout} = qu4rtet.require("@blueprintjs/core");
const {FormattedMessage} = qu4rtet.require("react-intl");
const classNames = qu4rtet.require("classnames");
const {DeleteDialog} = qu4rtet.require("./components/elements/DeleteDialog");
const {RightPanel} = qu4rtet.require("./components/layouts/Panels");
import {loadPools, loadRegions,loadRegionsForNumberPool, loadPool, loadExactRegionsForNumberPool,loadPoolList} from "../reducers/numberrange";

/**
 * _RegionDetail - Description
 * @extends Component
 */
class _RegionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alloc: 1, 
      lastUpdated: null, 
      loading: false,
    };
    // these two properties below make it easy to retrieve
    // and trigger actions.
    this.currentPool = {readable_name: "", machine_name: ""};

  }
  componentDidMount() {
    this.loadPoolDetailUpdated(this.props);
    // this.loadPoolDetail(this.props);
  }
  componentWillReceiveProps(nextProps) {

  }
  previewAlloc = evt => {
    this.setState({alloc: Number(evt.target.value)});
  };
  //PREVIOUS
  // loadPoolDetail(props) {
  //   for (let pool of this.props.pools) {
  //     if (pool.machine_name === props.match.params.pool) {
  //       this.currentPool = pool;
  //       console.log("pool", pool)
  //     }
  //   }
  //   this.props.loadRegions(
  //     pluginRegistry.getServer(props.server.serverID),
  //     this.currentPool
  //   );
  // }
  loadPoolDetail(props) {
    for (let pool of this.props.pools) {
      if (pool.machine_name === props.match.params.pool) {
        this.currentPool = pool;
      }
    }
    //NEW
    this.props.loadExactRegionsForNumberPool(
      pluginRegistry.getServer(props.server.serverID),
      this.currentPool
    )

  }
  //NEW REQUEST FOR ONE NUMBER POOL
  loadPoolDetailUpdated(props) {
    // this.setState({loading : true});
    // setTimeout(()=> this.setState({loading: false}), 3000);
    
    this.props.loadPool(pluginRegistry.getServer(props.server.serverID), this.props.match.params.pool);
    // setTimeout(()=> this.props.loadExactRegionsForNumberPool(pluginRegistry.getServer(props.server.serverID), this.props.pool), 500);
  }

  render() {
    let regions = this.props.currentRegions;
    return (
      <RightPanel
        title={
          <FormattedMessage
            id="plugins.numberRange.regionDetailTitle"
            values={{poolName: this.currentPool.readable_name}}
          />
        }>
        {
        this.state.loading === true ?
        <div className="region_loading">
          <div className="middle">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
            <div className="bar bar5"></div>
            <div className="bar bar6"></div>
            <div className="bar bar7"></div>
            <div className="bar bar8"></div>
          </div>
        </div>

        :
        <div className="auto-cards-container">
          {regions && regions.length > 0 ? (
            regions.map(region => (
              <RegionCard
                key={region.machine_name}
                lastUpdated={this.state.lastUpdated}
                region={region}
                alloc={this.state.alloc}
                pool={this.props.pool}
                serverID={this.props.server.serverID}
                serverObject={pluginRegistry.getServer(
                  this.props.server.serverID
                )}
                history={this.props.history}
              />
            ))
          ) : (
            <Callout>
              <div className="pt-running-text">
                <FormattedMessage id="plugins.numberRange.noRegionInPool" />
              </div>
            </Callout>
          )}
        </div>}
      </RightPanel>
    );
    //<div>{JSON.stringify(this.props.region)}</div>;
  }
}

export var RegionDetail = connect(
  (state, ownProps) => {
    return {
      server: state.serversettings.servers[ownProps.match.params.serverID],
      pools: state.numberrange.servers[ownProps.match.params.serverID].pools,
      currentRegions: state.numberrange.currentRegions,
      pool: state.numberrange.pool
    };
  },
  {
    loadPools, 
    loadPool,
    loadRegions, 
    loadRegionsForNumberPool,
    loadExactRegionsForNumberPool,
    loadPoolList
  }
)(_RegionDetail);
