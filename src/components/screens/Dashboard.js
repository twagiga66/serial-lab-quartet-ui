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
import classNames from "classnames";
import {RightPanel} from "components/layouts/Panels";
import {FormattedMessage} from "react-intl";
import {Large4} from "./Large4";
import "./Dashboard.css";
import {withRouter} from "react-router";
import Clock from "../elements/Clock";
import { releaseNotes, internalReleaseNotes } from './releseNotesData.json';

class _DashboardRight extends Component {
  constructor(props) {
    super(props);
    const appVersion = window.require("electron").remote.app.getVersion();
    this.state = {
      version: (appVersion + "_internal")
    };
  }
  componentDidMount() {
    if(this.state.version.split("").includes("i")) {
      sessionStorage.setItem("appVersion", true)
    }
    else {
      sessionStorage.setItem("appVersion", false)
    }
  }
  goTo = path => {
    this.props.history.push(path);
  };
  render() {
    let isDark = ["contrasted"].includes(this.props.theme) ? true : false;
    return (
      <div
        className={classNames({
          "dashboard-container": true,
          "pt-dark": isDark
        })}>
        <h2>QU4RTET</h2>
        <Clock />
        <h3>
          <FormattedMessage id="app.dashboard.dashboardHeader3" />
        </h3>
        <h4 className="version">
          <FormattedMessage
            id="app.dashboard.version"
            values={{appVersion: `${this.state.version}`}}
          />
        </h4>
        <Large4 />
        <div className="dashboard-actions-groups">
          <div className="dashboard-items-container">
            <div className="dashboard-items">
              <div className="dashboard-actions-group">
                <h4>
                  <FormattedMessage id="app.dashboard.start" />
                </h4>
                <ul>
                  <li>
                    <a onClick={this.goTo.bind(this, "/server-settings/")}>
                      <FormattedMessage id="app.serverSettings.addAServer" />
                    </a>
                  </li>
                  <li>
                    <a onClick={this.goTo.bind(this, "/plugins")}>
                      <FormattedMessage id="app.plugins.addPlugin" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dashboard-actions-group">
                <h4>
                  <FormattedMessage id="app.dashboard.resourcesDocumentation" />
                </h4>
                <ul>
                  <li>
                    <a
                      href="http://serial-lab.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      Serial Lab
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://serial-lab.gitlab.io/qu4rtet/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage
                        id="app.dashboard.documentationOnly"
                        values={{projectName: "QU4RTET"}}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://serial-lab.gitlab.io/quartet-ui/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage
                        id="app.dashboard.documentationOnly"
                        values={{projectName: "QU4RTET Desktop"}}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://serial-lab.gitlab.io/EPCPyYes/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage
                        id="app.dashboard.documentation"
                        values={{projectName: "EPCPyYes"}}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://serial-lab.gitlab.io/EParseCIS/readme.html"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage
                        id="app.dashboard.documentation"
                        values={{projectName: "EParseCIS"}}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://serial-lab.gitlab.io/quartet_epcis/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage
                        id="app.dashboard.documentation"
                        values={{projectName: "EPCIS"}}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://serial-lab.gitlab.io/quartet_masterdata"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage
                        id="app.dashboard.documentation"
                        values={{projectName: "Master Data"}}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://serial-lab.gitlab.io/serialbox/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage
                        id="app.dashboard.documentation"
                        values={{projectName: "Number Range"}}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://serial-lab.gitlab.io/quartet_output"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage
                        id="app.dashboard.documentation"
                        values={{projectName: "Output"}}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gitlab.com/lduros/quartet-ui-plugins-boilerplate/blob/tutorial/README.md"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FormattedMessage id="app.dashboard.desktopPluginTutorial" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dashboard-actions-group">
                <h4>
                  <FormattedMessage id="app.dashboard.releaseNotes" />
                </h4>
                {
                  internalReleaseNotes[0]
                  && 
                  this.state.version.split("_")[this.state.version.split("_").length - 1] === "internal"
                  ?
                  <ul>
                  <li>
                    <h6>{internalReleaseNotes[0].versionNumber}, {internalReleaseNotes[0].varsionName === undefined ? null : internalReleaseNotes[0].varsionName}</h6>
                  </li>
                  <li>
                    {internalReleaseNotes[0].versionFeatures.map((feature, index) => (
                      <div key={index} className="feature-description">
                        <g className="pt-icon-arrow-right" />
                      {" "}
                      {feature}
                      </div>
                    ))}
                  </li>
                  <li>
                    <a onClick={this.goTo.bind(this, '/release-notes')}>
                      <FormattedMessage id="app.dashboard.allReleaseNotes" />
                    </a>
                  </li>
                </ul>
                :
                <ul>
                  <li>
                    <h6>{releaseNotes[0].versionNumber}, {releaseNotes[0].versionName === undefined ? null : releaseNotes[0].versionName}</h6>
                  </li>
                  <li>
                    {releaseNotes[0].versionFeatures.map((feature, index) => (
                      <div key={index} className="feature-description">
                        <g className="pt-icon-arrow-right" />
                      {" "}
                      {feature}
                      {/* <FormattedMessage 
                      id={`app.dashboard.releaseNotesDescriptionsFeature.${releaseNotes[0].versionNumber}.${feature}`} /> */}
                      </div>
                    ))}
                  </li>
                  <li>
                    <a onClick={this.goTo.bind(this, '/release-notes')}>
                      <FormattedMessage id="app.dashboard.allReleaseNotes" />
                    </a>
                  </li>
                </ul>
              }
              
              </div>
            </div>
            <div className="dashboard-items">
              <div className="dashboard-actions-group">
                <h4>
                  <FormattedMessage id="app.dashboard.servers" />
                </h4>
                <ul>
                  {this.props.servers &&
                  Object.keys(this.props.servers).length > 0 ? (
                    Object.keys(this.props.servers).map(serverID => {
                      return (
                        <li key={serverID}>
                          <a
                            onClick={this.goTo.bind(
                              this,
                              `/server-details/${serverID}/`
                            )}>
                            {this.props.servers[serverID].serverSettingName}
                          </a>
                        </li>
                      );
                    })
                  ) : (
                    <li>
                      <FormattedMessage id="app.dashboard.noServerFound" />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const DashboardRight = connect((state, ownProps) => {
  return {
    servers: state.serversettings.servers,
    theme: state.layout.theme,
    intl: state.intl
  };
}, {})(withRouter(_DashboardRight));

export default props => {
  return (
    <RightPanel
      key="dashboard"
      title={<FormattedMessage id="app.nav.dashboard" />}>
      <DashboardRight />
    </RightPanel>
  );
};
