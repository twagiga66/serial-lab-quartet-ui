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

import React, {Component} from "react";
import {connect} from "react-redux";
import {RightPanel} from "components/layouts/Panels";
import {Card} from "@blueprintjs/core";
import PoolForm from "./PoolForm";
import {FormattedMessage} from "react-intl";

class _AddPool extends Component {
  constructor(props) {
    super(props);
    this.currentServer = this.props.nr[this.props.match.params.serverID];
  }
  componentDidMount() {}
  render() {
    let editMode =
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.editPool
        ? true
        : false;
    return (
      <RightPanel
        title={
          !editMode ? (
            <FormattedMessage id="plugins.numberRange.addPool" />
          ) : (
            <FormattedMessage id="plugins.numberRange.editPool" />
          )
        }>
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
              server={this.currentServer.server}
              history={this.props.history}
            />
          </Card>
        </div>
      </RightPanel>
    );
  }
}

export const AddPool = connect((state, ownProps) => {
  return {
    servers: state.serversettings.servers,
    nr: state.numberrange.servers
  };
}, {})(_AddPool);
