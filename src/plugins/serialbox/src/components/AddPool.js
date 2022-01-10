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

import PoolForm from "./PoolForm";
import {deleteResponseRule, loadResponseRulesForNumberPool} from "../reducers/numberrange";
const React = qu4rtet.require("react");
const {Component} = React;
const {connect} = qu4rtet.require("react-redux");
const {RightPanel} = qu4rtet.require("./components/layouts/Panels");
const {Card, Button, ButtonGroup} = qu4rtet.require("@blueprintjs/core");
const {FormattedMessage} = qu4rtet.require("react-intl");

class _AddPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, 
      responseRules: []
    };
    this.currentServer = this.props.servers[this.props.match.params.serverID];
    this.debounced = null;
    this.responserulesState=this.props.nr[this.props.match.params.serverID]
  }
  componentDidMount() {
    // setTimeout(()=>{this.processEntries();}, 500)
    this.processEntries();
    console.log("Props", this.props);
    console.log("State", this.state);
  }
  loadingScreen = () => {
    this.setState(
      { loading : true },
      () => {
          setTimeout(()=>{this.setState({loading : false})}, [])
      }
    );
  };
  processEntries = (clear = false) => {
    if (this.debounced) {
      clearTimeout(this.debounced);
    }
    this.debounced = setTimeout(() => {
      loadResponseRulesForNumberPool(
        this.props.server,
        this.responserulesState,
        sessionStorage.getItem("ResponseRulesID")
      )
      .then(() => {
        let pool = {};
        let pools = this.props.nr[this.props.match.params.serverID].pools;
        // most up to date.
        pool = pools.find(pool => {
          return pool.machine_name === this.props.match.params.poolName;
        });
        this.setState({
          loading: false,
          responseRules: pool,
        })
      })
    })
  };

  editResponseRule = responseRule => {
    let pool = this.getPool();
    this.props.history.push({
      pathname: `/number-range/add-response-rule/${
          this.props.match.params.serverID
      }/pool-id/${pool.id}`,
      state: {defaultValues: responseRule, edit: true, pool: pool}
    });
  };
  deleteResponseRule = responseRule => {
    let pool = this.getPool();
    this.props.deleteResponseRule(this.currentServer, responseRule);
  };
  getEditMode = () => {
    return (this.props.location.pathname.search('edit') > 0)
  };
  getPool = () => {
    let pool = {};
    let editMode = this.getEditMode();
    if (editMode) {
      try {
        pool = this.props.location.state.defaultValues;
      } catch (e) {
        // location state may not be available.
      }
    }
    if (this.props.match.params.poolName) {
      editMode = true;
      let pools = this.props.nr[this.props.match.params.serverID].pools;
      // most up to date.
      pool = pools.find(pool => {
        return pool.machine_name === this.props.match.params.poolName;
      });
    }
    return pool;
  };
  render() {
    let editMode = this.getEditMode();
    // let pool = this.getPool();
    console.log("Props", this.props);
    console.log("State", this.state);
    return (
        <RightPanel
            title={
              !editMode ? (
                  <FormattedMessage id="plugins.numberRange.addPool" />
              ) : (
                  <FormattedMessage id="plugins.numberRange.editPool" />
              )
            }>
            {/* 
            {<div>{this.state.responseRules.response_rules ?
              this.state.responseRules.response_rules.map(rr => <p>{rr.id}</p>)
              : 
              <p>no data</p>}
              </div>} 
              */}
          <div className="large-cards-container">
            <Card className="pt-elevation-4 form-card">
              <h5>
                {!editMode ? (
                    <FormattedMessage id="plugins.numberRange.addPool" />
                ) : (
                    <FormattedMessage id="plugins.numberRange.editPool" />
                )}
              </h5>
              <PoolForm
                  server={this.currentServer}
                  history={this.props.history}
                  pool={this.state.responseRules}
              />
            </Card>
            {editMode ? (
                <Card className="pt-elevation-4 form-card">
                  <h5>
                    <button
                        className="pt-button right-aligned-elem pt-interactive pt-intent-primary"
                        onClick={e => {
                          this.props.history.push({
                            pathname: `/number-range/add-response-rule/${
                                this.currentServer.serverID
                            }/pool-id/${this.state.responseRules.id}/`,
                            state: {pool: this.state.responseRules}
                          });
                        }}>
                      <FormattedMessage id="plugins.numberRange.addResponseRule" />
                    </button>
                    <FormattedMessage id="plugins.numberRange.responseRules" />
                  </h5>
                  {this.state.responseRules &&
                  Array.isArray(this.state.responseRules.response_rules) &&
                  this.state.responseRules.response_rules.length > 0 ? (
                      <table className="pt-table pt-interactive pt-bordered pt-striped">
                        <thead>
                        <tr>
                          <th>
                            <FormattedMessage
                                id="plugins.numberRange.ruleName"
                                defaultMessage="Rule Name"
                            />
                          </th>
                          <th>
                            {" "}
                            <FormattedMessage
                                id="plugins.numberRange.contentType"
                                defaultMessage="Content Type"
                            />
                          </th>
                          <th />
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.responseRules.response_rules
                            ? this.state.responseRules.response_rules.map(responseRule => {
                              return (
                                  <tr key={responseRule.id}>
                                    <td>
                                      {responseRule.rule
                                          ? this.props.rules.find(
                                              rule => rule.id === responseRule.rule
                                          ).name
                                          : null}
                                    </td>
                                    <td>{responseRule.content_type}</td>
                                    <td style={{width: "80px"}}>
                                      <ButtonGroup minimal small>
                                        <Button
                                            small="true"
                                            iconName="edit"
                                            onClick={this.editResponseRule.bind(
                                                this,
                                                responseRule
                                            )}
                                        />
                                        <Button
                                            small="true"
                                            iconName="trash"
                                            onClick={this.deleteResponseRule.bind(
                                                this,
                                                responseRule
                                            )}
                                        />
                                      </ButtonGroup>
                                    </td>
                                  </tr>
                              );
                            })
                            : null}
                        </tbody>
                      </table>
                  ) : null}
                </Card>
            ) : null}
          </div>
        </RightPanel>
    );
  }
}

export const AddPool = connect(
    (state, ownProps) => {
      return {
        server: state.serversettings.servers[ownProps.match.params.serverID],
        servers: state.serversettings.servers,
        nr: state.numberrange.servers,
        rules: state.capture.servers
            ? state.capture.servers[ownProps.match.params.serverID].rules
            : []
      };
    },
    {loadResponseRulesForNumberPool, deleteResponseRule}
)(_AddPool);
